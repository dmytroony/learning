// main() {
//   print('Hello World!');
// }

// int fib(int n) {
//   return (n <= 1) ? n : (fib(n - 1) + fib(n - 2));
// }
//
// main(List<String> args) {
//   print('fib(20) = ${fib(20)}');
// }

import 'dart:math' as math;

class Point {
  final num x, y;

  Point(this.x, this.y);
  Point.origin() : x = 0, y = 0;

  num distanceTo(Point other) {
    var dx = x - other.x;
    var dy = y - other.y;
    return math.sqrt(dx * dx + dy * dy);
  }
}

main(List<String> args) {
  var p1 = new Point(10, 10);
  var p2 = new Point.origin();
  var distance = p1.distanceTo(p2);
  print(distance);
}
