// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js',],
//   wife: null,
//   method: function () {
//     console.log('hello');
//   },
//   defined: undefined,
//   nan: NaN,
// };
// console.log(JSON.stringify(student));

// console.log(JSON.stringify(1));
// console.log(JSON.stringify('1'));
// console.log(JSON.stringify('str'));
// console.log(JSON.stringify(true));
// console.log(JSON.stringify([true, 1, 2, 3, NaN, "NaN", undefined, null,]));

// let user = {
//   sayHi() {
//     console.log('Hello!');
//   },
//   [Symbol('id')]: 123,
//   something: undefined,
//   NaN,
//   room: {
//     number: 23,
//     participants: ['john', 'ann',],
//   },
// };
// console.log(JSON.stringify(user));

// // Loop links Error
// let room = {
//       number: 23,
//     },
//
//     meetup = {
//       title: 'Conference',
//       participants: ['john', 'ann',],
//     };
//
// meetup.place = room;
// room.occupiedBy = meetup;
//
// // console.log(room);
// // console.log(meetup);
//
// console.log(JSON.stringify(meetup));

// let room = {
//       number: 23,
//     },
//
//     meetup = {
//       title: 'Conference',
//       participants: [{name: 'john',}, {name: 'ann',},],
//       place: room,
//     };
//
// room.occupiedBy = meetup;
//
// console.log(
//     JSON.stringify(
//         meetup, ['title', 'participants', 'name', 'place', 'number']
// ));

// let room = {number: 23,},
//     meetup = {
//       title: 'Conference',
//       participants: [{name: 'john',}, {name: 'ann',},],
//       place: room,
//     };
// room.occupiedBy = meetup;
//
// let objToJson = JSON.stringify(meetup, (key, value) => {
//   // console.log(`${key}: ${value}`);
//   return (key === 'occupiedBy') ? undefined : value;
// });
//
// console.log(objToJson);

// let user = {
//   name: 'John',
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true,
//   },
// };
//
// console.log(JSON.stringify(user, undefined, 2));
// console.log(JSON.stringify(user, null, 2));
//
// console.log(user.toJSON());

// let room = {
//   number: 23
// };
// let meetup = {
//   title: "Conference",
//   date: new Date(Date.UTC(2017, 0, 1)),
//   room,
// };
// console.log(JSON.stringify(meetup));

// console.log(JSON.stringify(new Date));
// console.log(JSON.stringify(new Date()));

// let room = {
//   number: 23,
//   toJSON() { return this.number },
// };
// let meetup = {
//   title: 'Conference',
//   room,
// };
// console.log(JSON.stringify(room));
// console.log(JSON.stringify(meetup));

// let numbers = "[1, 2, 3, null, 4]";
//
// numbers = JSON.parse(numbers);
// console.log(numbers);
// console.log(numbers[1]);

// let user = '{"name": "John", "age": 35, "isAdmin": false, "friends": [1, 2, 3]}';
//
// user = JSON.parse(user);
//
// console.log(user.friends[1]);

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// // let meetup = JSON.parse(str);
// // console.log(meetup.date.getDate());
// let meetup = JSON.parse(str, (key, value) => {
//   if (key === 'date') return new Date(value);
//   return value;
// });
// console.log(meetup.date.getDate());

// let schedule = `{
//   "meetups": [
//     {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//     {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//   ]
// }`;
// schedule = JSON.parse(schedule, (key, value) => {
//   if (key === 'date') return new Date(value);
//   return value;
// });
// console.log(schedule.meetups[1].date.getDate());

// let user = {
//   name: "John Doe",
//   age: 35,
// };
// console.log(JSON.stringify(user));

// let obj = {
//   foo: 'foo',
//   toJSON: function () {
//     return 'bar';
//   },
// };
// console.log(JSON.stringify(obj));
// console.log(JSON.stringify({x: obj}));

// let session = {
//   'screens': [],
//   'state': true,
// };
// session.screens.push({ 'name': 'ScreenA', 'width': 450, 'height': 250 });
// session.screens.push({ 'name': 'ScreenB', 'width': 650, 'height': 350 });
// session.screens.push({ 'name': 'ScreenC', 'width': 750, 'height': 120 });
// session.screens.push({ 'name': 'ScreenD', 'width': 250, 'height': 60 });
// session.screens.push({ 'name': 'ScreenE', 'width': 390, 'height': 120 });
// session.screens.push({ 'name': 'ScreenF', 'width': 1240, 'height': 650 });
//
// localStorage.setItem('session', JSON.stringify(session));
//
// let restoredSession = JSON.parse(localStorage.getItem('session'));
//
// console.log(restoredSession);

// let foo = {
//   foundation: 'Mozilla',
//   model: 'box',
//   week: 45,
//   transport: 'car',
//   month: 7,
// };
//
// console.log(JSON.stringify(foo, (key, value) => {
//   if (typeof value === 'string') return undefined;
//   return value;
// }));
// console.log(JSON.stringify(foo, ['week', 'month']));

// console.log(JSON.parse('{"p": 5}', (k, v) => {
//   if (k === '') return v;
//   return v * 2;
// }));
//
// console.log(JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (k, v) => {
//   console.log(k);
//   return v;
// }));

// // 2 TODO
// let room = {
//   number: 23,
// };
// let meetup = {
//   title: 'Conference',
//   occupiedBy: [{name: 'John',}, {name: 'Marry',},],
//   place: room,
// };
//
// room.occupiedBy = meetup;
// meetup.self = meetup;
//
// console.log(
//     JSON.stringify(meetup, function replacer(key, value) {
//       return (key !== '' && value === meetup) ? undefined : value;
//     })
// );

// /* result:
// {
//   "title":"Conference",
//   "occupiedBy":[{"name":"John"},{"name":"Marry"}],
//   "place":{"number":23}
// }
// */

// let user = {
//   name: 'John',
//   age: 30,
//   toString() {
//     return `{name: "${this.name}", age: ${this.age}}`;
//   },
// };
// console.log(user);
// console.log(user.toString());

// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js',],
//   wife: null,
// };
//
// let jsoned = JSON.stringify(student);
// console.log(jsoned);
// console.log(JSON.par se(jsoned, null, 2));

// let room = { number: 23, };
// let meetup = {
//   title: 'Conference',
//   participants: [{name: 'john'}, {name: 'ann'},],
// };
//
// meetup.place = room;
// room.occupiedBy = meetup;
//
// // console.log(JSON.stringify(meetup, ['title', 'participants', 'number', 'name', 'place']));
// console.log(
//     JSON.stringify(meetup, function replacer(key, value) {
//       return (key === 'occupiedBy') ? undefined : value;
// }
// ));

// const user = {
//   name: 'Sammy',
//   email: 'Sammy@domain.com',
//   plan: 'Pro'
// };
//
// const userStr = JSON.stringify(user);
//
// const userParsed = JSON.parse(userStr, (key, value) => {
//   if (typeof value === 'string') {
//     return value.toUpperCase();
//   }
//   return value;
// });
//
// console.log(userParsed);

// const user = {
//   id: 229,
//   name: 'Sammy',
//   email: 'Sammy@domain.com'
// };
//
// function replacer(key, value) {
//   // console.log(typeof value);
//   if (key === 'email') {
//     return undefined;
//   }
//   return value;
// }
//
// const userStr = JSON.stringify(user, replacer);
// console.log(userStr);


