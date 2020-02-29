'use strict';

// Part 1
// // Objects
// const person = {
//     name: 'Dmytro',
//     age: 30,
//     job: 'Frontend',
// };
//
// const objectProxy = new Proxy(person, {
//     get(target, prop) {
//         console.log(`Getting prop: ${prop}`);
//         if (!(prop in target)) {
//             return prop.split('_').map(part => target[part]).join(' ');
//         }
//         return target[prop];
//     },
//     set(target, prop, value) {
//         if (prop in target) {
//             target[prop] = value;
//         } else {
//             throw new Error(`No ${prop} field in target`);
//         }
//     },
//     has(target, prop) {
//         return ['name', 'age', 'job'].includes(prop);
//     },
//     deleteProperty(target, prop) {
//         console.log('Deleting... ', prop);
//         delete target[prop];
//         return true;
//     }
// });
// // console.log("-> objectProxy", objectProxy);
//
// // Functions
// const log = text => `Log: ${text}`;
//
// const functionProxy = new Proxy(log, { // log === target
//     apply(target, thisArg, argArray) {
//         console.log('Calling fn...');
//         return target.apply(thisArg, argArray).toUpperCase();
//     }
// });
//
// // Classes
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// const PersonProxy = new Proxy(Person, {
//     construct(target, argArray) {
//         console.log('Counstruct...');
//
//         return new Proxy(new target(...argArray), {
//             get(t, prop) {
//                 console.log(`Getting prop "${prop}"`);
//                 return t[prop];
//             }
//         });
//     }
// });
//
// const p = new PersonProxy('Vasyl', 32);

// part 2
// Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj) ? obj[prop] : defaultValue
    });
};

const position = withDefaultValue(
    {
        x: 24,
        y: 42,
    },
    0);
console.log("-> position", position);

// Hidden properties
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj)
            .filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver
            ? obj[prop] : void 0)
    });
};

const data = withHiddenProps({
    name: 'Dmytro',
    age: 30,
    _uid: '123451234',
});

// Optimization
const IndexedArray = new Proxy(Array, {
    construct(target, [argArray]) {
        const index = {};
        argArray.forEach(item => (index[item.id] = item));

        return new Proxy(new target(...argArray), {
            get(arr, prop) {
                switch (prop) {
                    case 'push':
                        return item => {
                            index[item.id] = item;
                            arr[prop].call(arr, item);
                        };
                    case 'findById':
                        return id => index[id];
                    default:
                        return arr[prop];
                }
            }
        })
    }
});

const users = new IndexedArray([
    {id: 1, name: 'Dmytro', job: 'Frontend', age: 30,},
    {id: 2, name: 'Alex', job: 'Trader', age: 32,},
    {id: 3, name: 'Ivan', job: 'Writer', age: 31,},
    {id: 4, name: 'Vasyl', job: 'Fullstack', age: 32,},
]);

