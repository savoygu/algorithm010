/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  /**
   * 递归回溯
   * 
   * 实现思路：
   *   先选择一个数字作为临时组合
   *    然后再进入递归和上一个组合进行组合，直到终止条件则为子集，收集起来
   * 
   * 复杂度分析：
   */
  const ans = []
  const subans = []
  function combineSub(start, subans) {
    // terminator
    const len = subans.length
    if (len === k) {
      ans.push(subans.slice(0))
      return
    }
    for (let i = start; i <= n - (k - len) + 1; i++) {
      // process current level logic 
      subans.push(i)
      // drill down
      combineSub(i + 1, subans)
      // reverse states
      subans.pop()
    }
  }
  combineSub(1, subans)
  return ans;

  /**
   * 迭代回溯
   */
  /*
  const ans = []
  const subans = []
  for (let i = 0; i < k; i++) {
    subans[i] = 0
  }

  if (n < k) return ans

  let i = 0
  while(i >= 0) {
    subans[i]++

    if (subans[i] > n) {
      i--
    } else if (i === k - 1) {
      ans.push(subans.slice(0))
    } else {
      ++i
      subans[i] = subans[i - 1]
    }
  }
  return ans
  */
};
// @lc code=end

