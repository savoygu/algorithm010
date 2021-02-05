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
  // let prev = null
  // let cur = next = head

  // while(cur) {
  //   next = cur.next // 移动到当前节点的下一个节点，用于占位，方便后面 cur 移动到该节点
  //   cur.next = prev // 把 cur 的 next 指向 prev 完成反转
  //   prev = cur // 把 prev 移动到 cur
  //   cur = next // 把 cur 移动到 next 
  // }

  // return prev

  // 参考：https://leetcode-cn.com/problems/reverse-linked-list/solution/dong-hua-yan-shi-206-fan-zhuan-lian-biao-by-user74/
  // 递归
  // 递归终止条件：当前为空、下一个节点为空
  if (head === null || head.next === null) return head
  const cur = reverseList(head.next) // 这里的 cur 指最后一个节点
  head.next.next = head // 让 head 的下一个节点的 next 指向 head (反转)
  head.next = null // 把原来的指向断开
  return cur // 每层递归函数返回的都是 cur (最后一个节点)
};
// @lc code=end

