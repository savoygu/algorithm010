/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // https://leetcode-cn.com/problems/search-in-rotated-sorted-array/solution/ji-jian-solution-er-fen-tiao-jian-de-tiao-jian-shu/

  /**
   * 二分查找
   * 
   * 实现思路：
   *   先根据 nums[mid] 和 nums[left] 的关系判断是在左段还是右段，
   *    接下来在判断 target 是在 mid 的左边还是右边，从而来调整左右边界 left 和 right.
   * 
   * 复杂度分析；
   *   时间复杂度：O(logn)
   *   空间复杂度：O(1)
   */

  let left = 0, right = nums.length - 1

  while(left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) return mid

    if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
};
// @lc code=end

