/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

  /**
   * 排序 + 双指针
   * 
   * 运行结果
   *  169/169 cases passed (92 ms)
   *  Your runtime beats 55.35 % of javascript submissions
   *  Your memory usage beats 63.16 % of javascript submissions (40 MB)
   */

  intervals.sort((a, b) => a[0] - b[0])

  const ans = []

  for(let i = 0; i < intervals.length;) {
    let t = intervals[i][1]
    let j = i + 1
    while(j < intervals.length && intervals[j][0] <= t) {
      t = Math.max(t, intervals[j][1])
      j++
    }
    ans.push([intervals[i][0], t])
    i = j;
  }
  
  return ans
};
// @lc code=end

