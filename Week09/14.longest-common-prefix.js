/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 先排序，再比较首位字符串
  if (!strs || !strs.length) return ""
  if (strs.length === 1) return strs[0]

  strs.sort()

  const start = strs[0], end = strs[strs.length - 1]
  const minLen = Math.min(start.length, end.length)
  let i
  for (i = 0; i < minLen && start[i] === end[i]; i++);
  return start.substring(0, i)

  /**
   * 运行结果：
   *  118/118 cases passed (92 ms)
   *  Your runtime beats 25.14 % of javascript submissions
   *  Your memory usage beats 96.63 % of javascript submissions (37.7 MB)
   */

  /*
  if (!strs || !strs.length) return ""
  if (strs.length === 1) return strs[0]

  let prefix = strs[0]

  for (let i = 1; i < strs.length; i++) {
    prefix = longestCommonPrefix(prefix, strs[i])
    if (prefix === "")
      break
  }

  return prefix
  
  function longestCommonPrefix(str1, str2) {
    const minLen = Math.min(str1.length, str2.length)

    let index = 0
    while(index < minLen && str1[index] === str2[index]) {
      index++
    }
    return str1.substring(0, index)
  }
  */

  // 纵向扫描
  /**
   * 运行结果：
   *  118/118 cases passed (104 ms)
   *  Your runtime beats 8.56 % of javascript submissions
   *  Your memory usage beats 70.64 % of javascript submissions (38.2 MB)
   */
  /*
  if (!strs || !strs.length) return ""
  if (strs.length === 1) return strs[0]

  for (let i = 0; i < strs[0].length; i++) {
    const c = strs[0][i]

    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== c) {
        return strs[0].substring(0, i)
      }
    }
  }
  
  return strs[0]
  */
};
// @lc code=end

