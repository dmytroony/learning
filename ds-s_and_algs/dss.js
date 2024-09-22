let stack_1 = [];

function stackIn(stack, el) {
  return stack.push(el);
}

function stackOut(stack) {
  return stack.pop();
}
stackIn(stack_1, "Minecraft");
stackIn(stack_1, "Skyrim");
stackIn(stack_1, "DOOM");
stackIn(stack_1, "Borderlands");
stackIn(stack_1, "FFVII");

console.log(stack_1);

// stackOut(stack_1);
// console.log(stack_1);

// console.log(stack_1.shift());
// console.log(stack_1);

console.log(stack_1.find(el => el === "FFVII"));
console.log(stack_1.find(el => el === "Fallout"));
 