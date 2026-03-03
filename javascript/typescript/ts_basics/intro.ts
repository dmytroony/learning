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
console.log(user.name);

