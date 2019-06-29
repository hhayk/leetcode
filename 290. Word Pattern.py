# Given a pattern and a string str, find if str follows the same pattern.

# Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

# Example 1:

# Input: pattern = "abba", str = "dog cat cat dog"
# Output: true
# Example 2:

# Input:pattern = "abba", str = "dog cat cat fish"
# Output: false
# Example 3:

# Input: pattern = "aaaa", str = "dog cat cat dog"
# Output: false
# Example 4:

# Input: pattern = "abba", str = "dog dog dog dog"
# Output: false
# Notes:
# You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.


class Solution(object):
    def wordPattern(self, pattern, str):
        """
        :type pattern: str
        :type str: str
        :rtype: bool
        """

        pat = pattern
        str = str.split()
        if(len(pat) != len(str)):
            return False

        map1 = {}
        map2 = {}
        for i in range(len(pat)):
            map1[pat[i]] = map1.get(pat[i], 0) + 1
            map2[str[i]] = map2.get(str[i], 0) + 1

        for i in range(len(pat)):
            if map1.get(pat[i]) != map2.get(str[i]):
                return False

        return True


print(Solution().wordPattern("abba", "dog cat cat dog"))
print(Solution().wordPattern("abba", "dog cat cat fish"))
print(Solution().wordPattern("aaaa", "dog cat cat dog"))
print(Solution().wordPattern("abba", "dog dog dog dog"))
