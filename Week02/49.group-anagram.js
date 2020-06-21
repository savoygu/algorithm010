/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // 所有的实现基本上都是为哈希表设计合适的键
  
  /**
   *  
   *  3. 计数
   *    https://leetcode-cn.com/problems/group-anagrams/solution/js-xie-leetcode-by-zhl1232-3/ 
   *  
   *  实现思路：
   *   统计一个元素中字符出现次数作为 key，同时以 # 作为分割（非必须），eg:
   *     - 'abb'、'bba'、'bab' 都会映射到 '1#2#0#0....#0#0'
   *   
   *  复杂度：
   *    时间复杂度 O(NK)
   *      其中 N 是 strs 的长度，而 K 是 strs 中字符串元素的最大长度。当遍历每个字符串时，
   *       外部循环具有的复杂度为 O(N)，然后在 O(K) 的时间内对字符串元素进行内部循环。
   *    空间复杂度 O(1)
   *
   */
  
  /**
   *  执行用时: 124 ms, 在所有 JavaScript 提交中击败了 90.14% 的用户
   *  内存消耗: 45.3 MB, 在所有 JavaScript 提交中击败了 66.67% 的用户
   *
   */

  const map = new Map()
  let item, key
  for (let i = 0, len = strs.length; i < len; i++) {
    item = strs[i]
    const arr = new Array(26).fill(0)
    for (let j = 0; j < item.length; j++) {
      arr[item.charCodeAt(j) - 97]++
    }
    key = arr.join('#')
    if (map.has(key)) {
      map.set(key, [...map.get(key), item])
    } else {
      map.set(key, [item])
    }
  }
  return [...map.values()]
  
  /**
   *  
   *  2. 数学设计键 (和解法一相比：理论差不多，只是少了字符串的排序 )
   *    https://leetcode-cn.com/problems/group-anagrams/solution/js-xie-leetcode-by-zhl1232-3/ 
   *  
   *  实现思路：
   *    引用一段定理：算术基本定理，又称为正整数的唯一分解定理，即：每个大于1的自然数，要么本身就是质数，要么可以写为 2个以上的质数的积，
   *      而且这些质因子按大小排列之后，写法仅有一种方式。
   *    
   *    把每个字符映射到一个正数上：
   *      - 声明一个由前 26 个质数组成的数组：[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
   *      - 然后把 strs 中的字符串元素分割成字符，分别减去 'a' （相减时用 Unicode 编码），然后去 prime 中去对应的质数，再把它们累乘，eg: 
   *          有字符串元素 abc，就对应 'a' - 'a'、'b' - 'a'、'c' - 'a'，即 0、1、2，对应质数数组中的元素 2、3、5，然后相乘 2 * 3 * 5 = 30，这样就把 abc 映射到了 30
   *   
   *
   *  复杂度：
   *    时间复杂度 O(NK)
   *      其中 N 是 strs 的长度，而 K 是 strs 中字符串元素的最大长度。当遍历每个字符串时，
   *       外部循环具有的复杂度为 O(N)，然后在 O(K) 的时间内对字符串进行求积。
   *    空间复杂度 O(1)
   *
   */
  
  /**
   * 执行用时: 120 ms, 在所有 JavaScript 提交中击败了 92.55% 的用户
   * 内存消耗:46.5 MB, 在所有 JavaScript 提交中击败了 33.33% 的用户
   *
   */
  
//   const map = {}
//   let item, key
//   const first26Primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
//   for (let i = 0; i < strs.length; i++) {
//     item = strs[i]
//     key = item.split('').reduce((sum, char) => {  
//       return sum * first26Primes[char.charCodeAt() - 97]
//     }, 1)
//     map[key] ? map[key].push(item) : (map[key] = [item])
//   }
  
//   return Object.values(map)
  
  
  /**
   *  
   *  1. 哈希表 hash table  
   *  
   *  当且仅当它们的排序字符串相等时，两个字符串是字母异位词
   *  
   *  实现思路：
   *    通过一个 Map 或 {} 去存储以排序后的异位词作为 key 、原本的异位词组成的数组 value，然后返回其值即可
   *
   *  复杂度：
   *    时间复杂度 O(NKlogK)
   *      其中 N 是 strs 的长度，而 K 是 strs 中字符串元素的最大长度。当遍历每个字符串时，
   *       外部循环具有的复杂度为 O(N)，然后在 O(KlogK) 的时间内对每个字符串排序。
   *    空间复杂度 O(1)
   *
   */
  
  /**
   *
   * 执行用时: 136 ms , 在所有 JavaScript 提交中击败了 76.69% 的用户 
   * 内存消耗: 46.4 MB , 在所有 JavaScript 提交中击败了 33.33% 的用户
   *
   */
  
  // 方式二：使用 Map
  /*
  const map = new Map()
  let item, key, value
  
  for (let i = 0; i < strs.length; i++) {
    item = strs[i]
    key = item.split('').sort().join('')
    if (map.has(key)) {
      map.set(key, [...map.get(key), item])
    } else {
      map.set(key, [item])
    }
  }

  return [...map.values()]
  */
  
  // 方式二：使用 {}
  /*
  const map = {}
  let item, key, value
  
  for (let i = 0, len = strs.length; i < len; i++) {
    item = strs[i]
    key = item.split('').sort().join('')
    value = map[key]
    
    if (value !== undefined) {
      value.push(item)
    } else {
      map[key] = [item]
    }
  }
  
  return Object.values(map)
  */
  
};