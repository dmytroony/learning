// function first() {
//   setTimeout(
//       function () {
//         console.log(1)
//       }, 2000)
// }

// function first(y) {
//   console.log(1)
//   y()
// }
//
// // function second() {
// //   console.log(2)
// // }
//
// function second(a, b) {
//   console.log(a + b)
// }
//
// first(() => {
//   second(4, 7)
// })

function showMessage(name, status, callback) {
  if (callback && typeof callback === "function") callback();
  else console.log(`Hello ${name}, your status is ${status}`);
}

// showMessage('John', 'Admin', () => console.log(`Msg not supported.`))

showMessage("John", "Admin");
