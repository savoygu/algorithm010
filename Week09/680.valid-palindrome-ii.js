/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {

  /**
   * 实现思路：
   *  记录不配对的数量，大于 1 返回 false
   */
  
  return valid(s, 0, s.length - 1, 0)

  function valid(s, l, r, cnt) {
    while(l < r) {
      if (s[l] !== s[r]) {
        cnt++
        if (cnt > 1) return false
        return valid(s, l, r - 1, cnt) || valid(s, l + 1, r, cnt) 
      }
      l++
      r--
    }
    return true
  }

  /*
  let l = 0, r = s.length - 1

  while(l < r) {
    if (s[l] === s[r]) {
      l++
      r--
      continue
    }

    return isValid(s, l + 1, r) || isValid(s, l, r - 1)
  } 

  return true

  function isValid (s, l, r) {
    while(l <= r) {
      if (s[l] !== s[r]) return false
      l++
      r--
    }
    return true
  }
  */
};
// @lc code=end

