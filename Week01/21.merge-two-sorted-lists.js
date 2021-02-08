/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  /**
   * 方法2：递归
   * 复杂度分析：
   *   时间复杂度：O(n+m)，其中 n 和 m 分别为两个链表的长度。
   *     因为每次调用递归都会去掉 l1 或者 l2 的头节点（直到
   *     至少有一个链表为空），函数 mergeTwoList 至多只会
   *     递归调用每个节点一次。因此，时间复杂度取决于合并后的
   *     链表长度，即 O(n+m)。
   *   空间复杂度：O(n+m)，其中 n 和 m 分别为两个链表的长度。
   *     递归调用 mergeTwoLists 函数时需要消耗栈空间，栈空间
   *     的大小取决于递归调用的深度。结束递归调用时 mergeTwoLists 
   *     函数最多调用 n+m 次，因此空间复杂度为 O(n+m)。
   */
  if (l1 === null) return l2
  else if (l2 === null) return l1
  else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }

  /**
   * 方法1：迭代
   * 复杂度分析：
   *   时间复杂度：O(n + m)，其中 n 和 m 分别为两个链表的长度。
   *     因为每次循环迭代中，l1 和 l2 只有一个元素会被放进合并链表中， 
   *     因此 while 循环的次数不会超过两个链表的长度之和。所有其他操作
   *     的时间复杂度都是常数级别的，因此总的时间复杂度为 O(n+m)。
   *   空间复杂度：O(1)。我们只需要常数的空间存放若干变量。
   */
  // const prehead = new ListNode(-1) // 头结点
  // let prev = prehead

  // while(l1 !== null && l2 !== null) { // 链表都不为空
  //   if (l1.val > l2.val) {
  //     prev.next = l2
  //     l2 = l2.next
  //   } else {
  //     prev.next = l1
  //     l1 = l1.next
  //   }
  //   prev = prev.next
  // }
  // // 链表末尾指向未合并完的链表
  // prev.next = l1 === null ? l2 : l1
  
  // return prehead.next
};
// @lc code=end

