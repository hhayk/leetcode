# You are given a binary tree in which each node contains an integer value.

# Find the number of paths that sum to a given value.

# The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

# The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

# Example:

# root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

#       10
#      /  \
#     5   -3
#    / \    \
#   3   2   11
#  / \   \
# 3  -2   1

# Return 3. The paths that sum to 8 are:

# 1.  5 -> 3
# 2.  5 -> 2 -> 1
# 3. -3 -> 11

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution(object):
    def pathSum(self, root, sum):
        self.cnt = 0

        def traverse(root, tmp):
            if root is None:
                return

            check(root, tmp)
            traverse(root.left, tmp)
            traverse(root.right, tmp)

        def check(root, tmp):
            if root is None:
                return
            if root.val == tmp:
                self.cnt += 1

            check(root.left, tmp - root.val)
            check(root.right, tmp - root.val)

        traverse(root, sum)
        return self.cnt

node = TreeNode(10)
node.left = TreeNode(5)
node.left.left = TreeNode(3)
node.left.right = TreeNode(2)
node.left.left.left = TreeNode(3)
node.left.left.right = TreeNode(-2)
node.left.right.right = TreeNode(1)
node.right = TreeNode(-3)
node.right.right = TreeNode(11)
print(Solution().pathSum(node, 8))
