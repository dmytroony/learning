// const site = await fetch("https://www.deno.com");
// console.log(await site.text());

// Deno.serve((_request: Request) => {
//     return new Response("Hello, Deno!");
// });

import Person, { sayHi } from './person.ts';

const ada: Person = {
    fName: "Ada",
    sName: "Lovelace",
};

console.log(sayHi(ada));