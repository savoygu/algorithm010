/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start


// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/min-stack/solution/zui-xiao-zhan-by-leetcode-solution/

/**
 * 实现思路：
 *  按照上面的思路，我们只需要设计一个数据结构，使得每个元素 a 与其相应的最小值 m 时刻保持一一对应。
 *   因此我们可以使用一个辅助栈，与元素栈同步插入与删除，用于存储与每个元素对应的最小值。
 * 
 *   - 当一个元素要入栈时，我们取当前辅助栈的栈顶存储的最小值，与当前元素比较得出最小值，
 *      将这个最小值插入辅助栈中；
 *   - 当一个元素要出栈时，我们把辅助栈的栈顶元素也一并弹出；
 *   - 在任意一个时刻，栈内元素的最小值就存储在辅助栈的栈顶元素中。
 *  
 * 复杂度分析
 *  时间复杂度：对于题目中的所有操作，时间复杂度均为 O(1)。因为栈的插入、删除与读取操作都是 O(1)，
 *   我们定义的每个操作最多调用栈操作两次。
 *  空间复杂度：O(n)，其中 n 为总操作数。最坏情况下，我们会连续插入 n 个元素，
 *   此时两个栈占用的空间为 O(n)。
 * 
 * 运行结果：
 *  8/18 cases passed (112 ms)
 *  Your runtime beats 97.08 % of javascript submissions
 *  Your memory usage beats 100 % of javascript submissions (42.3 MB)
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.minStack = [Infinity]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x)
  this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

