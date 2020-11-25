/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const n = nums.length

    let count = 0
    let end = n - 1 // 最后需要到达的位置，一开始是最后一位

    for (let i = n - 2; i >= 0; i--) {
      let start = i // 可跳到 end 的起点

      while(start >= 0) {
        if ((end - start) <= nums[start]) { // 可从 start 跳到 end
          i = start // 记录最后需要到达的点
        }
        start--
      }

      count++
      end = i // 更新最后需要到达的点
    }

    return count
};
// @lc code=end
