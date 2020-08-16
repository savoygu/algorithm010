/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  // 回溯

  const map = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
  ])

  const res = []
  if (digits.length !== 0) {
    backtrack('', digits)
  }
  return res

  function backtrack (combination, nextDigits) {
    if (!nextDigits.length) {
      res.push(combination)
      return
    }

    const digit = nextDigits.substring(0, 1)
    const letters = map.get(digit)
    for (let i = 0; i < letters.length; i++) {
      backtrack(combination + letters[i], nextDigits.substring(1))
    }
  }
  
};
// @lc code=end

