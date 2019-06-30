# Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

# Calling next() will return the next smallest number in the BST.


# Example:

# BSTIterator iterator = new BSTIterator(root);
# iterator.next();    // return 3
# iterator.next();    // return 7
# iterator.hasNext(); // return true
# iterator.next();    // return 9
# iterator.hasNext(); // return true
# iterator.next();    // return 15
# iterator.hasNext(); // return true
# iterator.next();    // return 20
# iterator.hasNext(); // return false


# Note:

# next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
# You may assume that next() call will always be valid, that is, there will be at least a next smallest number in the BST when next() is called.

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

import collections

class BSTIterator(object):

    def __init__(self, root):
        """
        :type root: TreeNode
        """
        def rec(root):
            if root is None: return;

            rec(root.left)
            self.queue.append(root.val)
            rec(root.right)

        self.queue = collections.deque()
        rec(root)

    def next(self):
        """
        @return the next smallest number
        :rtype: int
        """
        return self.queue.popleft()

    def hasNext(self):
        """
        @return whether we have a next smallest number
        :rtype: bool
        """
        return len(self.queue) > 0


# Your BSTIterator object will be instantiated and called as such:
# obj = BSTIterator(root)
# param_1 = obj.next()
# param_2 = obj.hasNext()

node = TreeNode(7)
node.left = TreeNode(3)
node.right = TreeNode(15)
node.right.left = TreeNode(9)
node.right.right = TreeNode(20)

iterator = BSTIterator(node)
v1 = iterator.next()    # return 3
v2 = iterator.next()    # return 7
v3 = iterator.hasNext()  # return true
v4 = iterator.next()    # return 9
v5 = iterator.hasNext()  # return true
v6 = iterator.next()    # return 15
v7 = iterator.hasNext()  # return true
v8 = iterator.next()    # return 20
v9 = iterator.hasNext()  # return false

print(v1, v2, v3, v4, v5, v6, v7, v8, v9)
