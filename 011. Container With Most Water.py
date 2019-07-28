# Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

# Note: You may not slant the container and n is at least 2.

# The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.


# Example:

# Input: [1,8,6,2,5,4,8,3,7]
# Output: 49

class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        left = 0
        right = len(height) - 1
        maxArea = float('-inf')

        while(left < right):
            hl = height[left]
            hr = height[right]
            area = min(hl, hr) * (right - left)
            maxArea = max(maxArea, area)

            if(hl < hr):
                left += 1
            else:
                right -= 1

        return maxArea


print(Solution().maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
