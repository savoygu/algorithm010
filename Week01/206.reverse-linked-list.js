/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  /**
   * 三指针
   * 
   * 实现思路：
   * 
   * 复杂度分析：
   *   时间复杂度: O(n)
   *   空间复杂度: O(1)
   * 
   */
  let prev = null
  let cur = next = head

  while(cur) {
    next = cur.next // 移动到当前节点的下一个节点，用于占位，方便后面 cur 移动到该节点
    cur.next = prev // 把 cur 的 next 指向 prev 完成反转
    prev = cur // 把 prev 移动到 cur
    cur = next // 把 cur 移动到 next 
  }

  return prev
};
// @lc code=end

    