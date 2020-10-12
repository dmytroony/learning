// const delay = ms => new Promise(resolve => setTimeout(() => resolve(), ms));
// // delay(2000).then(() => console.log('after 2sec'));
//
// const url = 'https://jsonplaceholder.typicode.com/todos';
//
// // function fetchTodos() {
// //     console.log('Fetch to do started...');
// //     return delay(2000)
// //         .then(() => fetch(url))
// //         .then(response => response.json());
// // }
// //
// // fetchTodos()
// //     .then(data => console.log('Data:', data))
// //     .catch(e => console.error(e));
// //
// // equal
// //
// async function fetchAsyncTodos() {
//     console.log('Fetch todo started...');
//     try {
//         await delay(2000);
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log('Data:', data);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         console.log('Finally');
//     }
//
// }
// fetchAsyncTodos().then(() => console.log('Fished.'));
