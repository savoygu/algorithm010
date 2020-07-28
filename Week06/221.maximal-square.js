/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  // 作者：LeetCode-Solution
  // 链接：https://leetcode-cn.com/problems/maximal-square/solution/zui-da-zheng-fang-xing-by-leetcode-solution/
  
  /**
   * 1. 暴力解法
   * 2. DP
   * 3. 单调栈解法
   */

  // 单调栈详解
  // https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/xiang-jie-dan-diao-zhan-bi-xu-miao-dong-by-sweetie/

  /**
   * https://leetcode-cn.com/problems/maximal-square/solution/zui-da-ju-xing-zheng-fang-xing-de-dan-diao-zhan-ji/
   * 
   * 3. 单调栈解法
   * 
   * 运行结果：
   *  73/73 cases passed (104 ms)
   *  Your runtime beats 27.45 % of javascript submissions
   *  Your memory usage beats 33.33 % of javascript submissions (42.3 MB)
   */

  if (!matrix || !Array.isArray(matrix) || !matrix.length) return 0

  const rows = matrix.length
  const cols = matrix[0].length

  const dp = Array.from({ length: rows }, _ => new Array(cols).fill(0))

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = dp[i - 1][j] + 1
        }
      }
    }
  }

  let ans = 0


  function largeArea(heights) {
    const tmp = [0, ...heights, 0]
    const q = []
    let area = 0

    for (let i = 0; i < tmp.length; i++) {
      while(q.length && tmp[i] < tmp[q[q.length - 1]]) {
        const h = tmp[q.pop()]
        const w = i - q[q.length - 1] - 1
        const side = Math.min(h, w)
        area = Math.max(area, side ** 2)
      }
      q.push(i)
    }

    return area
  }
  
  for (let i = 0; i < rows; i++) {
    ans = Math.max(ans, largeArea(dp[i]))
  }
  
  return ans

   /**
    * 2. DP
    * 
    * 实现思路：
    *  用 dp(i, j) 表示以 (i, j) 为右下角，且只包含 1 的正方形的边长最大值。如果能计算出所有 dp(i, j) 的值，
    *   那么其中的最大值即为矩阵中只包含 1 的正方形的边长最大值，其平方即为最大正方形的面积。
    *  
    *  检查在矩阵中该位置的值：
    *   如果该位置的值是 0，则 dp(i, j) = 0，因为当前位置不可能在由 1 组成的正方形中；
    *   如果该位置的值是 1，则 dp(i, j) 的值由其上方、左方和左上方的三个相邻位置的 dp 值决定。具体而言，
    *    当前位置的元素值等于三个相邻位置的元素中的最小值加 1，状态转移方程如下：
    * 
    *    dp(i,j)=min(dp(i−1,j),dp(i−1,j−1),dp(i,j−1))+1
    * 
    *   此外，还需要考虑边界条件。如果 i 和 j 中至少有一个为 0，则以位置 (i, j) 为右下角的最大正方形的边长只能是 1，
    *     因此 dp(i, j) = 1。
    * 
    * 运行结果：
    *  73/73 cases passed (104 ms)
    *  Your memory usage beats 100 % of javascript submissions (40.3 MB)
    *  Your runtime beats 27.45 % of javascript submissions
    */
  /*
  if (!matrix || !Array.isArray(matrix) || !matrix.length) return 0

  const rows = matrix.length
  const cols = matrix[0].length
   
  const dp = Array.from({ length: rows }, _ => new Array(cols).fill(0))
  let maxSide = 0
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1
        }

        maxSide = Math.max(maxSide, dp[i][j])
      }
    }
  }

  return maxSide ** 2
  */

   /**
    * 1. 暴力解法
    * 
    * 实现思路：
    *  遍历矩阵中的每个元素，每次遇到 1，则将该元素作为正方向的左上角
    *  确定正方形的左上角后，根据左上角所在的行和列计算可能的最大正方形的边长（正方形的范围不能超出矩阵的行数和列数），
    *   在该边长范围内寻找只包含 1 的最大正方形；
    *  每次在下方新增一行以及在右方新增一列，判断新增的行和列是否满足所有元素都是 1。
    * 
    * 复杂度分析：
    *  时间复杂度：O(mn min(m,n)^2)
    *   需要遍历整个矩阵寻找每个 1，遍历矩阵的时间复杂度是 O(mn)。
    *   对于每个可能的正方形，其边长不超过 m 和 n 中的最小值，需要遍历该正方形中的每个元素判断是不是只包含 1，
    *    遍历正方形时间复杂度是 O(min(m,n)^2)。
    *  空间复杂度：O(1)。额外使用的空间复杂度为常数。
    * 
    * 运行结果：
    *  73/73 cases passed (108 ms)
    *  Your runtime beats 23.48 % of javascript submissions
    *  Your memory usage beats 100 % of javascript submissions (39.2 MB)
    */
  /*
  if (!matrix || Array.isArray(matrix) && !matrix.length) return 0

  const rows = matrix.length
  const cols = matrix[0].length

  let maxSide = 0

  const isSquare = (r, c, side) => {
    if ((r + side) > rows || (c + side) > cols) return false // 保证不越界

    for (let i = 0; i < side; i++) {
      for (let j = 0; j < side; j++) {
        if (matrix[r + i][c + j] !== '1') {
          return false
        }
      }
    }

    return true // 全是 1
  }

  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      if (matrix[i][j] !== '1') {
        continue
      }
      let side = maxSide + 1
      let square = isSquare(i, j, side) // 尝试去找更大的正方形

      while(square) {
        maxSide = side // 找到了，更新最大边长
        side += 1 // 再去找
        square = isSquare(i, j, side)
      }
    }
  }

  return maxSide ** 2
  */
};
// @lc code=end

