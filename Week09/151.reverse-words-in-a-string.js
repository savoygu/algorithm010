/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

  // 2. 手动实现
  const trim = (s) => {
    let [l, r] = [0, s.length -1]

    while(l <=r && s[l] === ' ') l++ // 去除左边空格
    while(l <=r && s[r] === ' ') r-- // 去除右边空格

    const output = []

    while(l <= r) {
      if (s[l] !== ' ') {
        output.push(s[l])
      } else if (output[output.length - 1] !== ' ') {
        output.push(s[l])
      }
      l++
    }

    return output
  }

  const reverse = (l, L, R) => { // 反转数组元素
    while(L < R) {
      [l[L++], l[R--]] = [l[R], l[L]]
    }
  }

  const reverseEachWord = (l) => {
    n = l.length 
    let start = end = 0

    while(start < n) {
      while(end < n && l[end] !== ' ') end++ // 找到一个单词下标边界 [start, end - 1]
      reverse(l, start, end - 1) // 反转单词
      start = end = end + 1 // 跳过空格，找下一个单词
    }
  }

  const l = trim(s)
  reverse(l, 0, l.length - 1) // 两次反转 负负得正
  reverseEachWord(l)

  return l.join('')


  // 1. API
  // return s.split(' ').filter(v => v !== '').reverse().join(' ')
  // return s.split(/\s+/).reverse().join(' ')
  
};
// @lc code=end

