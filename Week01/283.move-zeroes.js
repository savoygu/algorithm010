/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 参考：https://leetcode-cn.com/problems/move-zeroes/solution/dong-hua-yan-shi-283yi-dong-ling-by-wang_ni_ma/

  /**
   * 方法2. 双指针滑动，交换非零元素和零元素的位置
   * 思路：循环遍历数组，当遇到非 0 元素则开始交换慢指针所指的 0 元素，
   *   j 为慢指针，指向最新一个 0 元素的位置
   * 复杂度分析：
   *   时间复杂度：O(n)，假设有n个元素需要遍历n次
   *   空间复杂度：O(1)，只是对原数组进行替换操作
   */
  
  for (let j = 0, i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i > j) {
        nums[j] = nums[i]
        nums[i] = 0
      }
      j++
    }
  }

  /**
   * 方法1：统计 0 元素
   * 思路：循环记录 0 元素的个数，并且遇到非 0 元素的时候，
   *   将非 0 元素替换到 0 元素的位置，count 记录 0 元素的个数，
   *   i - count 实际上是记录了 0 元素的位置
   * 复杂度分析：
   *   时间复杂度：O(n)，假设有 n 个元素，需要遍历 n 次
   *   空间复杂度：O(1)，只是对原数组进行替换操作
   */
  // let count = 0
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === 0) {
  //     count++
  //   } else if (count > 0) {
  //     nums[i - count] = nums[i]
  //     nums[i] = 0
  //   }
  // }
};
// @lc code=end

