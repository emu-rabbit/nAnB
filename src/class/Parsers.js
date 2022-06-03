export default class Parser {
  static int() {
    return (str) => parseInt(str)
  }
  static cut(n) {
    return str => str.substring(0, n)
  }
  static ab() {
    return str => ({
      a: parseInt(str[0]),
      b: parseInt(str[2])
    })
  }
}
