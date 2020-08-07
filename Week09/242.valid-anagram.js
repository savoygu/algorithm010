/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

  if (s.length !== t.length) return false

  // 3. 哈希表
  const chars = Array.from({ length: 26 }, _ => 0)

  for (let i = 0, len = s.length, cs, ct; i < len; i++) {
    [cs, ct] = [s[i], t[i]]

    if (cs === ct) continue

    chars[cs.charCodeAt() - 97]++
    chars[ct.charCodeAt() - 97]--
  }

  return chars.every(v => v === 0)
  
  // 2. map
  /*
  const map = new Map()

  for (let i = 0, len = s.length, cs, ct; i < len; i++) {
    [cs, ct] = [s[i], t[i]]

    if (cs === ct) continue

    map.set(cs, (map.get(cs) || 0) + 1)
    map.set(ct, (map.get(ct) || 0) - 1)
  }

  return [...map.values()].every(v => v === 0)
  */
  
  // 1. 暴力
  // return s.split('').sort().join('') === t.split('').sort().join('')
  
};
// @lc code=end

