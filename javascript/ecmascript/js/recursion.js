// let a = 1
//
// function recursion() {
//   a++
//   console.log(a)
//   if (a > 10) return a
//   recursion()
// }
//
// recursion()

let out1 = document.querySelector("#out1");

function getStyleOut1(width, height, position, background) {
  out1.style.width = width;
  out1.style.height = height;
  out1.style.position = position;
  out1.style.background = background;
}
getStyleOut1("50px", "50px", "relative", "lightgreen");

let offset = 0;
function move() {
  offset += 5;
  out1.style.left = offset + "px";
  if (offset > 200) return true;
  setTimeout(move, 500);
}

document.querySelector("button").addEventListener("click", move);
