// ## Challenge 1
// let greeting: string = "Hello, TypeScript!";
// console.log(greeting.toUpperCase());

// let age: number = 25;
// console.log(age + 5);

// let isAdult: boolean = age >= 18;
// console.log(isAdult);

// greeting = 10;
// age = "thirty";
// isAdult = 'yes';
//
// console.log(greeting, age, isAdult);


// UNIONS
// let tax: number | string = 10;
// console.log(tax);
// tax = '$10';
// console.log(tax);


// let requestStatus: "pending" | "success" | "error" = "pending";
// console.log(requestStatus);
// requestStatus = "error";
// console.log(requestStatus);


// let notSure: any = 4;
// console.log(notSure);
// notSure = "a string";
// notSure = false;
// console.log(notSure);


// const books: string[] = ['1984', 'Brave New World', 'Fahrenheit 451',];
// let foundBook: string | undefined;
//
// for (let book of books) {
//   if (book === '1984') {
//     foundBook = book;
//     foundBook = foundBook.toUpperCase();
//     break;
//   }
// }
//
// console.log(foundBook?.length);


// // ## Challenge 2
// let discount: number | string = 20;
// console.log(discount);
// discount = '20%';
// console.log(discount);
// // discount = true;
// // console.log(discount);
//
// let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
// orderStatus = 'shipped';
// orderStatus = 'delivered';
// console.log(orderStatus);


// let prices: number[] = [100, 75, 42];
// let fruits: string[] = ['apple', 'orange', 'banana'];
// // let randomValues: [] = []; // always empty array
// // let emptyValues = []; // array with anything
// let emptyValues: number[] = [];
// let names: string[] = ['peter', 'susan', 'andrew'];
// // let names = ['peter', 'susan', 'andrew', 12];
// console.log(names[2]);
// let array:(string | boolean)[] = ['apple', true, 'banana', false];
//
// let temperatures: number[] = [20, 25, 30];
// temperatures.push(35);
// console.log(temperatures);
//
// let colors: string[] = ['red', 'green', 'blue'];
// colors.push('violet');
//
// let mixedArr: (number | string)[] = [1, 'two', 3];
// mixedArr.push('four');
// console.log(mixedArr);


// pt.2. Object & Functions
// OBJECTS
// let car: { brand:string; year: number } =
//   { brand: 'toyota', year: 2020 };
//
// interface Car {
//   brand:string,
//   year: number
// }
//
// const toyota: Car = {
//   brand: 'toyota',
//   year: 2020
// };
//
// console.log(toyota.brand);
//
// let book = { title: 'book', cost: 20 };
// let pen = { title: 'pen', cost: 10 };
// let notebook = { title: 'notebook'};
//
// let items: { readonly title: string; const?: number }[] =
//   [ book, pen, notebook ];
//
// console.log(items[2].title = 'sketchbook'); // readonly !
//
// let bike: { brand: string; year: number } =
//   { brand: 'yamaha', year: 2010 };
//
// let laptop: { brand: string; year: number } =
//   { brand: 'dell', year: 2013 };
//
// let product1 = { title: 'shirt', price: 20 };
// let product2 = { title: 'pants' };
//
// let products: { title: string; price?: number }[] =
//   [product1, product2];
// products.push({title: 'shoes'});
// console.log(products);
//
// FUNCTIONS
// function sayHi(name: string) {
//   console.log(`Hello there ${name.toUpperCase()}`);
// }
// sayHi('john');
//
// function calculateDiscount(price: number): number {
//   const hasDiscount:boolean = true;
//   if (hasDiscount) {
//     return price;
//     // return 'Discount applied.';
//   }
//   return price * 0.9;
// }
// const finalPrice = calculateDiscount(200);
// console.log(finalPrice);
//
// function addThree(number: any) {
//   let anotherNumber: number = 3;
//   return number + anotherNumber;
// }
//
// const result = addThree(3);
// console.log(result);


// // ## Challenge 3
// const names: string[] = ['john', 'merry', 'dilan'];
//
// function isNameInList(name: string): boolean {
//   return names.includes(name);
// }
//
// let nameToCheck: string = 'john';
//
// if (isNameInList(nameToCheck)) {
//   console.log(`${nameToCheck.toUpperCase()} is in the list.`);
// } else {
//   console.log(`${nameToCheck} is not in the list!`);
// }
//
//
// function calculatePrice(price: number, discount?: number): number {
//   return price - ( discount || 0 );
// }
// // console.log(calculatePrice(15, 3));
// // console.log(calculatePrice(15));
// //
// function calculateScore(initialScore: number, penaltyPoints: number = 0): number {
//   return initialScore - penaltyPoints;
// }
// console.log(calculateScore(23, 7));
// console.log(calculateScore(23));
//
// function sum(message: string, ...numbers: number[]): string {
//   const doubled = numbers.map( (num) => num * 2);
//   console.log(doubled);
//
//   let total =
//     numbers.reduce((previous, current) => {
//       return previous + current;
//     }, 0);
//   return `${message}${total}`;
// }
//
// let result: string = sum(`The total is: `, 1, 2, 3, 4, 5);
// console.log(result);
//
// function logMessage(message: string): void {
//   console.log(message);
//   // return `Hello, World!`;
// }
// logMessage(`Hello, TS!`);
//
// ## Challenge 4
// function processInput(input: string | number) {
//   return typeof input === 'number' ? input * 2 : input.toUpperCase();
// }
// const numResult = processInput(23);
// const textResult = processInput("hello john");
// console.log(numResult);
// console.log(textResult);
//
// function createEmployee({ id }:{ id: number }): { id: number; isActive: boolean } {
//   return { id, isActive: id % 2 === 0 };
// }
//
// console.log(createEmployee({ id: 1 }));
// console.log(createEmployee({ id: 2 }));
//
// function createStudent(student: { id: number; name: string; email: string }): void {
//   console.log(`Welcome to the course ${student.name}!`);
// }
// const andrew = {
//   id: 21,
//   name: 'Andrew',
//   email: "andrew@mail.com"
// };
// createStudent(andrew);
// createStudent({
//   id: 13,
//   name: "Kate",
//   email: "kate@mail.com"
// });
//
//
// ## Challenge 5
// function processData(
//   input: string | number,
//   config: { reverse: boolean } = { reverse: false }
//   ): string | number {
//
//   if (typeof input === "number") return input ** 2;
//   return config.reverse ?
//     input.split("").reverse().join("").toUpperCase() : input.toUpperCase();
// }
//
// console.log(processData(5));
// console.log(processData("hello"));
// console.log(processData("hello", {reverse: true}));


// // ALIAS and INTERFACE
//
// Type Alias
//
// type User = { id: number; name: string; isActive: boolean };
// const john: User = { id: 1, name: "John", isActive: true };
// const susan: User = { id: 1, name: "Susan", isActive: false };
//
// function createUser(user: User): User {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`);
//   return user;
// }
// createUser(john);
// createUser(susan);
//
// type StringOrNumber = string | number;
// let value: StringOrNumber;
// value = 'hello';
// console.log(value);
// value = 123;
// console.log(value);
//
// type Theme = 'light' | 'dark';
// let theme: Theme;
// theme = 'dark';
// theme = 'light';
// function setTheme(t: Theme) {
//   theme = t;
// }
// setTheme("dark");
//
// // ## Challenge 6
// type Employee = {
//   id: number;
//   name: string;
//   department: string;
// };
// type Manager = {
//   id: number;
//   name: string;
//   employees: Employee[];
// };
// type Staff = Employee | Manager;
// const alice: Employee = { id: 1, name: "alice", department: "Sales" };
// const steve: Employee = { id: 1, name: "steve", department: "HR" };
// const bob: Manager = { id: 1, name: "bob", employees: [alice, steve] };
//
// function printStaffDetails(staff: Staff): void {
//   staff?.employees
//     ?
//     console.log(`${staff.name} is a Manager`)
//     :
//     console.log(`${staff.name} is an Employee belonging to ${staff.department}`)
// }
//
// printStaffDetails(alice);
// printStaffDetails(bob);
// printStaffDetails(steve);
//
//
// type Book = { id: number, name: string, price: number };
// type DiscountedBook = Book & { discount: number };
// const book1: Book = {
//   id: 1,
//   name: "how to cook a dragon",
//   price: 15
// };
// const book2: Book = {
//   id: 1,
//   name: "the secret life of unicorns",
//   price: 18
// };
// const discountedBook: DiscountedBook = {
//   id: 3,
//   name: "Gnomes vs. Goblins: The Ultimate Guide",
//   price: 25,
//   discount: 0.25
// };
//
// const propName = 'age';
// type Animal = {
//   [propName]: number
// };
// let tiger: Animal = { [propName]: 5 };
// console.log(tiger);
//
//
// // Interface
// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
//
//   printAuthor(): void;
//
//   printTitle(message: string): string;
//
//   printSth: (someValue: number) => number;
// }
//
// const deepWork: Book = {
//   isbn: 911113813,
//   title: "Deep work",
//   author: "Cal Newport",
//   genre: "Self-help",
//   printAuthor() {
//     console.log(this.author);
//   },
//   printTitle(message) {
//     return `${message} ${this.title}`;
//   },
//   // printSth: function(someValue) { // 1st option
//   //   return someValue;
//   // },
//   // printSth: someValue => { // 2nd option
//   //   return someValue;
//   // },
//   printSth(someValue) { // 3rd option
//     return someValue;
//   }
// }
//
// deepWork.printAuthor();
// console.log(deepWork.printTitle("Let\'s dive into the"));
// console.log(deepWork.printSth(32));
//
//
// // ## Challenge 7
// interface Computer {
//   readonly id: number;
//   brand: string;
//   ram: number;
//   storage?: number;
//   upgradeRam(increase: number): number;
// }
// const dellE6320: Computer = {
//   id: 3123,
//   brand: "dell",
//   ram: 8,
//   upgradeRam(increase) {
//     const upgradedRam = increase + this.ram;
//     console.log(`RAM was upgraded from ${this.ram}GB to ${upgradedRam}GB`);
//     return upgradedRam;
//   }
// };
// console.log(dellE6320.upgradeRam(8));
//
//
// interface Person {
//   name: string;
//   getDetails(): string;
// }
// interface DogOwner {
//   dogName: string;
//   getDogDetails(): string;
// }
// interface Person { // extending Person
//   age: number;
// }
//
// const person: Person = {
//   name: "John",
//   age: 31,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   }
// };
//
// interface Employee extends Person {
//   employeeId: number;
// }
//
// const employee: Employee = {
//   name: "Jane",
//   age: 28,
//   employeeId: 34,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}, employeeID: ${this.employeeId}`;
//   }
// };
//
// interface Manager extends Person, DogOwner {
//   managePeople(): void;
// }
//
// const manager: Manager = {
//   name: "Bob",
//   age: 35,
//   dogName: "Rex",
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
//   getDogDetails() {
//     return `Name: ${this.dogName}`;
//   },
//   managePeople() {
//     console.log("Managing people...");
//   },
// };
//
// console.log(person.getDetails());
// console.log(employee.getDetails());
// manager.managePeople();
//
//
// // Challenge 8, pt. 1
// //
// function getEmployee(): Person | DogOwner | Manager {
//   const randomNum: number = Math.random();
//   if (randomNum < 0.33) return { name: "John" };
//   if (randomNum < 0.66) return { name: "Sarah", dogName: "Rex" };
//   return {
//     name: "Bob",
//     managePeople() {
//       console.log("Managing people...");
//     },
//     delegateTasks() {
//       console.log("Delegating tasks...");
//     }
//   };
// }
//
// interface Person {
//   name: string;
// }
// interface DogOwner extends Person {
//   dogName: string;
// }
// interface Manager extends Person {
//   managePeople(): void;
//   delegateTasks(): void;
// }
// const employee: Person | DogOwner | Manager = getEmployee();
// console.log(employee);
//
// // function isManager(obj: Person | DogOwner | Manager): boolean {
// function isManager(obj: Person | DogOwner | Manager): obj is Manager {
//   return "managePeople" in obj && "delegateTasks" in obj;
// }
//
// if (isManager(employee)) {
//   employee.delegateTasks();
// }
//
//
// ? Tuples and Enums
// Tuples
// let john: [string, number] = ["john", 25];
// let date: readonly [number, number, number] = [12, 17, 2001];
// // console.log(date);
// // date.push(34);
// // console.log(date);
//
// function getPerson(whoIs: [string, number]): [string, number] {
//   return whoIs;
// }
//
// let randomPerson: [string, number] = getPerson(john);
// console.log(randomPerson[0]);
// console.log(randomPerson[1]);
//
// let susan: [string, number?] = ["susan"];
//
// Enums
// enum ServerResponseStatus {
//   Success = 200,
//   // Error = 'Error',
//   Error = 500,
// }
//
// Object.values(ServerResponseStatus).forEach(value => {
//   if (typeof value === 'number') console.log(value);
// });
//
// interface ServerResponse {
//   result: ServerResponseStatus;
//   data: string;
// }
//
// function getServerResponse(): ServerResponse {
//   return {
//     result: ServerResponseStatus.Success,
//     data: ["1st item", "2nd item", "3rd item"],
//   };
// }
//
// const response: ServerResponse = getServerResponse();
// console.log(response);
//
// // ## Challenge 9
// enum UserRole {
//   Admin,
//   Manager,
//   Employee
// }
// type User = {
//   id:number;
//   name:string;
//   role:UserRole;
//   contact:[string, string];
// }

// function createUser(user:User): User {
//   return user;
// }

// const user:User = createUser({
//   id:1,
//   name: "John Doe",
//   role:UserRole.Admin,
//   contact:['johndoe@gmail.com', '123-456-789']
// });

// console.log(user);
// 
// let someBValue:any = 'this is a string';
// let strLength:number = (someBValue as string).length;
// // console.log(strLength);

// type Bird = {
//   name:string;
// }

// let birdString = '{ "name": "Eagle" }';
// let dogString = '{ "breed": "Poodle" }';
// let birdObject = JSON.parse(birdString);
// let dogObject = JSON.parse(dogString);
// let bird = birdObject as Bird;
// let dog = dogObject as Bird;

// console.log(bird.name);
// console.log(dog.name);

// enum Status {
//   Pending = 'pending',
//   Declined = 'declined',
// }

// type User = {
//   name:string;
//   status:Status;
// }

// const statusValue = 'pending';
// const user:User = {
//   name: 'John',
//   status: statusValue as Status
// };
// 
// 
// // Type - 'unknown'
// let unknownValue:unknown;

// unknownValue = 'hello world';
// console.log(unknownValue);

// unknownValue = [1, 2, 3];
// console.log(unknownValue);

// unknownValue = 45.33576;
// console.log(unknownValue);

// if (typeof unknownValue === 'number')
//   console.log(unknownValue.toFixed(2));

// function runSomeCode() {
//   const random = Math.random();
//   if (random < .5) throw new Error('sth went wrong...');
//   else throw 'some error';
// }

// try {
//   runSomeCode();
// } catch (error) {
//   if (error instanceof Error) console.log(error.message);
//   else console.log(error);
// }
// 
// // Type - 'never'
// // let someValue:never = 0; // can't assign any value to type 'never'
// let someValue:never;
//
// type Theme = 'light' | 'dark';
//
// function checkTheme(theme:Theme):void {
//   if (theme === 'light') {
//     console.log('light theme');
//     return;
//   }
//   if (theme === 'dark') {
//     console.log('dark theme');
//     return;
//   }
//   theme;
// }
// // checkTheme('dark');
// enum Color {
//   Red,
//   Blue,
//   Green,
// }
//
// function getColorName(color:Color) {
//   switch (color) {
//     case Color.Red:
//       return 'red color';
//     case Color.Blue:
//       return 'blue color';
//     case Color.Green:
//       return 'green color';
//     default:
//       // at buildtime
//       let unexpectedColor:never = color;
//
//       // at runtime
//       throw new Error(`Unexpected color value ${color}`);
//   }
// }export
// console.log(getColorName(Color.Red));
// console.log(getColorName(Color.Blue));
// console.log(getColorName(Color.Green));
//
//
// // import { sth } from './actions';
// const name = '';
// const susan = 'susan';
//
//
// import newStudent, { sayHello, person, type Student } from "./actions";
//
// sayHello('TypeScript');
// console.log(newStudent.name);
// console.log(person);
//
// const anotherStudent:Student = {
//   name: 'bob',
//   age: 31,
// };
// console.log(anotherStudent.name);
//
// import {someValue} from './example.js'; // allowJs should be added to tsconfig.json
// console.log(someValue);
//
//
// // Type Guarding
// typeof "guard"
type ValueType = string | number | boolean;
let value:ValueType;
const random = Math.random();
value = random < .33 ? 'Hello' : random < .66 ? 123.456 : true;
console.log(value);