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
        return /^\d+$/.test(s)
      }
      return /^\d+$/.test(s) && !/(.).*\1/.test(s)
    }
  }
}