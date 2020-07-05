学习笔记

## 查找有序升序数组旋转点位置

```javascript
function search(nums) {
  let left = 0, right = nums.length - 1

  while(left <= right) {
    const mid = left + Math.floor((right - left) / 2) 

    if (nums[mid] >= nums[left]) { // 升序，旋转点在右边
      if (nums[mid] > nums[mid + 1]) { // 开始降序了
        return mid + 1
      }
      left = mid + 1
    } else { // 旋转点在左边
      if (nums[mid] < nums[mid - 1]) {
        return mid - 1
      }
      right = mid - 1
    }
  }
  return -1
}
```


最近项目多了起来了，时间掌控有点错乱了