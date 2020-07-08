/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  // 中文官方题解：https://leetcode-cn.com/problems/reverse-nodes-in-k-group/solution/k-ge-yi-zu-fan-zhuan-lian-biao-by-leetcode-solutio/

  /**
   * 复杂度分析：
   *  时间复杂度：O(n)，其中 n 为链表的长度。head 指针会在 O(⌊n/k⌋) 个结点上停留，每次停留需要进行一次 O(k) 的翻转操作。
   *  空间复杂度：O(1)，我们只需要建立常数个变量。
   */
  
  const hair = new ListNode(0)
  hair.next = head
  let pre = hair

  while(head) {
    let tail = pre // pre 已翻转链表的 头节点
    for (let i = 0; i < k; i++) {
      tail = tail.next
      if (!tail) {
        return hair.next
      }
    }
    const next = tail.next; // next 剩余链表的 头节点
    [head, tail] = reverseList(head, tail);
    // 把子链表重新接回原链表
    pre.next = head;
    tail.next = next;
    // 更新 pre 和 head 位置到一个翻转点
    pre = tail;
    head = tail.next;
  }

  return hair.next

  function reverseList(head, tail) { // 翻转子链表
    let prev = tail.next
    let p = head

    while(prev !== tail) {
      const next = p.next
      p.next = prev
      prev = p
      p = next
    }

    return [tail, head]
  }
};
// @lc code=end

