/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  /**
   * 1. 暴力解法 -> 双重循环
   * 2. 双指针(左右夹逼) -> 移动最小高度指针
   */

  /**
   * 方法2：双指针
   * 关键字：左右两边
   * 模式识别：需要移动左右两头的问题可以考虑双指针
   * 难点：如何移动指针(构成面积的因素)
   *   1. 相同情况下距离越远越好：如果右指针从最右边开始，以保证宽达到最长，
   *     再向左扫描的话，如果右边比原来的右边低或者一样，那么就可以跳过
   *     面积的计算(因为原来的宽度更大，现在的面积只会更小)，根据对称性，
   *     类似的，如果从左向右扫描的话，也只需要考虑比之前高的情况，那么
   *     应该如何决定是移动左指针还是右指针呢
   *   2. 区域受限于较短边：如果右边比左边高，那么应该固定右指针，移动左指针，
   *     因为低的一边限制了面积增大的可能，此时移动右指针，只会造成宽度边短，
   *     所以我们需要寻找更好的左指针点，同理，如果右边比左边低，应该固定左指针
   *     移动右指针
   * 复杂度分析：
   *   时间复杂度: O(n)，其中 n 为数组长度
   *   空间复杂度: O(1)
   */
  let i = 0, j = height.length - 1, maxArea = 0

  while(i < j) {
    if (height[i] > height[j]) {
      maxArea = Math.max(maxArea, height[j] * (j - i))
      j--
    } else {
      maxArea = Math.max(maxArea, height[i] * (j - i))
      i++
    }
  }

  return maxArea


  /**
   * 方法1：暴力解法
   * 思路：双重 for 循环，分别枚举容器的左边和右边，这样就找到了所有可能的盛水面积，
   *   只要取出其中最大的即可
   * 复杂度分析：
   *   时间复杂度: O(n^2)，其中 n 为数组长度
   *   空间复杂度: O(1)
   */
  // let maxArea = 0

  // for(let i = 0, length = height.length; i < length - 1; i++) {
  //   for (let j = 1; j < length; j++) {
  //     maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i))
  //   }
  // }

  // return maxArea
};
// @lc code=end

