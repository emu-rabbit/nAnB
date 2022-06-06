import judge from '@/utils/judger'

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
    if (this.pool.length === 0) throw new Error('pool_empty')
    const g = this.pool[Math.floor(Math.random() * this.pool.length)]
    this.history.push(g)
    return g
  }

  applyAB(ab) {
    const { a, b } = ab
    let tmp = []
    for(let i = 0; i <= this.pool.length-1; i ++) {
      const ab = judge(this.history[this.history.length - 1], this.pool[i]);
      if (ab.a === a && ab.b === b) {
        tmp.push(this.pool[i])
      }
    }
    this.pool = tmp
    console.log({ poolLength: this.pool.length })
  }

  generateShare() {
    let str = 'nAnB Questioner!\n'
    str += `~${this.history.length} Round~\n`
    this.history.forEach(h => {
      const { pattern: s } = judge(h, this.history[this.history.length-1])
      let newS = ''
      newS = s.replace(/-/g, '\u2b1c')
      newS = newS.replace(/B/g, '\ud83d\udfe8')
      newS = newS.replace(/A/g, '\ud83d\udfe9')
      str += `${newS}\n`
    })
    return str
  }
}