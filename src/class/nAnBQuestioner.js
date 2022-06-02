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
  }

  judge(m) {
    let a = 0, b = 0
    for(let i = 0; i <= this.n-1; i ++) {
      if (m.indexOf(this.ans[i]) !== -1) {
        b++
      }
    }
    for(let i = 0; i <= this.n-1; i ++) {
      if (m[i] === this.ans[i]) {
        a++
        b--
      }
    }
    return {
      a, b
    }
  }
}