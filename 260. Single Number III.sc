/*

Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

Example:

Input:  [1,2,1,3,2,5]
Output: [3,5]
Note:

The order of the result is not important. So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

*/

object Solution {
  def singleNumber(nums: Array[Int]): Array[Int] = {
    val set = scala.collection.mutable.Set[Int]()
    for (ni <- nums) {
      if(set.contains(ni)) set.remove(ni)
      else set.add(ni)
    }

    set.toArray
  }
}

Solution.singleNumber(Array(1, 2, 1, 3, 2, 5));