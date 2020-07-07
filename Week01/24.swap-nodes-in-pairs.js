/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
  /**
   * 1. 非递归
   * 2. 递归
   */

  /**
   * 1. 非递归
   * 
   * 复杂度分析：
   *  时间复杂度：O(n)，其中 N 指的是链表的节点数量。
   *  空间复杂度：O(1)
   */
  if (!head || !head.next) return head

  let dummy = new ListNode(0)
  dummy.next  = head;
  let prev = dummy

  while(prev.next && prev.next.next) { // 假设交换 A 和 B
    let cur = prev.next // A
    let future = prev.next.next // B

    prev.next = future // 把 P 指向 B 
    cur.next = future.next // 把 A 指向 B 的 next
    future.next = cur // 交换链表中的节点 ：把 B 指向 A

    prev = prev.next.next // 把 P 指向 A 开始下一轮交换
  }

  return dummy.next

  /**
   * 中文官方题解：https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/liang-liang-jiao-huan-lian-biao-zhong-de-jie-di-19/
   * 2. 递归
   * 
   * 算法过程：
   *  - 从链表头节点 head 开始递归。
   *  - 每次递归都负责交换一对节点。由 firstNode 和 secondNode 表示要交换的两个节点。
   *  - 下一次递归则是传递的是下一对需要交换的节点（第一个节点）。若链表中还有节点，则继续递归。
   *  - 交换了两个节点以后，返回 secondNode，因为它是交换后的新头。
   *  - 在所有节点交换完成以后，我们返回交换后的头，实际上是原始链表的第二个节点。
   *  
   * 复杂度分析：
   *  时间复杂度：O(n)，其中 n 指的是链表的节点数量。
   *  空间复杂度：O(n)，递归过程使用的堆栈空间。
   * 
   * 运行结果：
   *  55/55 cases passed (72 ms)
   *  Your runtime beats 45.11 % of javascript submissions
   *  Your memory usage beats 100 % of javascript submissions (32.5 MB)
   */
  /*
  if (!head || !head.next) return head

  // 待交换的节点
  let firstNode = head
  let secondNode = head.next

  // 交换节点，交换后的尾结点指向下一次交换的头节点
  firstNode.next = swapPairs(secondNode.next)
  secondNode.next = firstNode

  // 交换后的头节点是 secondNode
  return secondNode
  */
};
// @lc code=end

