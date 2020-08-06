/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const split = (s) => {
    const words = []
    let word = ''
    for (let i = 0; i < s.length; i++) {
      if (s[i] === ' ') {
        words.push(word)
        word = ''
      } else {
        word += s[i]
      }
    }
    words.push(word)
    return words
  }

  const reverse = (s) => {
    let res = ''
    for (const c of s) {
      res = c + res
    }
    return res
  }

  const words = split(s)
  let res = ''
  for (const word of words) {
    res += reverse(word) + ' '
  }
  return res.slice(0, -1)
  
  /*
  const split = (s) => {
    let [l, r] = [0, s.length - 1]

    const output = []
    while(l <= r) {
      output.push(s[l++])
    }
    
    return output
  }
  
  const reverse = (l, L, R) => {
    while(L < R) {
      [l[L++], l[R--]] = [l[R], l[L]]
    }
  }

  const reverseEachWord = (l) => {
    n = l.length
    let start = end = 0

    while(start < n) {
      while(end < n && l[end] !== ' ') end++
      reverse(l, start, end - 1)
      start = ++end
    }
  }


  // const l = split(s)
  const l = s.split('')
  reverseEachWord(l)

  return l.join('')
  */
  
  // 1. 利用 API
  // return s.split(' ').map(v => v.split('').reverse().join('')).join(' ')
};
// @lc code=end

