
// ES2025

// Promise.try()

// Promise.try(func)
// Promise.try(func, arg1)
// Promise.try(func, arg1, arg2)
// Promise.try(func, arg1, arg2, /* …, */ argN)

// new Promise((resolve) => resolve(func()));
// Promise.try(func);
// Promise.resolve().then(func);
//
// Promise.try(() => func(arg1, arg2));
// //
// Promise.try(func, arg1, arg2);

// function doSomething(action) {
//     return Promise.try(action)
//         .then((result) => console.log(result))
//         .catch((error) => console.error(error))
//         .finally(() => console.log("Done"));
// }
//
// doSomething(() => "Sync result");
//
// doSomething(() => {
//     throw new Error("Sync error");
// });
//
// doSomething(async () => "Async result");
//
// doSomething(async () => {
//     throw new Error("Async error");
// });

// async function doSomething(action) {
//     try {
//         const result = await action();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     } finally {
//         console.log("Done");
//     }
// }
//
// doSomething(() => "Sync result");

// Promise.try = function (func) {
//     return new this((resolve, reject) => {
//         try {
//             resolve(func());
//         } catch (error) {
//             reject(error);
//         }
//     });
// };

// class NotPromise {
//     constructor(executor) {
//         // The "resolve" and "reject" functions behave nothing like the native
//         // promise's, but Promise.try() just calls resolve
//         executor(
//             (value) => console.log("Resolved", value),
//             (reason) => console.log("Rejected", reason),
//         );
//     }
// }
//
// const p = Promise.try.call(NotPromise, () => "hello");
// // Logs: Resolved hello
//
// const p2 = Promise.try.call(NotPromise, () => {
//     throw new Error("oops");
// });
// // Logs: Rejected Error: oops


// // Set methods for Javascript
// const activeUsers = new Set(['user1', 'user2', 'user3']);
// const adminUsers = new Set(['user1', 'user4', 'user5']);
//
// const activeAdmins = activeUsers.intersection(adminUsers);
// const activeNonAdmins = activeUsers.difference(adminUsers);
// const addAdminUsers = adminUsers.isSubsetOf(activeUsers);

// RegExp

function removeDomain(text, domain) {
  return text.replace(new RegExp(`https?://${domain}(?=/)`, "g"), "");
}

const input =
  "Consider using [RegExp.escape()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape) to escape special characters in a string.";
const domain = "developer.mozilla.org";
console.log(removeDomain(input, domain));
// Consider using [RegExp.escape()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape) to escape special characters in a string.


// RegExp.escape(string);
RegExp.escape("Buy it. use it. break it. fix it.");
// "\\x42uy\\x20it\\.\\x20use\\x20it\\.\\x20break\\x20it\\.\\x20fix\\x20it\\."
RegExp.escape("foo.bar"); // "\\x66oo\\.bar"
RegExp.escape("foo-bar"); // "\\x66oo\\x2dbar"
RegExp.escape("foo\nbar"); // "\\x66oo\\nbar"
RegExp.escape("foo\uD800bar"); // "\\x66oo\\ud800bar"
RegExp.escape("foo\u2028bar"); // "\\x66oo\\u2028bar"

// Using RegExp.escape() with the RegExp constructor
function removeDomain(text, domain) {
    return text.replace(new RegExp(`https?://${domain}(?=/)`, "g"), "");
}

const input =
    "Consider using [RegExp.escape()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape) to escape special characters in a string.";
const domain = "developer.mozilla.org";
console.log(removeDomain(input, domain));
// Consider using [RegExp.escape()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape) to escape special characters in a string.

// RegExp: pattern modifiers
//https://github.com/tc39/proposal-regexp-modifiers
// i — Ignore Case
// m — Multiline
// s — Single-line (a.k.a. "dot all")
// x — Extended mode (see https://github.com/rbuckton/proposal-regexp-x-mode)

// RegExp: duplicate named capturing groups
// https://github.com/tc39/proposal-duplicate-named-capturing-groups
// str.match(/(?<year>[0-9]{4})-[0-9]{2}|[0-9]{2}-(?<year>[0-9]{4})/)

// Import attributes
// https://github.com/tc39/proposal-import-attributes

// Iterator helpers
// https://github.com/tc39/proposal-iterator-helpers

// Float16Array
// https://github.com/tc39/proposal-float16array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float16Array
