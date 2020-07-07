/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  // 作者：LeetCode
  // 链接：https://leetcode-cn.com/problems/linked-list-cycle/solution/huan-xing-lian-biao-by-leetcode/
  
  /**
   * 1. 哈希表
   * 2. 快慢指针
   */

  /**
   * 2. 快慢指针（双指针）
   * 
   * 实现思路：
   *  通过使用具有 不同速度 的快、慢两个指针遍历链表，空间复杂度可以被降低至 O(1)O(1)。
   *   慢指针每次移动一步，而快指针每次移动两步。
   * 
   * 现在考虑一个环形链表，把慢指针和快指针想象成两个在环形赛道上跑步的运动员（分别称之为慢跑者与快跑者）。
   *  而快跑者最终一定会追上慢跑者。这是为什么呢？考虑下面这种情况（记作情况 A）- 假如快跑者只落后慢跑者一步，
   *  在下一次迭代中，它们就会分别跑了一步或两步并相遇。
   * 
   * 复杂度分析：
   *  时间复杂度：O(n)，让我们将 n 设为链表中结点的总数。为了分析时间复杂度，我们分别考虑下面两种情况。
   *   链表中不存在环：
   *    快指针将会首先到达尾部，其时间取决于列表的长度，也就是 O(n)。
   *   链表中存在环：
   *    在最糟糕的情形下，时间复杂度为 O(N+K)，也就是 O(n)。其中，非环部分长度为 N，环形部分长度为 K
   *  空间复杂度：O(1)，我们只使用了慢指针和快指针两个结点，所以空间复杂度为 O(1)。
   * 
   * 运行结果：
   *  17/17 cases passed (80 ms)
   *  Your runtime beats 70.76 % of javascript submissions
   *  Your memory usage beats 33.33 % of javascript submissions (38.1 MB)
   */
  
  /*
  if (!head || !head.next) return

  let slow = fast = head

  while(fast) {
    if (!fast.next) return false

    fast = fast.next.next
    slow = slow.next

    if (slow === fast) return true
  }

  return false
  */
  
  /*
  if (!head || !head.next) return false

  let slow = head
  let fast = head.next

  while(slow !== fast) {
    if (!fast || !fast.next) return false

    slow = slow.next
    fast = fast.next.next
  }
  return true
  */
  
  /**
   * 1. 哈希表
   * 
   * 实现思路：
   *  检查一个节点此前是否被访问过来判断链表是否为环形链表。
   * 
   * 算法：
   *  遍历所有节点并在哈希表中存储每个节点的引用（或内存地址）。如果当前结果为空节点 null（即已检测到链表尾部的下一个节点），
   *   那么已经遍历完整个链表，并且该链表不是环形链表。如果当前节点的引用已经存在哈希表中，
   *   那么返回 true（即该链表为环形链表）。
   * 
   * 复杂度分析：
   *  时间复杂度：O(n)，对于含有 n 个元素的链表，我们访问每个元素最多一次。
   *   添加一个结点到哈希表中只需要花费 O(1) 的时间。
   *  空间复杂度：O(n)，空间取决于添加到哈希表中的元素数目，最多可以添加 n 个元素。
   * 
   * 运行结果：
   *  17/17 cases passed (84 ms)
   *  Your runtime beats 51.54 % of javascript submissions
   *  Your memory usage beats 16.67 % of javascript submissions (38.4 MB)
   */

  /*
  const map = new Map()
  
  while(head) {
    if(map.get(head)) return true // 检测到已经存在了
    map.set(head, true) // 不存在，则添加

    head = head.next // 查看下一个
  }

  return false
  */
  
  /*
  const set = new Set()

  while(head) {
    if (set.has(head)) return true
    set.add(head)

    head = head.next
  }

  return false
  */
};
// @lc code=end

