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

  // DFS
  /*
  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return 0

  wordSet.delete(beginWord)
  const visited = new Set([beginWord])
  const wordListLen = wordList.length
  const wordLen = beginWord.length
  
  let minSteps = Number.MAX_SAFE_INTEGER

  function DFS(beginWord, steps) {
    if (beginWord === endWord) {
      minSteps = Math.min(minSteps, steps)
      return
    }

    for (let i = 0; i < wordListLen; i++) {
      const word = wordList[i]
      let diff = 0

      for (let j = 0; j < wordLen; j++) {
        if (word[j] !== beginWord[j]) {
          diff++
          if (diff > 1) break
        }
      }

      if (diff === 1 && !visited.has(word)) {
        visited.add(word)
        DFS(word, steps + 1)
        visited.delete(word)
      }
    }
  }

  DFS(beginWord, 1)
  
  return minSteps === Number.MAX_SAFE_INTEGER ? 0 : minSteps
  // */

  // 双向 BFS
  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return 0

  const visited = new Set()

  // 分别用左边和右扩散的哈希表代替单向 BFS 里的队列
  let beginVisited = new Set([beginWord])
  let endVisited = new Set([endWord])

  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97))

  const wordLen = beginWord.length
  let steps = 1

  while(beginVisited.size && endVisited.size) {
    // 优先选择小的哈希表进行扩散，考虑到的情况更少
    if (beginVisited.size > endVisited.size) {
      [beginVisited, endVisited] = [endVisited, beginVisited]
    }

    // 保证 beginVisited 是相对较小的集合，
    // nextLevelVisited 在扩散完成以后，会成为新的 beginVisited
    const nextLevelVisited = new Set()
    for (let word of beginVisited) {
      const chars = word.split('')

      for (let j = 0; j < wordLen; j++) {
        const originalChar = chars[j]

        for (let k = 0; k < 26; k++) {
          const char = letters[k]
          if (char === originalChar) continue
          chars[j] = char

          const nextWord = chars.join('')
          if (wordSet.has(nextWord)) {
            if (endVisited.has(nextWord)) {
              return steps + 1
            }

            if (!visited.has(nextWord)) {
              nextLevelVisited.add(nextWord)
              visited.add(nextWord)
            }
          }
        }

        chars[j] = originalChar
      }
    }
    // 表示从 begin 这一侧向外扩散了一层
    beginVisited = nextLevelVisited
    steps++
  }

  return 0

  // BFS
  /*
  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return 0

  wordSet.delete(beginWord)
  const visited = new Set([beginWord])
  const wordLen = beginWord.length

  const zCode = 'z'.charCodeAt()
  const aCode = 'a'.charCodeAt()
  const letterLen = zCode - aCode + 1
  const letters = Array.from({ length: letterLen }, (_, i) => String.fromCharCode(i + aCode))

  let steps = 1

  const q = [beginWord]
  while(q.length) {
    for (let i = 0, len = q.length; i < len; i++) {
      const word = q.shift()
      const chars = word.split('')

      for (let j = 0; j < wordLen; j++) {
        const originalChar = chars[j]

        for (let k = 0; k < letterLen; k++) {
          const char = letters[k]
          if (char === originalChar) continue
          chars[j] = char

          const nextWord = chars.join('')
          if (wordSet.has(nextWord)) {
            if (nextWord === endWord) {
              return steps + 1
            }

            if (!visited.has(nextWord)) {
              q.push(nextWord)
              visited.add(nextWord)
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

