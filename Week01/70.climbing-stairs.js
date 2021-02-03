/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 官方视频题解： https://leetcode-cn.com/problems/climbing-stairs/solution/pa-lou-ti-by-leetcode-solution/

  /**
   * 题目分析：
   *  第 1 级台阶：1 种方法（爬 1 级）
   *  第 2 级台阶：2 种方法（爬 1 级或爬 2 级）
   *  第 n 级台阶：从第 n - 1 级台阶爬 1 级或从第 n - 2 级台阶爬 2 级
   * 
   *  递推公式：f(n) = f(n - 1) + f(n - 2)
   */

  /**
   * 4. 递推数列的通项公式
   * 
   * 复杂度分析：
   *  时间复杂度：O(logn)
   *  空间复杂度：O(1)
   * 
   * 运行结果：
   *  45/45 cases passed (64 ms)
   *  Your runtime beats 78.69 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (32.4 MB)
   */
  // const sqrt5 = Math.sqrt(5)
  // return (Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1)) / sqrt5

  /**
   * 3. 通项公式矩阵形式（斐波那契额数列）
   * 
   * 复杂度分析：
   *  时间复杂度：O(logn)
   *  空间复杂度：O(1)
   */

  // TODO: 公式推导有点复杂

  /**
   * 2. 动态规划 -> 大问题最优解由子问题最优解得到
   *  把爬到每一级台阶的方法看做一个状态，用 dp 数组记录状态，从 1 到 n 依次更新每个状态
   * 
   * 复杂度分析：
   *  时间复杂度：O(n)
   *  空间复杂度：O(n)
   * 
   * 运行结果：
   *  45/45 cases passed (92 ms)
   *  Your runtime beats 6.11 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (32.4 MB)
   * 
   * 缺点：虽然记录了全部 n 个状态，但只有两个状态在更新下一个状态过程中被用到，
   *   如果只记录两个状态，就能把空间复杂度从 O(n) 优化到 O(1)
   */

  /*
  const dp = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
  */
  
  /**
   * 滚动数组：优化状态，降低空间复杂度到 O(1)
   */
  /*
  if (n <= 2) return n
  let a = 1, b = 2, res
  for (let i = 3; i <= n; i++) {
    res = a + b
    a = b
    b = res
  }
  return res
  */

  /**
   * 1. 递归
   * 
   * 复杂度分析：
   *  时间复杂度：O(2^n)，递归树有 2^n 个节点
   *  空间复杂度：O(n)，其中 n 是指递归树深度
   * 
   * 缺点：有很多重复性计算
   */
  // if (n === 1) { return 1 }
  // if (n === 2) { return 2 }

  // return climbStairs(n - 1) + climbStairs(n - 2)

  // https://leetcode-cn.com/problems/climbing-stairs/solution/javaqing-wa-tiao-tai-jie-he-fei-bo-na-qi-shu-lie-2/
  // 尾递归

  return fabonacci(n, 1, 1)
  
  function fabonacci(n, a, b) {
    if (n <= 1) return b
    return fabonacci(n - 1, b, a + b)
  }
  
  /**
   * 记忆化递归：避免重复计算，优化时间复杂度
   * 
   * 复杂度分析：
   *  时间复杂度：O(n)，递归树中重复的节点只计算一次
   *  空间复杂度：O(n)，其中 n 是指递归树深度
   */
  /*
  const memo = [0, 1, 2]
  return climbStairsMemo(n, memo)

  function climbStairsMemo (n, memo) {
    if (memo[n]) return memo[n]
    return (memo[n] = climbStairsMemo(n - 1) + climbStairsMemo(n - 2))
  }
  */
};
// @lc code=end

