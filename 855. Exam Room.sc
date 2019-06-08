/*

In an exam room, there are N seats in a single row, numbered 0, 1, 2, ..., N-1.

When a student enters the room, they must sit in the seat that maximizes the distance to the closest person.  If there are multiple such seats, they sit in the seat with the lowest number.  (Also, if no one is in the room, then the student sits at seat number 0.)

Return a class ExamRoom(int N) that exposes two functions: ExamRoom.seat() returning an int representing what seat the student sat in, and ExamRoom.leave(int p) representing that the student in seat number p now leaves the room.  It is guaranteed that any calls to ExamRoom.leave(p) have a student sitting in seat p.



Example 1:

Input: ["ExamRoom","seat","seat","seat","seat","leave","seat"], [[10],[],[],[],[],[4],[]]
Output: [null,0,9,4,2,null,5]
Explanation:
ExamRoom(10) -> null
seat() -> 0, no one is in the room, then the student sits at seat number 0.
seat() -> 9, the student sits at the last seat number 9.
seat() -> 4, the student sits at the last seat number 4.
seat() -> 2, the student sits at the last seat number 2.
leave(4) -> null
seat() -> 5, the student sits at the last seat number 5.
​​​​​​​

Note:

1 <= N <= 10^9
ExamRoom.seat() and ExamRoom.leave() will be called at most 10^4 times across all test cases.
Calls to ExamRoom.leave(p) are guaranteed to have a student currently sitting in seat number p.

*/

class ExamRoom(_N: Int) {
  val set = new scala.collection.mutable.TreeSet[Int]()

  def seat(): Int = {
    var idx = 0
    if (set.nonEmpty) {
      var dist = set.head
      var prev = Option.empty[Int]

      for (s <- set) {
        prev match {
          case Some(p) => {
            val d = (s - p) / 2
            if (d > dist) {
              dist = d
              idx = p + d
            }
            prev = Some(s)
          }
          case None => prev = Some(s)
        }
      }

      if (_N - set.last - 1 > dist) idx = _N - 1
    }

    set.add(idx)
    idx
  }

  def leave(p: Int) {
    set.remove(p)
  }
}

/**
  * Your ExamRoom object will be instantiated and called as such:
  * var obj = new ExamRoom(N)
  * var param_1 = obj.seat()
  * obj.leave(p)
  */

val obj = new ExamRoom(10)
val p1 = obj.seat()
val p2 = obj.seat()
val p3 = obj.seat()
val p4 = obj.seat()
val p5 = obj.leave(4)
val p6 = obj.seat()

println(p1)
println(p2)
println(p3)
println(p4)
println(p5)
println(p6)