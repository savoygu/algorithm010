/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  /**
   * 1. DFS、BFS
   * 2. DP
   */

  /**
   * 2. DP
   */
  /*
  if (!grid || Array.isArray(grid) && !grid.length) return 0
  
  const m = grid.length
  const n = grid[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue
      else if (i === 0) grid[i][j] = grid[i][j - 1] + grid[i][j]
      else if (j === 0) grid[i][j] = grid[i - 1][j] + grid[i][j]
      else grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j]
    }
  }
  return grid[m - 1][n - 1]
  */
  

  /**
   * 1. DFS、BFS
   */

  /**
   * 运行结果：
   *  61/61 cases passed (100 ms)
   *  Your runtime beats 23.29 % of javascript submissions
   *  Your memory usage beats 14.29 % of javascript submissions (39.2 MB)
   */
  const m = grid.length
  const n = grid[0].length

  const memo = Array.from({ length: m }, (it1, i1) => {
    return Array.from({ length: n }, (it2, i2) => {
      return -1
    })
  })
  memo[0][0] = grid[0][0]
  return DFS(grid, m - 1, n - 1)

  function DFS (grid, r, c) {
    if (r < 0 || c < 0) return Number.MAX_SAFE_INTEGER
    if (memo[r][c] !== -1) return memo[r][c]
    return (memo[r][c] = Math.min(DFS(grid, r, c - 1), DFS(grid, r - 1, c)) + grid[r][c])
  }

};
// @lc code=end

