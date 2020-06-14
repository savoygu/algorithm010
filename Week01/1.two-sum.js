/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {


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
  */
 
  /**
   * 执行用时: 80 ms, 在所有 JavaScript 提交中击败了 65.71% 的用户
   * 内存消耗: 36.8 MB , 在所有 JavaScript 提交中击败了 6.78% 的用户
   */
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const next = target - nums[i];
    if (map.has(next)) {
      return [map.get(next), i]
    }
    map.set(nums[i], i)
  }

  /**
   * 执行用时 : 76 ms, 在所有 JavaScript 提交中击败了 71.27% 的用户
   * 内存消耗 : 36.9 MB, 在所有 JavaScript 提交中击败了 6.78% 的用户
   */
  // const map = {}
  // for (let i = 0; i < nums.length; i++) {
  //   const next = target - nums[i];
  //   if (map[next] !== undefined) {
  //     return [map[next], i]
  //   }
  //   map[next] = i
  // }
  

  /**
   * 1. 暴力法
   * 
   * 实现思路：
   *  两重循环，分别获取不同位置的下标 i, j 的对应元素 nums[i], nums[j] 相加如果为 target，那么 i, j 就是要返回的下标
   * 
   * 复杂度：
   *   时间复杂度：O(n^2)
   *   空间复杂度：O(1)
   * 
   */

  // for (let i = 0; i < nums.length - 1; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j]
  //     }
  //   }
  // }

}