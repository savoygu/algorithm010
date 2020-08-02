/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  /**
   * 计数排序
   */

  const count = new Array(1001).fill(0)

  for (let num1 of arr1) {
    count[num1]++
  }

  let i = 0; 
  for (let num2 of arr2) {
    while(count[num2] > 0) {
      arr1[i++] = num2
      count[num2]--
    }
  }

  for (let num1 = 0; num1 < count.length; num1++) {
    while(count[num1] > 0) {
      arr1[i++] = num1
      count[num1]--
    }
  }
  
  return arr1
};
// @lc code=end

