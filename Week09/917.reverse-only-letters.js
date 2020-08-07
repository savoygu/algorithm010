/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  const isUpperLetter = code => code >= 65 && code <= 90
  const isLowerLetter = code => code >= 97 && code <= 122
  
  const isLetter = (c) => {
    const code = c.charCodeAt()
    return isUpperLetter(code) || isLowerLetter(code)
  }

  /**
   * 3. stack
   * 
   * 实现思路：
   *  将 S 中所有的字母放入栈中，所以出栈等价于对字母反序操作。然后，遍历 S 所有字符，如果是字母就选择栈顶元素输出
   * 
   * 复杂度分析：
   *  时间复杂度：O(N)，其中 NN 是 S 的长度。
   *  空间复杂度：O(N)。
   */ 
  /*
  const stack = []
  for (const c of S) {
    if (isLetter(c)) {
      stack.push(c)
    }
  }

  let res = ''

  for (const c of S) {
    if (isLetter(c)) {
      res += stack.pop()
    } else {
      res += c
    }
  }

  return res
  */
  
  
  /**
   * 2. 反转指针
   * 
   * 实现思路：
   *  维护一个指针 j 从后往前遍历字符串，当需要字母时就使用它。
   * 
   * 复杂度分析：
   *  时间复杂度：O(N)，其中 NN 是 S 的长度
   *  空间复杂度：O(N)。
   */
  // /*
  let res = ''
  let j = S.length - 1

  for (let i = 0; i < S.length; i++) {
    if (isLetter(S[i])) {
      while(!isLetter(S[j])) j--
      res += S[j--]
    } else {
      res += S[i]
    }
  }

  return res
  // */

  // 1. 先 split 成数组，再利用双指针进行首尾交换，最后再 join
  
  /*
  S = S.split('')

  for (let i = 0, j = S.length - 1; i < j;) {
    if (isLetter(S[i]) && isLetter(S[j])) {
      [S[i++], S[j--]] = [S[j], S[i]]
    } else if (isLetter(S[i])) {
      j--
    } else if (isLetter(S[j])) {
      i++
    } else {
      i++
      j--
    }
  }

  return S.join('')
  */
  
};
// @lc code=end

