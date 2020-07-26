/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  // https://leetcode-cn.com/problems/word-ladder/solution/yan-du-you-xian-bian-li-shuang-xiang-yan-du-you-2/
  
  /**
   * 1. BFS
   * 2. DFS
   * 3. Two-ended BFS
   */

  /**
   * 3. Two-ended BFS 双端 DFS
   * 
   * 实现思路：
   *  分别从起点和终点执行广度优先搜索（更合理的做法是，每次从单词数量小的集合开始扩散），直到遍历的部分有交集，
   * 
   * 复杂度分析：
   * 
   * 运行结果：
   *  43/43 cases passed (128 ms)
   *  Your runtime beats 75.97 % of javascript submissions
   *  Your memory usage beats 50 % of javascript submissions (44.8 MB)
   */
    
  const wordListSet = new Set(wordList)
  if (!wordListSet.has(endWord)) {
    return 0
  }

  let beginSet = new Set([beginWord])
  let endSet = new Set([endWord])

  const visited = new Set()
  
  const wordLen = beginWord.length
  let step = 1
  
  while(beginSet.size) {
    if (beginSet.size > endSet.size) {
      ;[beginSet, endSet] = [endSet, beginSet]
    }

    const nextBeginSet = new Set()

    for (let key of beginSet) {
      for (let i = 0; i < wordLen; i++) {
        // for (let j = 'a'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
        //   const char = String.fromCharCode(j)
        for (let j = 0; j < 26; j++) {
          const char = String.fromCharCode(97 + j)

          if (char !== key[i]) {
            const nextWord = key.slice(0, i) + char + key.slice(i + 1)
            if (endSet.has(nextWord)) {
              return step + 1
            }

            if (!visited.has(nextWord) && wordListSet.has(nextWord)) {
              nextBeginSet.add(nextWord)
              visited.add(nextWord)
            }
          }
        }
      }
    }

    beginSet = nextBeginSet
    step++
  }

  return 0

  /**
   * 2. DFS 深度优先搜索
   * 
   * 实现思路：
   * 复杂度分析：
   * 运行结果：
   */
  /*
  if (wordList.indexOf(endWord) === -1) return 0

  const visited = new Set()
  
  let minLevel = Number.MAX_SAFE_INTEGER
  let level = 1

  function DFS (beginWord, level) {
    if (beginWord === endWord) {
      minLevel = Math.min(minLevel, level)
      return
    }

    for (let i = 0; i < wordList.length; i++) {
      const word = wordList[i]
      let diff = 0

      for (let j = 0; j < word.length; j++) {
        if (beginWord[j] !== word[j]) {
          diff++
          if (diff > 1) {
            break
          }
        }
      }

      if (diff === 1 && !visited.has(word)) {
        visited.add(word)
        DFS(word, level + 1)
        visited.delete(word)
      }
    }
  }

  DFS(beginWord, level)

  return (minLevel ^ Number.MAX_SAFE_INTEGER) === 0 ? 0 : minLevel
  */

  /**
   * 1. BFS 广度优先搜索
   * 
   * 实现思路：
   *  利用 hash 表存储单词列表，在遍历时用 26个英文字符 不断替换单词中的每个字符，
   *   通过新单词去 hash 表中查找，找到了就加入到 queue 中进行下一次的查找，同时标记为已访问，避免重复查找，
   *   如果找到的新单词与 endWord 一致，就返回结果
   * 
   * 复杂度分析：
   *   时间复杂度：O(26 * wordLen)
   *   空间复杂度：O(N)
   * 
   * 运行结果：
   *  43/43 cases passed (380 ms)
   *  Your runtime beats 30.36 % of javascript submissions
   *  Your memory usage beats 50 % of javascript submissions (45.9 MB)
   * 
   */
  /*
  if (wordList.indexOf(endWord) === -1) return 0
  
  const wordSet = new Set(wordList)
  wordSet.delete(beginWord)
  
  const visited = new Set([beginWord])

  const queue = [beginWord]

  const wordLen = beginWord.length
  let step = 1

  while(queue.length) {
    const currentSize = queue.length

    for (let i = 0; i < currentSize; i++) {
      const word = queue.shift()
      const chars = word.split('')

      for (let j = 0; j < wordLen; j++) {
        const originalChar = chars[j]

        for (let k = 'a'.charCodeAt(0); k <= 'z'.charCodeAt(0); k++) {
          const char = String.fromCharCode(k)
          if (char === originalChar) continue

          chars[j] = char

          const nextWord = chars.join('')
          if (wordSet.has(nextWord)) {
            if (nextWord === endWord) {
              return step + 1
            }

            if (!visited.has(nextWord)) {
              queue.push(nextWord)
              visited.add(nextWord)
            }
          }
        }

        chars[j] = originalChar
      }
    }

    step++
  }
  
  return 0
  */
  

  // BFS 模板
  /*
  function BFS (start) {
    const visited = []
    const queue = [start]

    while(queue.length) {
      const node = queue.pop()
      visited.push(node)

      // process current node here.
      process(node)
      
      const nodes = generateRelatedNodes(node)
      queue.push(...nodes)
    }
  }
  */
  
  // DFS 非递归写法 模板
  /*
  function DFS (root) {
    if (!root) return []
    
    const visited = []
    const stack = [root]

    while(stack.length) {
      const node = stack.pop()
      visited.push(node)

      // process current node here.
      process(node)

      const nodes = generateRelatedNodes(node)
      stack.push(...nodes)
    }
  }
  */

  // DFS 递归写法 模板
  /*
  const visited = new Set()

  function DFS (node, visited) {
    // terminator
    if (visited.has(node)) return

    visited.add(node)

    // process current node here.
    process(node)
    
    for (let nextNode of node.children) {
      if (!visited.has(nextNode)) {
        // drill down
        DFS(nextNode, visited)
      }
    }
  }
  */
  
};
// @lc code=end

