/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  // https://leetcode-cn.com/problems/powx-n/solution/powx-n-by-leetcode-solution/

  /**
   * 3. 分治（快速幂 + 迭代）
   * 
   * 复杂度分析：
   *  时间复杂度：O(logn)，即为对 n 进行二进制拆分的时间复杂度。
   *  空间复杂度：O(1)。
   */
  function quickMul (x, n) {
    let ans = 1.0
    // 贡献的初始值为 x
    let xContribute = x

     // 在对 N 进行二进制拆分的同时计算答案
    while(n > 0) {
      if (n % 2 === 1) {
        // 如果 N 二进制表示的最低位为 1，那么需要计入贡献
        ans *= xContribute
      }
      // 将贡献不断地平方
      xContribute *= xContribute
      // 舍弃 N 二进制表示的最低位，这样我们每次只要判断最低位即可
      n = Math.floor(n / 2)
    }
    
    return ans
  }
  
  if (n === 0 || x === 1) return 1

  if (n < 0) {
    x = 1 / x
    n = -n 
  }
  
  return quickMul(x, n)

  /**
   * 2. 分治（快速幂 + 递归）
   * 
   * 1. terminator
   * 2. process (split you big problem)
   * 3. drill down(sub problems)
   * 4. merge(sub result)
   * 5. reverse states
   * 
   * 复杂度分析：
   *  时间复杂度：O(logN)
   *  空间复杂度：O(logN)
   */
  /*
  if (n === 0 || x === 1) return 1

  if (n < 0) {
    x = 1 / x
    n = -n
  }

  function fastPow (x, n) {
    if (n === 1) return x
    const half = fastPow(x, n / 2)
    return n % 2 === 0 ? half * half : half * half * x
  }

  return fastPow(x, n)
  */
  
  /**
   * 1. 暴力解法
   * 
   * 复杂度分析：
   *  时间复杂度：O(N)
   *  空间复杂度：O(1)
   */
  // if (n < 0) {
  //   x = 1 / x
  //   n = -n
  // }
  
  // let result = 1
  // for (let i = 0; i < n; i++) {
  //   result *= x
  // }
  // return result
};
// @lc code=end

