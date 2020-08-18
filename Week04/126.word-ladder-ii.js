/*
 * @lc app=leetcode.cn id=126 lang=javascript
 *
 * [126] 单词接龙 II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  // https://leetcode-cn.com/problems/word-ladder-ii/solution/ru-guo-ni-fa-xian-kan-bie-ren-de-ti-jie-kan-bu-don/
  
  // BFS + DFS(回溯)
  const res = []
  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return res

  const levelMap = new Map([[beginWord, 0]])
  const wordMap = new Map()

  const bfs = (beginWord, endWord, wordSet, levelMap, wordMap) => {
    let exist = false // 是否存在路径
    let level = 0

    const visited = new Set([beginWord])
    const wordLen = beginWord.length
    const queue = [beginWord]

    const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97))
    
    while(queue.length) {
      const size = queue.length
      level++ // 找下一层的单词
      for (let i = 0; i < size; i++) {
        const word = queue.shift()

        for (let j = 0; j < wordLen; j++) {
          for (let k = 0; k < 26; k++) {
            const newWord = word.slice(0, j) + letters[k] + word.slice(j + 1)
            if (!wordSet.has(newWord)) continue

            if (wordMap.has(newWord)) {
              wordMap.get(newWord).push(word)
            } else {
              wordMap.set(newWord, [word])
            }

            if (visited.has(newWord)) continue
            if (newWord === endWord) exist = true

            levelMap.set(newWord, level)
            queue.push(newWord)
            visited.add(newWord)
          }
        }
        
      }

      if (exist) break
    }

    return exist
  }

  let exist = bfs(beginWord, endWord, levelMap, wordMap)
  if (!exist) return []

  // 逆向 DFS
  const dfs = (path, beginWord, word) => {
    if (word === beginWord) {
      res.push([beginWord, ...path])
      return
    }

    path.unshift(word)
    if (wordMap.get(word)) {
      for (const parent of wordMap.get(word)) {
        if (levelMap.get(parent) + 1 === levelMap.get(word)) {
          dfs(path, beginWord, parent)
        }
      }
    }
    path.shift() // 回溯
  }

  dfs([], beginWord, endWord)

  return res

  /**
   * BFS
   * 
   * 运行结果：
   *  执行用时：7100 ms, 在所有 JavaScript 提交中击败了 5.21% 的用户
   *  内存消耗：56.5 MB, 在所有 JavaScript 提交中击败了 10.00% 的用户
   */
  /*
  const res = []
  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return res

  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97))

  const queue = [new Node(beginWord, null)]
  const ends = []
  const visited = new Set()
  const wordLen = beginWord.length

  while(queue.length) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const cur = queue.shift()
      const word = cur.word
      visited.add(word)
      if (word === endWord) {
        ends.push(cur)
        continue
      }

      for (let j = 0; j < wordLen; j++) {
        for (let k = 0; k < 26; k++) {
          const nextWord = word.slice(0, j) + letters[k] + word.slice(j + 1)
          if (wordSet.has(nextWord) && !visited.has(nextWord)) {
            queue.push(new Node(nextWord, cur))
          }
        }
      }

      // const chars = word.split('')
      // for (let j = 0; j < wordLen; j++) {
      //   const originalChar = chars[j]
      //   for (let k = 0; k < 26; k++) {
      //     const char = letters[k]
      //     if (char === originalChar) {
      //       continue
      //     }
      //     chars[j] = char

      //     const nextWord = chars.join('')
      //     if (wordSet.has(nextWord) && !visited.has(nextWord)) {
      //       queue.push(new Node(nextWord, cur))
      //     }
      //   }
      //   chars[j] = originalChar
      // }
    }

    if (ends.length > 0) { // 找到了
      break;
    }
  }

  for (let end of ends) {
    res.push(getPath(end))
  }

  return res
  // */

  // DFS 超时
  /*
  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return []

  const visited = new Set([beginWord])
  const wordLen = beginWord.length
  
  let minSteps = Number.MAX_SAFE_INTEGER
  const res = []

  function DFS(beginWord, steps, path) {
    if (steps > minSteps) return

    if (beginWord === endWord) {
      if (steps < minSteps) {
        res.splice(0, res.length, path.slice())
        minSteps = steps
      } else {
        res.push(path.slice())
      }

      return
    }

    for (let i = 0; i < wordList.length; i++) {
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
        path.push(word)
        DFS(word, steps + 1, path)
        path.pop()
        visited.delete(word)
      }
    }
  }

  DFS(beginWord, 1, [beginWord])
  
  return res 
  // */
};
// @lc code=end

