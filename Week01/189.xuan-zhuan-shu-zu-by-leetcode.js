/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // https://leetcode-cn.com/problems/rotate-array/solution/xuan-zhuan-shu-zu-by-leetcode/

  /**
   * 4. 使用反转
   * 
   * 算法过程：
   * 
   * 这个方法基于这个事实：当我们旋转数组 k 次， k\%nk%n 个尾部元素会被移动到头部，
   *  剩下的元素会被向后移动。
   * 在这个方法中，我们首先将所有元素反转。然后反转前 k 个元素，再反转后面 n-k 个元素，
   *  就能得到想要的结果。
   * 假设 n=7n=7 且 k=3k=3 。
   *  原始数组                  : 1 2 3 4 5 6 7
   *  反转所有数字后             : 7 6 5 4 3 2 1
   *  反转前 k 个数字后          : 5 6 7 4 3 2 1
   *  反转后 n-k 个数字后        : 5 6 7 1 2 3 4 --> 结果
   * 
   * 复杂度分析：
   *  时间复杂度：O(n)。n 个元素被反转了总共 3 次。
   *  空间复杂度：O(1)。没有使用额外的空间。
   * 
   * 运行结果：
   *  35/35 cases passed (100 ms)
   *  Your runtime beats 51.88 % of javascript submissions
   *  Your memory usage beats 6.67 % of javascript submissions (37.8 MB)
   * 
   */

  /*
  const n = nums.length
  k = k % nums.length
  reverse(nums, 0, n - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, n - 1)

  function reverse(nums, start, end) {
    while(start < end) {
      [nums[end--], nums[start++]] = [nums[start], nums[end]]
    }
  }
  */
  
  /**
   * 
   * 作者：xfzha
   * 链接：https://leetcode-cn.com/problems/rotate-array/solution/xuan-zhuan-shu-zu-yuan-di-huan-wei-xiang-xi-tu-jie/
   * 
   * 3. 使用环状替换
   * 
   * 实现分析：
   *  对于一个长度为 n 的数组，整体移动 k 个位置
   *   当 n 和 k 的最大公约数 等于 1 的时候：1 次遍历就可以完成交换；比如 n = 5, k = 3
   *   当 n 和 k 的最大公约数 不等于 1 的时候：1 次遍历是无法完成的所有元素归位，需要 m (最大公约数) 次
   * 所以在最大公约数不为 1 的时候
   *  比如 [A, B, C, D, E, F] 此时 n=6, k=4，其最大公约数为 2, 因此需要 2 轮循环
   *  我们就可以把这个数组分成两部分来看：
   *   第 1 轮循环（分组1）： A E C [A]
   *   第 2 轮循环（分组2）： B F D [B]
   *  即：每一轮循环只会在自己的那一组上不停的遍历。所以数组的前 m 个元素，其实就是每一个分组的第一个元素，
   *   我们控制流程在每次发现一轮循环走到原点时+1
   *  那么如何判断所有的分组都执行归位了呢？ 可以有两种方法来控制
   *   第一种：我们就用最大公约数 m 来控制外循环，代表总共有 m 轮循环
   *   第二种：由于 n 个元素归位需要 n 次交换，所以我们定义一个 count 代表交换次数，当 count = n 时完成
   * 
   * 复杂度分析：
   *  时间复杂度：O(n)。只遍历了每个元素一次
   *  空间复杂度：O(1)。使用了常数个额外空间。
   * 
   * 运行结果：
   *  35/35 cases passed (88 ms)
   *  Your runtime beats 61.42 % of javascript submissions
   *  Your memory usage beats 6.67 % of javascript submissions (38.2 MB)
   * 
   */
  
  const n = nums.length
  k %= n
  let count = 0

  for (let i = 0; count < n; i++) {
    let cur = i
    let pre = nums[i]
    do {
    const next = (cur + k) % n;
    [nums[next], pre] = [pre, nums[next]]
    cur = next
    count++
    } while(i !== cur)
  }

  /**
   * 2. 使用额外的数组
   * 
   * 算法实现：
   *  我们可以用一个额外的数组来将每个元素放到正确的位置上，也就是原本数组里下标为 i 的
   *   我们把它放到 (i+k)%数组长度 的位置。然后把新的数组拷贝到原数组中。
   * 
   * 复杂度分析：
   *  时间复杂度：O(n)。将数字放到新的数组中需要一遍遍历，另一边来把新数组的元素拷贝回原数组。
   *  空间复杂度：O(n)。另一个数组需要原数组长度的空间。
   * 
   * 运行结果：
   *  35/35 cases passed (84 ms)
   *  Your runtime beats 70.33 % of javascript submissions
   *  Your memory usage beats 13.33 % of javascript submissions (36.5 MB)
   * 
   */
  
  /*
  const len = nums.length

  const a = new Array(len)

  for (let i = 0; i < len; i++) {
    a[(i + k) % len] = nums[i]
  }

  for (let i = 0; i < len; i++) {
    nums[i] = a[i]
  }
  */

  /**
   * 1. 暴力解法：
   * 
   * 最简单的方法是旋转 k 次，每次将数组旋转 1 个元素。
   * 
   * 复杂度分析：
   *  时间复杂度：O(n*k) 。每个元素都被移动 1 步（O(n)）k次（O(k)） 
   *  空间复杂度：O(1) 。没有额外空间被使用。
   * 
   * 运行结果：
   *  35/35 cases passed (388 ms)
   *  Your runtime beats 5.14 % of javascript submissions
   *  Your memory usage beats 6.67 % of javascript submissions (37.5 MB)
   */

  /*
  const len = nums.length
  k = k % nums.length
  for (let i = 0; i < len; i++) {
    let previous = nums[len - 1]
    
    for (let j = 0; j < len; j++) {
      [previous, nums[j]] = [nums[j], previous]
    }
  }
  */

  /**
   * 运行结果：
   *  35/35 cases passed (76 ms)
   *  Your runtime beats 90.88 % of javascript submissions
   *  Your memory usage beats 13.33 % of javascript submissions (36.6 MB)
   */
  // /*
  // nums.splice(0, 0, ...nums.splice(nums.length - k % nums.length))
  // */

  /**
   * 运行结果：
   *  35/35 cases passed (104 ms)
   *  Your runtime beats 48.54 % of javascript submissions
   *  Your memory usage beats 13.33 % of javascript submissions (36.3 MB)
   */
  /*
  k = k % nums.length
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }
  */
};
// @lc code=end

