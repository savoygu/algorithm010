/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // 官方视频题解 https://leetcode-cn.com/problems/3sum/solution/san-shu-zhi-he-by-leetcode-solution/
  
  /**
   * 1. 暴力解法 -> 三重循环，时间复杂度：O(n^3)，空间复杂度：O(1)
   * 2. 双指针法 -> 
   *  关键字：不可以包含重复项
   *  模式识别：利用排序避免重复答案
   *  降低复杂度变成 twoSum
   *  利用双指针找到所有解
   */

  /**
   * 官方视频题解 https://leetcode-cn.com/problems/3sum/solution/san-shu-zhi-he-by-leetcode-solution/
   * 
   * 2. 双指针法
   * 
   * 复杂度分析：
   *  时间复杂度：
   *   排序 O(nlogn)
   *   搜索解 O(n^2)：遍历数组 O(n)，双指针遍历 O(n)
   *  空间复杂度：O(1)
   * 
   * 运行结果：
   *  313/313 cases passed (168 ms)
   *  Your runtime beats 72.47 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (46.6 MB)
   * 
   */
  if (!nums || Array.isArray(nums) && (n = nums.length) < 3) {
    return []
  }
  
  nums.sort((a, b) => a - b) // 从小到大排序

  const ans = []

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    const res = twoSum(nums, i + 1, n - 1, -nums[i], nums[i])
    ans.push(...res)
    // ans = ans.concat(res) // 比 push 慢 2/3
  }

  return ans

  function twoSum (nums, start, end, target, value) {
    const res = []

    while(start < end) {
      const sum = nums[start] + nums[end]

      if (sum === target) {
        res.push([value, nums[start], nums[end]])
 
        // 寻找下一组解，同时跳过重复项
        while(start < end && nums[start] === nums[++start]);
        while(start < end && nums[end] === nums[--end]);
      } else if (sum < target) { // 如果和比目标值小，移动头指针，否则移动右指针
        while(start < end && nums[start] === nums[++start]);
      } else {
        while(start < end && nums[end] === nums[--end]);
      }
    }

    return res
  }

  /**
   * https://leetcode-cn.com/problems/3sum/solution/pai-xu-shuang-zhi-zhen-zhu-xing-jie-shi-python3-by/
   * 
   * 排序 + 双指针
   * 
   * 算法流程：
   *  1. 特判，对于数组长度 n，如果数组为 null 或者数组长度小于 3，返回 []。
   *  2. 对数组进行排序
   *  3. 遍历排序后数组：
   *   - 若 nums[i]>0：因为已经排序好，所以后面不可能有三个数加和等于 0，直接返回结果。
   *   - 对于重复元素：跳过，避免出现重复解
   *   - 令左指针 L=i+1，右指针 R=n-1，当 L<R时，执行循环：
   *     - 当 nums[i]+nums[L]+nums[R]==0，执行循环，判断左界和右界是否和下一位置重复，去除重复解。
   *        并同时将 L,R 移到下一位置，寻找新的解
   *     - 若和大于 00，说明 nums[R] 太大，R 左移，同时去除不合适的解
   *     - 若和小于 00，说明 nums[L] 太小，L 右移，同时去除不合适的解
   * 
   */

  /*
  if (!nums || Array.isArray(nums) && (n = nums.length) < 3) {
    return []
  }
  
  nums.sort((a, b) => a - b) // 从小到大排序

  const res = []

  for (let i = 0; i < n - 2; i++) {
    if (nums[i] > 0) return res
    if (i > 0 && nums[i] === nums[i - 1]) continue // 防止把第一个是 0 的情况给过滤掉，所以 i 从 1 开始考虑重复值

    let L = i + 1
    let R = n - 1

    while(L < R) {
      if (nums[i] + nums[L] + nums[R] === 0) {
        res.push([nums[i], nums[L], nums[R]])

        // while (L < R && nums[L] === nums[L + 1]) L++
        // while (L < R && nums[R] === nums[R - 1]) R--
        // // 经过上面两个 while 循环，把 L R 移动到与重复项的最后一位了，然后再进行一次移动找到不同的元素
        // L++
        // R--
        // 跳过重复项到下一个与当前元素不同的元素
        while (L < R && nums[L] === nums[++L]);
        while (L < R && nums[R] === nums[--R]);
      } else if (nums[i] + nums[L] + nums[R] > 0) {
        // while (L < R && nums[R] === nums[R - 1]) R--
        // R--
        while (L < R && nums[R] === nums[--R]);
      } else {
        // while (L < R && nums[L] === nums[L + 1]) L++
        // L++
        while (L < R && nums[L] === nums[++L]);
      }
    }
  }

  return res
  */

  /**
   * 1. 暴力解法（去重有问题）
   */
  // const res = []

  // for (let i = 0; i < nums.length - 2; i++) {
  //   for (let j = i + 1; j < nums.length - 1; j++) {
  //     for (let k = j + 1; k < nums.length; k++) {
  //       if (nums[i] + nums[j] + nums[k] === 0) {
  //         res.push([nums[i], nums[j], nums[k]])
  //       }
  //     }
  //   }
  // }

  // return res

};
// @lc code=end

