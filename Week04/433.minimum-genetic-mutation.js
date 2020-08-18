/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  // Note: 与 127 题 单词接龙思路一致

  /**
   * 解法：
   * 1. DFS
   * 2. BFS
   */

  /**
   * 1. DFS
   */
  const bankSet = new Set(bank)
  if (!bankSet.has(end)) return -1
  
  const visited = new Set([start])
  let minSteps = Number.MAX_SAFE_INTEGER
  let steps = 0

  DFS(start, steps)

  return minSteps === Number.MAX_SAFE_INTEGER ? -1 : minSteps

  function DFS (start, steps) {
    if (start === end) {
      minSteps = Math.min(minSteps, steps)
      return
    }

    for (let i = 0, len = bank.length; i < len; i++) {
      const mutation = bank[i]
      let diff = 0
      
      for (let j = 0; j < mutation.length; j++) {
        if (start[j] !== mutation[j]) {
          diff++
          if (diff > 1) break
        }
      }

      if (diff === 1 && !visited(mutation)) {
        visited.add(mutation)
        DFS(mutation, steps + 1)
        visited.delete(mutation)
      }
    }
  }
  
  /**
   * 2. BFS
   */
  /*
  const bankSet = new Set(bank)
  if (!bankSet.has(end)) return -1

  const mutationChars = ['A', 'C', 'G', 'T']
  const mutationCharsLen = mutationChars.length
  const visited = new Set([start])
  const queue = [start]

  const bankLen = start.length
  let steps = 0

  while(queue.length) {
    const curQueueLen = queue.length

    for (let i = 0; i < curQueueLen; i++) {
      const mutation = queue.shift()
      const chars = mutation.split('')

      for (let j = 0; j < bankLen; j++) {
        const originalChar = chars[j]

        for (let k = 0; k < mutationCharsLen; k++) {
          const char = mutationChars[k]
          if (char === originalChar) continue

          chars[j] = char
          const nextMutation = chars.join('')
          if (bankSet.has(nextMutation)) {
            if (nextMutation === end) {
              return steps + 1
            }

            if (!visited.has(nextMutation)) {
              queue.push(nextMutation)
              visited.add(nextMutation)
            }
          }
        }

        chars[j] = originalChar
      }
    }
    steps++
  }

  return -1
  // */

};
// @lc code=end

