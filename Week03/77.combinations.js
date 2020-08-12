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

  const res = []
  if (n <= 0 || k <= 0 || n < k) return res

  dfs(1, [])
  return res

  function dfs (begin, path) {
    const len = path.length
    // terminator
    if (len === k) {
      res.push(path.slice())
      return
    }

    /**
     * i 的极限值满足：n - i + 1 = (k - len)
     * 关键：n - i + 1 是闭区间 [i, n] 的长度
     * k - len 是剩余还要寻找的数的个数
     */
    for (let i = begin; i <= n - (k - len) + 1; i++) {
      // process current level logic 
      path.push(i)
      // drill down
      dfs(i + 1, path)
      // reverse states
      path.pop()
    }
  }

  /**
   * 迭代回溯
   */
  /*
  const res = []
  const path = []
  for (let i = 0; i < k; i++) {
    path[i] = 0
  }

  if (n < k) return res

  let i = 0
  while(i >= 0) {
    path[i]++

    if (path[i] > n) {
      i--
    } else if (i === k - 1) {
      res.push(path.slice(0))
    } else {
      ++i
      path[i] = path[i - 1]
    }
  }
  return res
  */
};
// @lc code=end

