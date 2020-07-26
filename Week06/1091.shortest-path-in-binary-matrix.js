/*
 * @lc app=leetcode.cn id=1091 lang=javascript
 *
 * [1091] 二进制矩阵中的最短路径
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  /**
   * 1. DP
   * 2. BFS
   * 3. A*
   */

  /**
   * 2. BFS
   */

  let q = [[0, 0, 2]], n = grid.length

  if (grid[0][0] || grid[n - 1][n - 1]) {
    return -1
  } else if (n <= 2) {
    return n
  }

  for (let [i, j, d] of q) {
    for (let [x, y] of [[i - 1, j - 1], [i - 1, j], [i - 1, j + 1], [i, j - 1], [i, j + 1], [i + 1, j - 1], [i + 1, j], [i + 1, j + 1]]) {
      if (x >= 0 && x < n && y >=0 && y < n && !grid[x][y]) {
        if (x === n - 1 && y === n - 1) {
          return d
        }
        q.push([x, y, d + 1])
        grid[x][y] = 1
      }
    }
  }

  return -1
};
// @lc code=end

