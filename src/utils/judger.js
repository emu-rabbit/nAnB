export default function judge(m, n) {
  let arr = ['-', '-', '-', '-', '-']
  let a = 0, b = 0
  for(let i = 0; i <= m.length-1; i ++) {
    const index = m.indexOf(n[i])
    if (index !== -1) {
      arr[index] = 'B'
      b++
    }
  }
  for(let i = 0; i <= m.length-1; i ++) {
    if (m[i] === n[i]) {
      arr[i] = 'A'
      a++
      b--
    }
  }
  return {
    a, b, pattern: arr.join('')
  }
}