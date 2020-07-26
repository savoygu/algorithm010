/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  // 无向图连通分支个数

  /**
   * 1. DFS、BFS
   * 2. 并查集
   */

  /**
   * 2. 并查集
   * 
   * 创建并查集：
   *  1. 初始化
   *  2. 联合+查找
   */
  /*
  if (!M) return 0

  const n = M.length
  const p = new Array(n)
  
  for (let i = 0; i < n; i++) {
    p[i] = i
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (M[i][j] === 1) {
        union(p, i, j)
      }
    }
  }

  const set = new Set()

  for (let i = 0; i < n; i++) {
    set.add(parent(p, i))
  }

  return set.size

  function union (p, i, j) {
    const p1 = parent(p, i)
    const p2 = parent(p, j)
    p[p2] = p1
  }

  function parent (p, i) {
    let root = i

    while(p[root] !== root) {
      root = p[root]
    }

    while(p[i] !== i) {
      const x = i
      i = p[i]
      p[x] = root
    }

    return root
  }
  */

  /**
   * 1. DFS
   */

  /*
  const visited = new Set()
  let ret = 0 

  for (let i = 0; i < M.length; i++) {
    if (!visited.has(i)) {
      DFS(M, visited, i)
      ret++
    }
  }

  return ret

  function DFS (m, visited, i) {
    for (let j = 0; j < m.length; j++) {
      if (m[i][j] === 1 && !visited.has(j)) {
        visited.add(j)
        DFS(m, visited, j)
      }
    }
  }
  */

  /**
   * BFS
   * 
   * 复杂度分析：
   *  时间复杂度：O(n^2)，整个矩阵都要被访问。
   *  空间复杂度：O(n)，queue 和 visited 数组的大小。
   * 
   * 运行结果：
   *  113/113 cases passed (104 ms)
   *  Your runtime beats 20.99 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (40.9 MB)
   */
  
  // /*
  const visited = new Map()
  let count = 0
  const queue = []

  for (let i = 0; i < M.length; i++) {
    if (!visited.has(i)) {
      queue.push(i)

      while(queue.length) {
        const s = queue.shift()
        visited.set(s, true)

        for (let j = 0; j < M.length; j++) {
          if (M[s][j] === 1 && !visited.has(j)) {
            queue.push(j)
          }
        }
      }
      count++
    }
  }

  return count
  // */
};
// @lc code=end

