/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle = function(head) {
  // https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode/
  
  /**
   * 1. 哈希表
   * 2. 双指针
   */

  /**
   * 2. 双指针
   * 
   * 快慢指针运功过程：
   * 
   * 1. 快指针1次走2步，慢指针1次走1步。所以快指针总是走了慢指针两倍的路。
   * 2. 回顾一下阶段1的过程，设头节点到入环点的路途为 n, 那么慢指针走了入环路途的一半（n/2）时，
   *  快指针就到达入环点了(走完n了)。
   * 3. 慢指针再继续走完剩下的一般入环路途（剩下的n/2），到达入环点时，快指针已经在环内又走了一个 n 那么远的路了。
   * 4. 为了方便理解，这里先讨论环很大，大于n的情况（其他情况后文补充）。此时，慢指针正处于入环点，
   *  快指针距离入环点的距离为n。环内路，可以用此时快指针的位置分割为两段，前面的 n 部分，和后面的 b 部分。
   * 5. 此时开始继续快慢指针跑圈，因为已经在环内了，他们其实就是在一条nbnbnbnbnbnbnb（无尽nb路）上跑步。
   * 6. 慢指针从入环处开始跑b步，距离入环处就剩下了n。此时，快指针则是从距离入环处n步远的位置开始跑了2b步，
   *  距离入环处也是剩下了n。他们相遇了，并且距离入环处的距离就是n，n就是头节点到入环点的距离阿!!! 后面的不用说了吧。
   * 
   * 环很小的情况，其实跟环很大是一样的，比如你可以理解为将多个小环的循环铺开，虚拟扩展成一个大环来理解。
   * 
   * 复杂度分析：
   *  时间复杂度：O(n)
   *  空间复杂度：O(1)
   * 
   * 运行结果：
   *  16/16 cases passed (84 ms)
   *  Your runtime beats 58.01 % of javascript submissions
   *  Your memory usage beats 12.5 % of javascript submissions (38.6 MB)
   */

  let slow = fast = head

  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if (fast === slow) break
  }

  if (!fast || !fast.next) return null

  slow = head

  while(slow !== fast) {
    fast = fast.next
    slow = slow.next
  }

  return fast

  /**
   * 1. 哈希表
   */

   /*
  const set = new Set()

  while(head) {
    if (set.has(head)) return head
    set.add(head)

    head = head.next
  }

  return null
  */
};
// @lc code=end


/**
 * 方法1：哈希表
 * 复杂度分析：
 *   时间复杂度：O(n)，对于含有 n 个元素的链表，我们访问每个元素最多一次。
 *     添加一个结点到哈希表中只需要花费 O(1) 的时间。
 *   空间复杂度：O(n)，空间取决于添加到哈希表中的元素数目，最多可以添加 n 个元素。
 */
// var hasCycle = function(head) {
//   const seen = new Set()
//   while(head) {
//   	if (seen.has(head)) return head
//     seen.add(head)
//     head = head.next
//   }
//   return null
// }

/**
 * 方法2：快慢指针
 * 推导过程：
 *   相遇时：
 *     slow走过的路程：x + y + n(y+z), n代表slow绕了n圈
 *     fast走过的路程：x + y + m(y+z)，m代表fast饶了m圈
 *     m > n
 *   因为fast速度是slow两倍：
 *     2(x + y + n(y + z)) = x + y + m(y + z)
 *     x + y = (m - 2n)(y + z)
 *     x = (m - 2n)(y + z) - y
 *     y + z就是1圈，假设 o = m-2n，o是一个正整数，那么 x = o(y + z) -y
 *     如果o = 1，那么 x = z，和答主假设的情况一样
 *     如果o > 1，那么 x = (o-1)(y+z) + y + z - y, x = (o-1)(y+z) + z，
 *       即x的长度为o-1圈加上z 
 *   所以，从第一阶段获得的相遇点，走过x距离机会到达环的起点。
 * 复杂度分析：
 *   时间复杂度：O(n)，第二次相遇中，慢指针须走步数 x < x + y；第一次相遇中，
 *     慢指针须走步数 x + y - x' < x + y，其中 x' 为双指针重合点与环入口距离；
 *     因此总体为线性复杂度；
 *   空间复杂度：O(1)，双指针使用常数大小的额外空间。
 */
// var hasCycle = function(head) {
//   let slow = fast = head
//   while(fast && fast.next) {
//     slow = slow.next
//     fast = fast.next.next
//     if (slow === fast) {
//       slow = head
//       while(slow !== fast) {
//         slow = slow.next
//         fast = fast.next
//       }
//       return slow
//     }
//   }
//   return null
// }