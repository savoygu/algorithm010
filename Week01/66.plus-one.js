/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  /**
   * 作者：yhhzw
   * 链接：https://leetcode-cn.com/problems/plus-one/solution/java-shu-xue-jie-ti-by-yhhzw/
   * 
   * 实现思路：
   *  只加一的所以有可能的情况就只有两种：
   *   除 9 之外的数字加一；
   *   数字 9。
   *  加一得十进一位个位数为 0 加法运算如不出现进位就运算结束了且进位只会是一。
   * 所以只需要判断有没有进位并模拟出它的进位方式，如十位数加 11 个位数置为 00，
   *  如此循环直到判断没有再进位就退出循环返回结果。
   * 然后还有一些特殊情况就是当出现 9999、999999 之类的数字时，循环到最后也需要进位，
   *  出现这种情况时需要手动将它进一位。
   * 
   * 复杂度分析：
   *  时间复杂度：O(n)
   *  空间复杂度：O(1)
   * 
   * 运行结果：
   *  109/109 cases passed (64 ms)
   *  Your runtime beats 89.29 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (32.2 MB)
   */
  
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++
    digits[i] %= 10
    if (digits[i] !== 0) return digits
  }
  return [1, ...digits]
};
// @lc code=end

