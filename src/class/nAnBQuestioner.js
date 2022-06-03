import judge from '@/utils/judger'

export default class nAnBQuestioner {
  constructor(n) {
    this.n = n
    const arr = []
    for (let i = 0; i <= 9; i ++) {
      arr.push(`${i}`)
    }
    for (let i = 9; i >= 0; i -= 1) {
      const rand = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[rand]] = [arr[rand], arr[i]];
    }
    this.ans = arr.slice(0, n).join('')
    this.history = []
  }

  onGuess(m) {
    const { a, b, pattern } = judge(m, this.ans)
    this.history.push(pattern)
    return {
      a, b
    }
  }

  generateShare() {
    let str = ''
    this.history.forEach(s => {
      let newS = ''
      newS = s.replace(/-/g, '\u2b1c')
      newS = newS.replace(/B/g, '\ud83d\udfe8')
      newS = newS.replace(/A/g, '\ud83d\udfe9')
      str += `${newS}\n`
    })
    return str
  }
}