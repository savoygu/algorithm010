/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

  /**
   * 作者：guanpengchn
   * 链接：https://leetcode-cn.com/problems/merge-sorted-array/solution/hua-jie-suan-fa-88-he-bing-liang-ge-you-xu-shu-zu-/
   * 1. 双指针 / 从后往前
   * 
   * 实现思路：
   *  因为 nums1 的空间都集中在后面，所以从后向前处理排序的数据会更好，节省空间，一边遍历一边将值填充进去
   *   设置指针 len1 和 len2 分别指向 nums1 和 nums2 的有数字尾部，从尾部值开始比较遍历，同时设置指针 len 指向 nums1 的最末尾，
   *   每次遍历比较值大小之后，则进行填充
   *  当 len1<0 时遍历结束，此时 nums2 中还有数据未拷贝完全，将其直接拷贝到 nums1 的前面，最后得到结果数组
   * 
   * 复杂度分析：
   *  时间复杂度：O(m + n)
   *  空间复杂度：O(1)
   * 
   * 运行结果：
   *  59/59 cases passed (84 ms)
   *  Your runtime beats 15.08 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (32.1 MB)
   */

  let end1 = m - 1
  let end2 = n - 1
  let end = m + n - 1

  while (end1 >= 0 && end2 >= 0) {
    nums1[end--] = nums1[end1] > nums2[end2] ? nums1[end1--] : nums2[end2--]
  }

  if (end1 < 0) {
    for (let i = 0; i < end2 + 1; i++) {
      nums1[i] = nums2[i]
    }
  }
  
};
// @lc code=end

