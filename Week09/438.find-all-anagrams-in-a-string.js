/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

  /**
   * 滑动窗口 + 双指针
   * 
   * 实现思路：
   *  保持窗口大小为 p.length
   * 
   *  窗口缩小时机：i - j + 1 === p.length
   * 
   *  need 记录 p 中相应字符出现的次数
   *  window 记录窗口中相应字符出现的次数
   *  valid 表示窗口中满足 need 条件（匹配键值对）的字符个数
   */
  const ASCII_COUNT = 128

  const need = Array.from({ length: ASCII_COUNT }, _ => 0)
  const window = Array.from({ length: ASCII_COUNT }, _ => 0)

  let needSize = 0, ans = []

  for (let c of p) {
    const code = c.charCodeAt()
    need[code] ? need[code]++ : (need[code] = 1, needSize++)
  }

  for (let i = j = valid = 0, n = s.length, m = p.length, iCode, jCode; i < n; i++) {
    iCode = s[i].charCodeAt()
    jCode = s[j].charCodeAt()
    
    // (1) 移动指针 i，添加字符到窗口，更新一系列数据
    window[iCode]++
    if (need[iCode] === window[iCode]) valid++

    // (2) 缩小窗口的时机
    if(i - j + 1 === m) {
      // (3) 更新答案
      if (valid === needSize) ans.push(j)

      // (4) 移动指针 j，移除字符，更新一系列数据
      if (need[jCode] === window[jCode]) valid-- 
      window[jCode]--
      j++
    }

  }

  return ans

  
  // 滑动窗口 + 双指针
  /*
  if (!s || s.length < p.length)  return []
  
  const need = {}, window = {}, ans = []

  for (let c of p) {
    need[c] ? need[c]++ : (need[c] = 1)
  }

  let i = j = 0, cnt = 0, needLen = Object.keys(need).length

  while (j < s.length) {
    let cj = s[j]

    if (need[cj]) {
      window[cj] ? window[cj]++ : (window[cj] = 1)
      if (window[cj] === need[cj]) cnt++
    }
    j++

    while(cnt === needLen) {
      let ci = s[i]
      if ((j - i) === p.length) ans.push(i)

      if (need[ci]) {
        window[ci]--
        if (window[ci] < need[ci]) cnt--
      }
      i++
    }
  }
    
  return ans
  */
  
  /*

  if (!s || s.length < p.length)   return []

  const n = s.length
  const m = p.length

  const ans = []

  for (let i = 0; i < n - m + 1; i++) {
    if (isAnagram(s.slice(i, i + m), p)) {
      ans.push(i)
    }
  }

  return ans

  function isAnagram(s, t) {

    const map = new Map()

    for (let i = 0, len = s.length, sItem, tItem; i <  len; i++) {
      [sItem, tItem] = [s[i], t[i]]

      if (sItem ===  tItem) continue

      map.set(sItem, (map.get(sItem) || 0) + 1)
      map.set(tItem, (map.get(tItem) || 0) - 1)
    }

    return [...map.values()].every(v => v === 0)
    
    // return s.split('').sort().join('') === t.split('').sort().join('')
  }

  */
};
// @lc code=end

