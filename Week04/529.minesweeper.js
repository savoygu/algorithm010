/*
 * @lc app=leetcode.cn id=529 lang=javascript
 *
 * [529] 扫雷游戏
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  // BFS
  const d = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]

  const rows = board.length
  const cols = board[0].length
  
  const outBound = (x, y) => x < 0 || x >= rows || y < 0 || y >= cols

  const bfs = (x, y) => {
    const queue = [[x, y]]
    const visited = Array.from({ length: rows }, _ => new Array(cols).fill(false))
    visited[x][y] = true
    while(queue.length) {
      const size = queue.length
      for (let i = 0; i < size; i++) {
        const [x, y] = queue.shift()
        let cnt = 0
        for (let [dx, dy] of d) {
          const x0 = x + dx
          const y0 = y + dy
          if (outBound(x0, y0)) continue

          if (board[x0][y0] === 'M') {
            cnt++
          }
        }

        if (cnt > 0) {
          board[x][y] = `${cnt}`
        } else  {
          board[x][y] = 'B'
          for (let [dx, dy] of d) {
            const x0 = x + dx
            const y0 = y + dy
            if (outBound(x0, y0) || board[x0][y0] !== 'E' || visited[x0][y0]) continue
            queue.push([x0, y0])
            visited[x0][y0] = true
          }
        }
      }
    }
  }

  const [x, y] = click
  if (board[x][y] === 'M') {
    board[x][y] = 'X'
  } else {
    bfs(x, y)
  }
  return board
  
  // DFS
  /*
  const d = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]

  const rows = board.length
  const cols = board[0].length

  const outBound = (x, y) => x < 0 || x >= rows || y < 0 || y >= cols

  const dfs = (x, y) => {
    let cnt = 0
    for (let [dx, dy] of d) {
      const x0 = x + dx
      const y0 = y + dy
      if (outBound(x0, y0)) continue

      if (board[x0][y0] === 'M') {
        cnt++
      }
    }

    if (cnt > 0) {
      board[x][y] = `${cnt}`
    } else  {
      board[x][y] = 'B'
      for (let [dx, dy] of d) {
        const x0 = x + dx
        const y0 = y + dy
        if (outBound(x0, y0) || board[x0][y0] !== 'E') continue
        dfs(x0, y0)
      }
    }
  }

  const [x, y] = click
  if (board[x][y] === 'M') {
    board[x][y] = 'X'
  } else {
    dfs(x, y)
  }
  return board
  // */
};
// @lc code=end

