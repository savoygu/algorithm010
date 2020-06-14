/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  /**
  * 双指针（快慢指针）
  * 
  * 实现思路：
  *   有两个指针 i, j ，其中 i 为慢指针（用来记录不重复元素的位置），j 为快指针（用来记录数组迭代位置）
  *     当重复时 nums[i] === nums[j]， 就需要让 j 不断后移跳过重复项
  *     当不重复时 nums[i] !== nums[j]，就需要把 j 位置的元素复制到 i 下标的下一位 nums[i + 1]，同时 i++
  *   通过迭代不断重复以上过程，直到 j 执行到数组末尾
  * 
  * 复杂度分析：
  *   时间复杂度：O(n)
  *   空间复杂度：O(1)
  */
 
  /**
   * 执行用时: 68 ms, 在所有 JavaScript 提交中击败了 99.47% 的用户
   * 内存消耗: 38.3 MB, 在所有 JavaScript 提交中击败了 6.35% 的用户
   */

  let length = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) nums[length++] = nums[i]
  }
  return length

  /**
   * 执行用时: 84 ms, 在所有 JavaScript 提交中击败了 81.97% 的用户
   * 内存消耗: 38.3 MB, 在所有 JavaScript 提交中击败了 6.35% 的用户
   */

  // if (nums.length === 0) return 0
  
  // let i = 0
  // for (let j = 1; j < nums.length; j++) {
  //     if (nums[j] !== nums[i]) {
  //         nums[++i] = nums[j]
  //         // i++
  //         // nums[i] = nums[j]
  //     }
  // }
  // return i + 1

};
