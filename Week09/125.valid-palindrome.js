/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

  const isLetterOrDigit = (c) => {
    const code = c.charCodeAt()

    return code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122
  }


  let l = 0, r = s.length - 1
  
  while (l < r) {
    while(l < r && !isLetterOrDigit(s[l])) l++
    while(l < r && !isLetterOrDigit(s[r])) r--
    
    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false
    l++
    r--
  }

  return true

  // 2. 双指针
  /*
  let lod = ''
  for (let c of s) {
    if (isLetterOrDigit(c)) {
      lod += c.toLowerCase()
    }
  }

  let l = 0, r = lod.length - 1
  
  while (l < r) {
    if (lod[l] !== lod[r]) return false
    l++
    r--
  }

  return true
  */
  

  // 1.刷选 + 判断

  // /*
  /*
  let lod = ''
  for (let c of s) {
    if (isLetterOrDigit(c)) {
      lod += c.toLowerCase()
    }
  }

  return lod.split('').reverse().join('') === lod
  */

  // */
};
// @lc code=end

