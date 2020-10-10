// function one() {
//   two()
// }
//
// function two() {
//   three()
// }
//
// function three() {
//   console.log('Hello from three function!')
// }
//
// one()

// function one() {
//   setTimeout(two, 2000)
// }
//
// function two() {
//   console.log('Hello from two!')
// }
//
// one()

document.addEventListener("click", clickHandler);
document.addEventListener("scroll", scrollHandler);

function clickHandler() {
  console.log("clicked");
}

function scrollHandler() {
  console.log("scrolled");
}

function slowFn() {
  const n = 100500;
  const numbers = [];

  nextPrime: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue nextPrime;
    }
    numbers.push(i);
  }
}

slowFn();
