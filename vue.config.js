'use strict'
const path = require('path')
const loaderUtils = require('loader-utils')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: 'nAnB',

  outputDir: 'doc',
  assetsDir: 'static',
  productionSourceMap: false,

  devServer: {
    port: 9528,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },

  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: 'nAnB',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },

  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
          config.optimization.runtimeChunk('single')
        }
      )
  },

  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[hash:base64:8]',
          getLocalIdent: (context, localIdentName, localName, options) => {
            // 如果是非開發環境，使用hash值即可
            // 開發環境中最後輸出的class name帶有一些識別文字作為除錯使用
            if (process.env.NODE_ENV === 'development') {
              const array = context.resourcePath.split('\\')
              // 識別文字預設使用檔名
              let name = array[array.length - 1]
              // 如果檔名是index.vue，識別文字改用上一層資料夾名稱，減少都是index帶來的潛在撞名問題
              if (name === 'index.vue') {
                name = array[array.length - 2] || name
              }
              // 轉PascalCase並去除副檔名
              name = name.replace(/-./g, s => s.toUpperCase()[1]).replace(/\.[^/.]+$/, '')
              name = name.charAt(0).toUpperCase() + name.slice(1)
              // ---------- Vanila getLocalIdent Codes Start - 取得hash值用 --------------
              if (!options.context) {
                options.context = context.rootContext
              }

              const request = path
                .relative(options.context, context.resourcePath)
                .replace(/\\/g, '/')

              options.content = `${options.hashPrefix + request}+${localName}`

              const hash = loaderUtils.interpolateName(
                context,
                localIdentName,
                options
              )
                .replace(new RegExp('[^a-zA-Z0-9\\-_\u00A0-\uFFFF]', 'g'), '-')
              // ---------- Vanila getLocalIdent Codes End -------------------------------
              return `${name}_${localName}_${hash}`
            }
          }
        }
      }
    }
  }
}
