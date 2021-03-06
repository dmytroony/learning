// const str_one: string = 'Hello'
// console.log(str_one);

const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = "Hello TS!";

// Arrays
const numberArray1: number[] = [1, 1, 2, 3, 5, 8, 13];
// Generic types
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ["Hello", "TS"];

// TUPLE
const contact: [string, number] = ["Dmytro", 1234567];

// ANY - redefining type
let variable: any = 42;
variable = "New String";
variable = [];

// Function
function sayMyName(name: string): void {
  console.log(name);
}

sayMyName("Barbara");

// Never
function throwError(message: string): never {
  throw new Error(message);
}

function isFinite(): never {
  while (true) {
    console.log("Something");
  }
}

// Type
type Login = string;

const login: Login = "admin";
// const login2: Login = 2

type ID = string | number;
const id1: ID = 1234;
const id2: ID = "1234";

type SomeType = string | null | undefined;
