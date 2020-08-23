/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  /**
   * 记忆化搜搜 - 动态规划
   *  定义：
   *   F(S): 组成金额 S 所需要的最少硬币数量
   *   [C0...Cn-1]: 可选的 n 枚硬币面额值
   * 
   *  我们注意到这个问题有一个最优的子结构的性质，这是解决动态规划问题的关键。
   *    最优解可以从其子问题的最优结构造出来。
   *  
   *  如何把问题分解成子问题？
   *   假设我们知道 F(S) ，即组成金额 S 最少的硬币数，最后一枚硬币的面值是 C。
   *    那么由于问题的最优子结构，转移方程应为：
   *     F(S) = F(S-C) + 1
   *   
   */
  // 动态规划 - 自上而下
  /*
  // 初始条件检查
  if (amount < 1) return 0
  const count = new Array(amount).fill(0)
  // 动态规划入口
  return _coinChange(coins, amount, count)

  function _coinChange (coins, remain, count) {
    // 结束条件：此路径不通
    if (remain < 0) return -1
    // 结束条件：余额为 0 成功结束
    if (remain === 0) return 0
    // 之前计算过这种情况，直接返回结果，避免重复计算
    if (count[remain - 1] !== 0) return count[remain - 1]
    let min = Number.MAX_VALUE
    // 遍历当前递归子树的每一种情况
    for (let coin of coins) {
      // 用一下 coin 这个面值的硬币会怎样？ res 是这个方法的最优情况
      const res = _coinChange(coins, remain - coin, count)
      // res < 0 即为 res = -1, 此法失败， res > min 不是最优情况，舍去
      if (res >= 0 && res < min) {
        min = 1 + res
      }
    } 
    // count[remain - 1] 存储着给定金额 amount 的解
    // 若为 Number.MAX_VALUE 则该情况无解
    count[remain - 1] = min === Number.MAX_VALUE ? -1 : min
    return count[remain - 1]
  }
  */

  // 动态规划 - 自下而上
  /**
   * 定义：
   *  F(i)：组成金额 i 所需最少的硬币数量
   * 
   * 假设在计算 F(i) 之前，我们已经计算出了 F(0) 到 F(i - 1) 的答案。则 F(i) 对应的转移方程为
   *  F(i) = min(F(i - cj)) + 1，其中 j=0...n-1
   * 其中 cj 代表的是第 j 枚硬币的面值，即我们枚举最后一枚硬币面额是 cj，那么需要从 i−cj 这个金额的状态 F(i−cj) 转移过来，再算上枚举的这枚硬币数量 1 的贡献，由于要硬币数量最少，所以 F(i) 为前面能转移过来的状态的最小值加上枚举的硬币数量 1。
   * 
   */
  /*
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let coin of coins)  {
    for (let x = coin; x < amount + 1; x++) {
      dp[x] = Math.min(dp[x], dp[x - coin] + 1)
    }
  }
  return dp[amount] !== Infinity ? dp[amount] : -1
  */

  // dp[n]：表示凑成总金额为 n 所需要的最少的硬币个数
  if (!coins.length) return -1
  
  const dp = new Array(amount + 1).fill(0)
  
  for (let i = 1; i <= amount; i++) {
    let min = Number.MAX_VALUE
    for (const coin of coins) {
      if (i - coin >= 0 && dp[i - coin] < min) {
        min = dp[i - coin] + 1
      }
    }
    dp[i] = min
  }

  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount]
  
  /*
  if (!coins.length) return -1
  
  const dp = new Array(amount + 1).fill(Number.MAX_VALUE)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        // dp[i] 两种实现方式
        // 包含当前的 coin, 那么剩余钱就是 i - coin，这种操作要兑换的硬币数是 dp[i - coin] + 1
        // 不包含 coin，要兑换的硬币数是 dp[i]
        dp[i] = Math.min(dp[i - coin], dp[i])
      }
    }
  }
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount]
  */

  
  // 搜索回溯（超时）
  /*
  // 回溯三要素：退出条件，回溯过程，递归参数
  const _coinChange = (idx, coins, amount) => {
    // 回溯退出
    if (amount === 0) return 0
    
    // 回溯执行的条件，仍然有硬币可用或仍有余额
    if (idx < coins.length && amount > 0) {
      // 当前值有几个当前硬币表示（向下取整）
      const maxVal = Math.floor(amount / coins[idx])
      let minCost = Number.MAX_VALUE
      // 回溯核心内容，每取一个当前硬币，探索其他情况，x 为当前用了几个该面值硬币
      for (let x = 0; x <= maxVal; x++) {
        // 仍有余额，即 amount - x * coins[idx] >= 0
        if (amount >= x * coins[idx]) {
          // 用下一个硬币试试
          const res = _coinChange(idx + 1, coins, amount - x * coins[idx])
          // 回溯成功，下一种情况也有解
          if (res !== -1) {
            // 与目前的最优解比比看
            minCost = Math.min(minCost, res + x)
          }
        }
      }
      // 最小代价没有更新，说明所有方案无效
      return minCost === Number.MAX_VALUE ? -1  : minCost
    }
    // 没有执行上一个返回那就是一次也没有运行，直接失败
    return -1
  }
  
  return _coinChange(0, coins, amount)
  // */
};
// @lc code=end
