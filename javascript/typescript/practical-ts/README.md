1. ```npm create vite@latest practical-ts -- --template vanilla-ts```
2. ```npm install```
3. ```npm run dev```


## Challenge 1
- Create a variable of type string and try to invoke a string method on it.
- Create a variable of type number and try to perform a mathematical operation on it.
- Create a variable of type boolean and try to perform a logical operation on it.
- Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
- You can use type annotation or inference.

## Challenge 2
- Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
- Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.

## Challenge 3
- Create a new array of names.
- Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
- Use this function to check if various names are in your array and log the results.

## Challenge 4
- Create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:
  - If the input is of type number, the function should multiply the number by 2 and log the result to the console.
  - If the input is of type string, the function should convert the string to uppercase and log the result to the console.
