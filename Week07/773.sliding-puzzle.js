/*
 * @lc app=leetcode.cn id=773 lang=javascript
 *
 * [773] 滑动谜题
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  /**
   * 1.BFS
   * 2. A*
   */

  /**
   * 2. A*
   */
  // TODO: 略复杂，后面补

  /**
   * 1. BFS
   * 
   * 运行结果：
   *  32/32 cases passed (104 ms)
   *  Your runtime beats 48.57 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (42.1 MB)
   */
  const moves = {
    0: [1, 3],
    1: [0, 2, 4], 
    2: [1, 5],
    3: [0, 4],
    4: [1, 3, 5],
    5: [2, 4]
  }
  
  const used = new Set()
  let cnt = 0
  const s = board.join(',').replace(/,/g, '') // split(',').join('')
  let q = [s]

  while(q.length) {
    const newQ = []
    for (let s of q) {
      used.add(s)
      if (s === '123450') {
        return cnt
      }
      const arr = s.split('')
      const zeroIndex = s.indexOf('0') // 开始移动 0，获取 0 所在的下标，去 moves 中取对应可交换的数组
      for (let move of moves[zeroIndex]) {
        const newArr = arr.slice()
        ;[newArr[zeroIndex], newArr[move]] = [newArr[move], newArr[zeroIndex]] // 分别交换 0 与数组中的值
        const newS = newArr.join('')
        if (!used.has(newS)) {
          newQ.push(newS)
        }
      }
    }
    cnt += 1
    q = newQ
  }
  return -1
}; 
// @lc code=end

