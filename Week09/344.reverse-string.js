/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

  /**
   * 递归
   * 
   * 
   * 复杂度分析：
   *  时间复杂度：O(N)。执行了 N/2 次的交换。
   *  空间复杂度：O(N)，递归过程中使用的堆栈空间。
   */

  function helper (l, r) {
    if (l < r) {
      [s[l], s[r]] = [s[r], s[l]]
      helper(++l, --r)
    }
  }
  
  helper(0, s.length - 1)
  
  /**
   * 双指针
   *  l 指针指向首元素，r 指针指向伪元素，交换两个指针指向的元素，
   *   并向中间移动，直到两个指针相遇
   * 
   * 运行结果：
   *  478/478 cases passed (128 ms)
   *  Your runtime beats 42.61 % of javascript submissions
   *  Your memory usage beats 65.75 % of javascript submissions (44.3 MB)
   * 
   * 复杂度分析
   *  时间复杂度：O(N)。执行了 N/2 次的交换。
   *  空间复杂度：O(1)，只使用了常数级空间。
   */

  /*
  let l = 0, r = s.length - 1

  while(l < r) {
    [s[l++], s[r--]] = [s[r], s[l]]
  }
  // */
  
  /*
  if (!s) return;

  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    [s[j], s[i]] = [s[i], s[j]]
  }
  */
};
// @lc code=end

