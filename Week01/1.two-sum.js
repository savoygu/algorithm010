/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  
  /**
   * 1. 暴力解法
   * 2. 哈希表
   */

  /**
  * 2. 哈希表
  * 
  * 实现思路：
  *   通过 map 保存访问过未满足条件的的元素及下标，通过 target - nums[i] 向 map 中查找是否已保存该元素
  *     如果已保存，返回 保存元素的下标及 i
  * 
  * 复杂度分析：
  *   时间复杂度：O(n)
  *   空间复杂度：O(n)
  * 
  * 运行结果：
  *  29/29 cases passed (80 ms)
  *  Your runtime beats 66.13 % of javascript submissions
  *  Your memory usage beats 6.78 % of javascript submissions (37.1 MB)
  * 
  */

  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const next = target - nums[i]
    if (map.has(next)) {
      return [map.get(next), i]
    }
    map.set(nums[i], i)
  }

  return map

  /*
  const map = {}
  
  for (let i = 0; i < nums.length; i++) {
    const next = target - nums[i];
    if (map[next] !== undefined) {
      return [map[next], i]
    }
    map[next] = i
  }

  return map
  */
  
  /**
   * 1. 暴力解法
   * 
   * 实现思路：
   *  两重循环，分别获取不同位置的下标 i, j 的对应元素 nums[i], nums[j] 相加如果为 target，
   *   那么 i, j 就是要返回的下标
   * 
   * 复杂度：
   *   时间复杂度：O(n^2)
   *   空间复杂度：O(1)
   * 
   * 运行结果：
   *  29/29 cases passed (136 ms)
   *  Your runtime beats 44.47 % of javascript submissions
   *  Your memory usage beats 36.44 % of javascript submissions (35.2 MB)
   */

   /*
  for (let i = 0, len = nums.length; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  */
  
};
// @lc code=end

