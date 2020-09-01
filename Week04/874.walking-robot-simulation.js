/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  // direction 0 1 2 3 代表 北，东，南，西
  let res = 0, dir = 0, x = y = 0
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  const coords = (x, y) => x + ',' + y
  const set = new Set(obstacles.map(([x, y]) => coords(x, y)))

  for (let cmd of commands) {
    if (cmd >= 0) {
      for (let i = 0; i < cmd; i++) {
        const [dx, dy] = directions[dir]
        const [nx, ny] = [x + dx, y + dy]
        if (set.has(coords(nx, ny))) break
        [x, y] = [nx, ny]
        res = Math.max(res, x * x + y * y)
      }
    } else {
      // -2： 向左90度，对应的当前方向往左一个，即 (dir-1) % 4，但是程序 -1 % 4 并不能得出 3 而是 -1，
      //   所以正确的表示是 (dir + 3) % 4。
      // -1： 向右90度，对应的是方向转向下一个方向，即 (dir + 1) % 4，通过取模来使得在四个方向来回循环转向。
      dir = cmd === -1 ? (dir + 1) % 4 : (dir + 3) % 4
    }
  }

  return res
};
// @lc code=end

