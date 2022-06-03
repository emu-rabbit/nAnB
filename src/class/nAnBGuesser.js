export default class nAnBGuesser {
  constructor(n) {
    this.n = n

    this.pool = []
    this.initPool()

    this.history = []
  }

  initPool() {
    const r = (n, arr, acc) => {
      if (n === 1) {
        arr.forEach(e => {
          this.pool.push(acc.concat(e).join(''))
        })
      } else {
        arr.forEach(e => {
          r(n - 1, arr.filter(el => el !== e), acc.concat(e))
        })
      }
    }
    r(this.n, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [])
  }

  guess() {
    const g = this.pool[Math.floor(Math.random() * this.pool.length)]
    this.history.push(g)
    return g
  }

  applyAB(ab) {
    const { a, b } = ab
    let tmp = []
    for(let i = 0; i <= this.pool.length-1; i ++) {
      const ab = this.judge(this.pool[i]);
      if (ab.a === a && ab.b === b) {
        tmp.push(this.pool[i])
      }
    }
    this.pool = tmp
    console.log({ poolLength: this.pool.length })
  }

  judge(n) {
    const m = this.history[this.history.length - 1]
    let a = 0, b = 0
    for(let i = 0; i <= this.n-1; i ++) {
      if (m.indexOf(n[i]) !== -1) {
        b++
      }
    }
    for(let i = 0; i <= this.n-1; i ++) {
      if (m[i] === n[i]) {
        a++
        b--
      }
    }
    return {
      a, b
    }
  }
}