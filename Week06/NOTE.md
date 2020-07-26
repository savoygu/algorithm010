学习笔记

> 脑图[算法训练营第六周-动态规划](https://www.processon.com/mindmap/5f0bc0061e08530ca8119a10)

不太容易找到DP 方程，后面会多加练习和总结

### 动态规划关键点

  1. 最优子结构 opt[n] = beset_of(opt[n - 1], opt[n - 2])
  2. 储存中间状态：opt[i]
  3. 递归公式（美名其曰：状态转移方程或者 DP 方程）

  - Fib: opt[n] = opt[n - 1] + opt[n - 2]
  - 二维路径：opt[i][j] = opt[i + 1][j] + opt[i][j + 1] （且判断 a[i, j] 是否为空地）

