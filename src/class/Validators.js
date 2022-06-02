export default class Validators {
  static range(start, end) {
    return (str) => {
      const num = parseInt(str)
      return !isNaN(num) && num >= start && num <= end
    }
  }
}