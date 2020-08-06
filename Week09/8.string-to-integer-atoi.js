/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {

  /**
   * 使用 parseInt 简化处理逻辑
   *   不用考虑空格
   *   不用考虑正负号
   *   会忽略数字后的其他字符
   *   其他字符开头会返回 NaN
   * 
   * 运行结果：
   *  1079/1079 cases passed (100 ms)
   *  Your runtime beats 47.09 % of javascript submissions
   *  Your memory usage beats 77.13 % of javascript submissions (39.3 MB)
   */
  
  /*
  const num = parseInt(str, 10)
  let MAX_VALUE, MIN_VALUE
  if (isNaN(num)) return 0
  if (num > (MAX_VALUE = Math.pow(2, 31) - 1)) return MAX_VALUE
  if (num < (MIN_VALUE = -Math.pow(2, 31))) return MIN_VALUE
  return num
  */
  
  // /*
  if (!str.length) return 0

  let index = 0, sign = 1, answer = 0
  
  while(index < str.length && str[index] === ' ') index++

  if (['+', '-'].includes(str[index])) {
    sign = str[index] === '+' ? 1 : -1
    index++
  }

  const MAX_VALUE = Math.pow(2, 31) - 1
  const MAX_QUOTIENT = Math.floor(MAX_VALUE / 10)
  const REMAINDER = MAX_VALUE % 10
  
  while(index < str.length) {
    const digit = str[index].charCodeAt() - '0'.charCodeAt()
    console.log(digit)
    if (digit < 0 || digit > 9) break

    if (
      MAX_QUOTIENT < answer ||
      MAX_QUOTIENT === answer && REMAINDER < digit
    ) {
      return sign === 1 ? MAX_VALUE : -1 * (MAX_VALUE + 1)
    }

    answer = answer * 10 + digit
    index++
  }

  return sign * answer
  // */
  
  /**
   * 自动机
   * 
   * 运行结果：
   *  1079/1079 cases passed (120 ms)
   *  Your runtime beats 14.82 % of javascript submissions
   *  Your memory usage beats 5.32 % of javascript submissions (42.4 MB)
   */
  /*
  class Automaton {
    constructor() {
      this.stage = 'start'
      this.sign = 1
      this.answer = 0
      this.map = new Map([
        ['start', ['start', 'signed', 'in_number', 'end']],
        ['signed', ['end', 'end', 'in_number', 'end']],
        ['in_number', ['end', 'end', 'in_number', 'end']],
        ['end', ['end', 'end', 'end', 'end']]
      ])
    }

    getCol(char) {
      if (char === ' ') return 0
      if (['-', '+'].includes(char)) return 1
      if (!isNaN(char)) return 2
      return 3
    }
    
    get(char) {
      this.stage = this.map.get(this.stage)[this.getCol(char)]
      if (this.stage === 'in_number') {
        const answer = this.answer * 10 + (char - 0)
        this.answer = this.sign === 1 
          ? Math.min(answer, Math.pow(2, 31) - 1)
          : Math.min(answer, Math.pow(2, 31))
      } else if (this.stage === 'signed') {
        this.sign = char === '+' ? 1 : -1
      }
    }
  }

  const automaton = new Automaton()

  for (const char of str) {
    automaton.get(char)
  }

  return automaton.sign * automaton.answer
  */

};
// @lc code=end

