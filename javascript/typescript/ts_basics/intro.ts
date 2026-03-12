let helloWorld: string = "Hello World!";
// console.log(helloWorld);

// const user = {
//   name: "Amily",
//   id: 0,
// };

interface User {
  name: string;
  id: number;
}

const user1: User = {
  name: "Amily",
  id: 0,
};

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  };
};

const user: User = new UserAccount("Murphy", 1);
// console.log(user.name);

// GENERICS
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(obj: string | string[]) {
  return obj.length;
}
// console.log(getLength("hello"));
// console.log(getLength(["w", "o", "r", "l", "d",]));
// console.log(typeof getLength);

function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
}
// console.log(wrapInArray("hello"));
// console.log(wrapInArray(["w", "o", "r", "l", "d",]));

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
// logPoint(point);

const point3 = { x: 12, y: 26, z: 89 };
// logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
// logPoint(rect); // logs "33, 3"

const color = { hex: "#187ABF" };
// logPoint(color);

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
