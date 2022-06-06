export default class Validators {
  static range(start, end) {
    return str => {
      const num = parseInt(str)
      return !isNaN(num) && num >= start && num <= end
    }
  }
  static nAnBAnswer(n, isRepeat) {
    return str => {
      const s = str.substring(0, n)
      if (isRepeat) {
        return str.length === n && /^\d+$/.test(s)
      }
      return str.length === n && /^\d+$/.test(s) && !/(.).*\1/.test(s)
    }
  }
  static nAnBab(n) {
    return str => {
      const ab = {
        a: parseInt(str[0]),
        b: parseInt(str[2])
      }

      return str.length <= 4
        && (str[1].toLowerCase() === 'A' || str[1].toLowerCase() === 'a' || str[1] === ' ') 
        && (!str[3] || str[3].toLowerCase() === 'B' || str[3].toLowerCase() === 'b') 
        && !isNaN(ab.a) 
        && !isNaN(ab.b) 
        && ab.a + ab.b <= n
    }
  }
}