/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  
  // 1. clarification (和面试官过一遍题目)
      // 大小写是否是敏感的？？？
  // 2. possible solutions --> optimal (time & space) (从中找出一个最优的 时间和空间复杂度最好的)
  // 3. code 写代码
  // 4. test cases 测试样例
  
  /**
    * 3. 统计
    * 
    * 实现思路：
    *   用长度为 26 的数组存储 a-z 英文字符出现的次数，s 做加 1，t 做减 1，最后判断数组中存储的次数是否都为 0 
    * 
    * 复杂度分析：
    *   时间复杂度：O(n)
    *   空间复杂度：O(1)
    */
  const sLen = s.length
  if (sLen !== t.length) return false
  
  let sItem, tItem, sCode, tCode
  const chars = new Array(26).fill(0)
  for (let i = 0; i < sLen; i++) {
    sItem = s[i]
    tItem = t[i]
    
    if (sItem === tItem) continue
  
    chars[sItem.charCodeAt() - 97]++
    chars[tItem.charCodeAt() - 97]--
  }
  
  return chars.every(it => it === 0)
  
  /**
   * 2. 哈希表
   * 
   * 实现思路：
   * 
   * 复杂度：
   *   时间复杂度：O(n)
   *   空间复杂度：O(1)
   */
  
  // 方式一：使用对象 {} 存储
  /*
  const sLen = s.length;
  if (sLen !== t.length) return false
  
  const map = {} 
  let sItem, tItem, sVal, tVal
  
  for (let i = 0; i < sLen; i++) {
    sItem = s[i]
    tItem = t[i]
    
    if (sItem === tItem) continue
    
    sVal = map[sItem]
    tVal = map[tItem]
    
    map[sItem] = sVal !== undefined ? ++sVal : 1
    map[tItem] = tVal !== undefined ? --tVal : -1
  }
  
  // for (let item in map) {
  //   if (map[item] !== 0) return false
  // }
  // return true
  // return Object.values(map).every(it => it === 0)
  return Object.values(map).join('').replace(/0/g, '') === ''
  */
  
  // 方式二：使用 Map 存储
  /*
  const sLen = s.length;
  if (sLen !== t.length) return false
  
  const map = new Map()
  let sItem, tItem
  
  for (let i = 0; i < sLen; i++) {
    sItem = s[i]
    tItem = t[i]
    
    if (sItem === tItem) {
      continue;
    }
    
    map.set(sItem, map.has(sItem) ? map.get(sItem) + 1 : 1)
    map.set(tItem, map.has(tItem) ? map.get(tItem) - 1 : -1)
  }
  
  return [...map.values()].every(it => it === 0)
  */

  /**
   * 1. 暴力解法
   * 
   * 实现思路：
   *  转换成数组，排序后，再转化为字符串，比较两者是否相等
   */
  
  // if (s.length !== t.length) return false
  // return s.split('').sort().join() === t.split('').sort().join()
};