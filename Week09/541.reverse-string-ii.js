/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  // 5. 间隔次数分奇数偶数
  s = s.split('')

  let res = ''

  for (let i = 0, n = s.length; i < n; i += k) {
    res += (
      (i / k) % 2 === 0 
        ? s.slice(i, i + k).reverse() 
        : s.slice(i, i + k)
    ).join('')
  }
  
  return res


  // 4.
  /*
  const p = 2 * k 
  // return Array.from({ length: Math.ceil(s.length / p) }, (_, i) => {
  //   const cp = i * p
  //   return [...s.slice(cp, cp + k)].reverse().join('') + s.slice(cp + k, cp + p)
  // }).join('')

  // */


  // 3. 
  /*
  const p = 2 * k 
  return Array.from({ length: Math.ceil(s.length / p) }).reduce((acc, _, i) => {
    const cp = i * p
    return (acc += [...s.slice(cp, cp + k)].reverse().join('') + s.slice(cp + k, cp + p))
  }, '')
  // */


  // 2.
  /**
   * 运行结果：
   *  60/60 cases passed (80 ms)
   *  Your runtime beats 49.43 % of javascript submissions
   *  Your memory usage beats 92.31 % of javascript submissions (39.7 MB)
   */

  /*
  let res = ""

  while(s) {
    res += s.slice(0, k).split('').reverse().join('')
    res += s.slice(k, 2 * k)
    
    s = s.slice(2 * k)
  }
  
  return res 
  // */


  // 1. 
  /**
   * 运行结果：
   *  60/60 cases passed (92 ms)
   *  Your runtime beats 27.59 % of javascript submissions
   *  Your memory usage beats 76.92 % of javascript submissions (40 MB)
   */
  
  /*
  s = s.split('')
  
  function reverse(s, l, r) {
    while(l < r) {
      [s[l++], s[r--]] = [s[r], s[l]]
    }
  }

  for (let i = 0, n = s.length, kLen; i < n; i += 2 * k) {
    reverse(s, i, (kLen = i + k - 1) < n ? kLen : n - 1)
  }

  return s.join('')
  // */
};
// @lc code=end

