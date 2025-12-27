
// ------------- JavaScript 2025 Crash Course -------------

// document.body.style.background = "lightgreen";


//// Implicit type coercion

// eval()-------------

console.log(eval("2 + 2"));
// Expected output: 4

console.log(eval(String("2 + 2")));
// Expected output: 2 + 2

console.log(eval("2 + 2") === eval(String("2 + 2")));

console.log(eval(new String("2 + 2")));
// Expected output: 2 + 2

console.log(eval("2 + 2") === eval("4"));
// Expected output: true

console.log(eval("2 + 2") === eval(new String("2 + 2")));
// Expected output: false

console.log(eval("2 + 2") === eval(String("2 + 2")));
// Expected output: true

console.log(eval(new Number(456)))