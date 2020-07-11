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
  // 1. clarification (和面试官过一遍题目)
      // 大小写是否是敏感的？？？
  // 2. possible solutions --> optimal (time & space) (从中找出一个最优的 时间和空间复杂度最好的)
  // 3. code 写代码
  // 4. test cases 测试样例

  // 作者：LeetCode
  // 链接：https://leetcode-cn.com/problems/valid-anagram/solution/you-xiao-de-zi-mu-yi-wei-ci-by-leetcode/
  
  /**
    * 3. 统计
    * 
    * 实现思路：
    *   用长度为 26 的数组存储 a-z 英文字符出现的次数，s 做加 1，t 做减 1，最后判断数组中存储的次数是否都为 0 
    * 
    * 复杂度分析：
    *   时间复杂度：O(n)
    *   空间复杂度：O(1)
    * 
    * 运行结果：
    *  34/34 cases passed (76 ms)
    *  Your runtime beats 94.29 % of javascript submissions
    *  Your memory usage beats 71.43 % of javascript submissions (36.6 MB)
    */
  const sLen = s.length
  if (sLen !== t.length) return false
  
  let sItem, tItem
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
   * 
   * 运行结果：
   *  34/34 cases passed (92 ms)
   *  Your runtime beats 65.18 % of javascript submissions
   *  Your memory usage beats 71.43 % of javascript submissions (36.7 MB)
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
  return Object.values(map).every(it => it === 0)
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
   * 
   * 复杂度分析：
   *  时间复杂度：O(nlogn)，假设 nn 是 ss 的长度，排序成本 O(nlogn) 和比较两个字符串的成本 O(n)。
   *   排序时间占主导地位，总体时间复杂度为 O(nlogn)。
   *  空间复杂度：O(1)，空间取决于排序实现，如果使用 heapsort，通常需要 O(1) 辅助空间。注意，在 Java 中，
   *   toCharArray() 制作了一个字符串的拷贝，所以它花费 O(n)O(n) 额外的空间，但是我们忽略了这一复杂性分析，
   *   因为：
   *    - 这依赖于语言的细节。
   *    - 这取决于函数的设计方式。例如，可以将函数参数类型更改为 char[]。
   * 
   * 运行时间：
   *  34/34 cases passed (104 ms)
   *  Your runtime beats 48.13 % of javascript submissions
   *  Your memory usage beats 14.29 % of javascript submissions (40.3 MB)
   * 
   */
  
  /*
  if (s.length !== t.length) return false
  return s.split('').sort().join() === t.split('').sort().join()
  */
};
// @lc code=end

