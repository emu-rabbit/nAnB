<template>
  <div :class="$style.container">
    <div :class="$style.box">
      <div :class="$style.header">
        {{ t('bot_name') }}
        <img :src="require('@/assets/github.png')" @click="openGithub()" />
      </div>
      <router-view :class="$style.chat" />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  useScope: 'global'
})

const openGithub = () => {
  window.open('https://github.com/immortalmice/nAnB')
}
</script>

<style lang="scss" module>
.container {
  width: 100vw;
  display: flex;
  justify-content: center;

  .box {
    width: 100vw;
    max-width: 600px;
    height: 100vh; /*給 Safari 以外的瀏覽器讀取*/
    height: calc(var(--vh, 1vh) * 100);
    border-left: #151515 1px solid;
    border-right: #151515 1px solid;

    .header {
      position: relative;
      height: 8vh; /*給 Safari 以外的瀏覽器讀取*/
      height: calc(var(--vh, 1vh) * 8);
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: #151515 1px solid;
      font-size: 1.5rem;
      background-color: #353535;
      z-index: 2;

      img {
        position: absolute;
        height: 5vh; /*給 Safari 以外的瀏覽器讀取*/
        height: calc(var(--vh, 1vh) * 5);
        top: 1.5vh;
        right: 1.5vh;
      }
    }

    .chat {
      height: 92vh; /*給 Safari 以外的瀏覽器讀取*/
      height: calc(var(--vh, 1vh) * 92);
    }
  }
}
</style>