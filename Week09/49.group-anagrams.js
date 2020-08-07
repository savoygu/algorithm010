/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // 所有的实现基本上都是为哈希表设计合适的键
  

  // 3. 计数
  /*
  const map = new Map()

  for (let i = 0, len = strs.length, item, key; i < len; i++) {
    item = strs[i]
    const chars = Array.from({ length: 26 }, _ => 0)
    for (const c of item) {
      chars[c.charCodeAt() - 97]++
    }
    key = chars.join('#')

    // map.has(key) 
    //   ? map.set(key, [...map.get(key), item]) 
    //   : map.set(key, [item])

    map.set(key, map.has(key) ? [...map.get(key), item] : [item]) 
  }
  
  return [...map.values()]
  */

  // 2. 数学设计键
  // const nums = Array.from({ length: 26 }, (_, i) => i + 1)
  const nums = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
  const map = new Map()
 
  for (let i = 0, len = strs.length, item, key; i < len; i++) {
   item = strs[i]
   key = item.split('').reduce((sum, c) => {
     return sum * nums[c.charCodeAt() - 97]
   }, 1)
   
   map.set(key, map.has(key) ? [...map.get(key), item] : [item]) 
  }

  return [...map.values()]


  // 1. map
  
  /*
  const map = new Map()

  for (let i = 0, len = strs.length, item, sortedItem; i < len; i++) {
    item = strs[i]
    sortedItem = item.split('').sort().join('')

    if (map.has(sortedItem)) {
      map.set(sortedItem, [...map.get(sortedItem), item])
    } else {
      map.set(sortedItem, [item])
    }
  }
  
  return [...map.values()]
  */
};
// @lc code=end

