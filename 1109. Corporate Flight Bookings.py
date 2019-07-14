# There are n flights, and they are labeled from 1 to n.

# We have a list of flight bookings.  The i-th booking bookings[i] = [i, j, k] means that we booked k seats from flights labeled i to j inclusive.

# Return an array answer of length n, representing the number of seats booked on each flight in order of their label.


# Example 1:

# Input: bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
# Output: [10,55,45,25,25]


# Constraints:

# 1 <= bookings.length <= 20000
# 1 <= bookings[i][0] <= bookings[i][1] <= n <= 20000
# 1 <= bookings[i][2] <= 10000

class Solution(object):
    def corpFlightBookings(self, bookings, n):
        """
        :type bookings: List[List[int]]
        :type n: int
        :rtype: List[int]
        """
        arr = [0] * (n + 1)
        for i, j, k in bookings:
            arr[i - 1] += k
            arr[j] -= k
        for i in range(1, n):
            arr[i] += arr[i - 1]

        return arr[:-1]


print(Solution().corpFlightBookings([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5))
print(Solution().corpFlightBookings([[2, 2, 30], [2, 2, 45]], 2))
print(Solution().corpFlightBookings([[2, 3, 30], [2, 3, 45], [2, 3, 15], [1, 3, 15]], 4))
