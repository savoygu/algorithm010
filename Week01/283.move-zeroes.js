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
   * 1. 暴力解法 -> 遇到为 0 的就删除当前元素，同时追加到末尾
   * 2. 双指针 -> 将所有非 0 元素置于数组前面，保持它们的相对顺序相同
   * 3. 快慢指针 -> 
   *   慢指针为第一个0元素（之前都是非零元素）
   *   快指针和慢指针中间的都是 0 元素
   * 
   */

  /**
   * 3. 快慢指针
   * 
   * 实现思路：
   *  参考快速排序思想，快速排序首先要确定一个待分隔的元素做中间点 x，
   *   然后把所有小于等于 x 的元素放到 x 的左边，大于 x 的元素放到其右边。
   *  这里可以用 0 当做这个中间点，把不等于 0（题目没有说不能有负数）的放到中间点的左边，
   *   等于 0 的放到其右边。
   *  这的中间点就是 0 本身，可以使用两个指针 i 和 j，只要 nums[i] !== 0，
   *   就交换 nums[i] 和 nums[j]，同时把 j++
   * 
   * 上一次思路：
   *  使用两个指针 i 和 j（记录 0 所在下标，非 0 就下移一位），只要 nums[i] !== 0，
   *   就交换 nums[i] 和 nums[j]，同时把 j 移动到下一位
   * 
   * 复杂度分析：
   *  时间复杂度: O(n)
   *  空间复杂度: O(1)
   * 
   * 运行结果：
   *  21/21 cases passed (80 ms)
   *  Your runtime beats 61.87 % of javascript submissions
   *  Your memory usage beats 5.55 % of javascript submissions (38.5 MB)
   */
  
  for (let j = 0, i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i > j) {
        // [nums[i], nums[j]] = [nums[j], nums[i]]
        nums[j] = nums[i]
        nums[i] = 0
      }
      j++
    }
  }

  return nums

  /**
   * 2. 双指针 + 两次遍历
   *  
   * 实现思路：
   *  创建两个指针 i 和 j，第一次遍历用 j 记录当前有多少非 0 元素。
   *   即遍历的时候每遇到一个非 0 元素就将其往数组左边挪（以j 为下标位置），同时把 j++，
   *   第一次遍历完后，j 指针的下标就指向了最后一个非 0 元素下标的后一位。
   * 
   * 上一次思路：
   *  1.第一次遍历时，用 j 指针记录非 0 的个数，同时把非 0 元素赋值给 nums[j]
   *  2.第二次遍历时，已知 “非 0 元素统计了 j 个，那么为 0 元素的个数为 nums.length - j”，
   *   把 j 到 nums.length - 1 的 nums 下标赋值为 0 即可
   * 
   * 复杂度分析：
   *  时间复杂度: O(n)
   *  空间复杂度: O(1)
   * 
   * 运行结果：
   *  21/21 cases passed (80 ms)
   *  Your runtime beats 61.87 % of javascript submissions
   *  Your memory usage beats 5.55 % of javascript submissions (38.3 MB)
   */

  /*
  let j = 0 // 非 0 元素的数量

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      j++
    }
  }

  while(j < nums.length) {
    nums[j] = 0
  }

  return nums
  */
 
  /**
   * 1. 暴力解法
   * 
   * 上一次思路：
   *  1. 遍历整个数组，判断 元素 是否为 0
  *   2. 遇到 0 删除，再在列表最后追加 0 
   * 
   * 复杂度分析：
   *  时间复杂度: O(n^2)
   *  空间复杂度: O(1)
   * 
   * 运行结果：
   *  21/21 cases passed (104 ms)
   *  Your runtime beats 10.18 % of javascript submissions
   *  Your memory usage beats 5.55 % of javascript submissions (37.2 MB)
   */

  /*
  for (let item of nums) {
    if (item === 0) {
      nums.push(0)
      nums.splice(nums.indexOf(item), 1)
    }
  }

  return nums
  */
};
// @lc code=end

