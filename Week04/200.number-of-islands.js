/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  /**
   * dfs 深度优先搜索
   * 
   * 实现思路：
   *   把上下左右看成树的节点，然后沿着一条线（上、下、左、右）查找（dfs），遇到 1 就把数量增加 1，
   *    然后把 1 修改为 0，接着去 上、下、左、右 查找，遇到 1 就改 为 0 ，遇到 0 或者超出边界就退出，
   *     直接把岛屿遍历完成。
   * 
   * 复杂度分析：
   *   时间复杂度：O(MN)，其中 M 和 N 分别为行数和列数。也就是二重循环迭代次数。
   *   空间复杂度：O(MN)，在最坏情况下，这个网格均为陆地，深度优先搜索的深度达到 MN。
   */
  let count = 0
  const rows = grid.length
  if (rows === 0) return count
  const cols = grid[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        count++
        dfs(grid, i, j)
      }
    }
  }

  return count

  function dfs(grid, i, j) {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === '0') return
    grid[i][j] = '0'

    dfs(grid, i - 1, j)
    dfs(grid, i, j - 1)
    dfs(grid, i + 1, j)
    dfs(grid, i, j + 1)
  }
};
// @lc code=end

