// import { DateTime } from "./libs/luxon";

// let now = new Date();
// console.log(now);

// let Jan01_1970 = new Date(0);
// console.log(Jan01_1970);
//
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log(Jan02_1970);
//
// let Dec31_1969 = new Date(-24 * 3600 * 1000);
// console.log(Dec31_1969);

// let date = new Date('2017-01-26');
// console.log(date);

// console.log(new Date(2021, 0, 1, 0, 0, 0, 0,));
// console.log(new Date(2021, 0, 1));

// console.log(new Date('2021/02/12'));
// console.log(new Date('2021*02*12'));

// console.log(new Date().getYear()); // !!! deprecated !!!
// console.log(new Date().getFullYear());
// console.log(new Date().getMonth());
// // console.log(new Date().getUTCMonth());
// console.log(new Date().getDate());
// console.log(new Date().getHours());
// console.log(new Date().getUTCHours());
// console.log(new Date().getTimezoneOffset());

// console.log(new Date().setFullYear(2021, 3,28));

// console.log(new Date(2021, 4,33));

// let date = new Date(2016, 1, 28);
// console.log(date);
// // date.setDate(date.getDate() + 2);
// // console.log(date);
// // date.setDate(date.getDate() - 2);
// // console.log(date);
// console.log(+date);

// let start = new Date();
//
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }
//
// let end = new Date();
//
// console.log(`Loop finished by: ${end - start}ms`);

// let start = Date.now();
//
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }
//
// let end = Date.now();
//
// console.log(`Loop finished by: ${end - start}ms`);

// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }
//
// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }
//
// function bench(fn) {
//   let date1 = new Date(0);
//   let date2 = new Date();
//   let start = Date.now();
//
//   for (let i = 0; i < 100000; i++) fn(date1, date2);
//
//   return Date.now() - start;
// }
//
// console.log(`Time diffSubtract: ${bench(diffSubtract())}ms`);
// console.log(`Time diffGetTime: ${bench(diffGetTime())}ms`);

// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }
//
// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }
//
// function bench(fn) {
//   let date1 = new Date(0);
//   let date2 = new Date();
//
//   let start = Date.now();
//   for (let i = 0; i < 100000; i++) fn(date1, date2);
//
//   return Date.now() - start;
// }
//
// console.log(`Time diffSubtract: ${bench(diffSubtract)}ms`);
// console.log(`Time diffGetTime: ${bench(diffGetTime)}ms`);
//
// let date = new Date(2016, 1, 28);
// console.log(date);
// // date.setDate(date.getDate() + 2);
// date.setDate(date.getDate() - 2);
// console.log(date);

// let date = new Date();
// date.setSeconds(date.getSeconds() + 70);
// console.log(date);

// let date = new Date();
// console.log(date);
// date.setDate(1);
// console.log(date);
// date.setDate(0);
// console.log(date);

// let start1 = new Date();
// for (let i = 0; i < 1000000000; i++) {
//   let doSomething = i * i * i;
// }
// let end1 = new Date();
// console.log(end1 - start1, 'ms');

// let start2 = Date.now();
// for (let i = 0; i < 1000000000; i++) {
//   let doSomething = i * i * i;
// }
// let end2 = Date.now();
// console.log(end2 - start2, 'ms');

// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }
//
// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }
//
// function bench(fn) {
//   let date1 = new Date(0),
//       date2 = new Date(),
//       start = Date.now();
//
//   for (let i = 0; i < 1e5; i++) fn(date1, date2);
//
//   return Date.now() - start;
// }
//
// let time1 = 0;
// let time2 = 0;
//
// // to warm up speed
// bench(diffSubtract);
// bench(diffGetTime);
//
// for (let i = 0; i < 10; i++) {
//   time1 += bench(diffSubtract);
//   time2 += bench(diffGetTime);
// }
//
// console.log(`Time diffSubtract: ${time1}`);
// console.log(`Time diffGetTime: ${time2}`);

// let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
// console.log(ms);
// console.log(new Date(ms));

// console.log(performance.now());
// console.log(performance.now());

// // 1
// // let date = new Date('2012-02-20T03:12');
// let date = new Date(2012, 1, 20, 3, 12);
// console.log(date);

// // 2
// let date = new Date(2012, 0, 3);
//
// function getWeekDay(value) {
//   const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',];
//
//   return days[date.getDay()];
// }
//
// console.log(getWeekDay(date));

// // 3
// let date = new Date(2012, 0, 3);
//
// function getLocalDay(value) {
//   let day = value.getDay();
//
//   if (day === 0) day = 7;
//
//   return day;
//
// }
//
// console.log( getLocalDay(date) );

// // 4
// let date = new Date(2015, 0, 2);
//
// function getDateAgo(date, ago) {
//   let dateCopy = new Date(date);
//
//   dateCopy.setDate(date.getDate() - ago);
//   return dateCopy.getDate();
// }
//
// // console.log(getDateAgo(date, 1));
// // console.log(getDateAgo(date, 2));
// console.log(getDateAgo(date, 365));

// // 5
// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1, 0);
//   return date.getDate();
// }
//
// console.log(getLastDayOfMonth(2012, 1)); // 29

// // 6
// // v1
// // function getSecondsToday() {
// //   let now = new Date();
// //   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// //
// //   let diff = now - today;
// //   console.log(`${diff} ms`);
// //   return `${Math.round(diff / 1000)} sec`;
// // }
// // console.log(getSecondsToday());
// //
// // v2
// function getSecondsToday() {
//   let date = new Date();
//   return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
// }
//
// console.log(getSecondsToday());

// // 7
// // v1
// // function getSecondsToTomorrow() {
// //   let now = new Date();
// //   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// //   let fullDay = 86400000;
// //   let diff = now - today;
// //
// //   return Math.round((fullDay - diff) / 1000);
// // }
// //
// // v2
// function getSecondsToTomorrow() {
//   let now = new Date();
//   let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
//   let diff = tomorrow - now;
//
//   return Math.round(diff / 1000);
// }
//
// console.log(getSecondsToTomorrow());

// function formatDate(date) {
//   let diff = new Date() - date,
//       sec = Math.floor(diff / 1000),
//       min = Math.floor(diff / 60000);
//
//   if (diff < 1000) return `just now!`;
//   if (sec < 60) return `${sec} sec ago`;
//   if (min < 60) return `${min} min ago`;
//
//   let d = date;
//   d = [
//     '0' + d.getDate(),
//     '0' + (d.getMonth() + 1),
//     '' + d.getFullYear(),
//     '0' + d.getHours(),
//     '0' + d.getMinutes()
//   ].map(component => component.slice(-2));
//   console.log(d);
//
//   return `${d.slice(0, 3).join('.')} ${d.slice(3).join(':')}`;
// }
//
// // console.log(formatDate(new Date(new Date - 1))); // just now
// // console.log( formatDate(new Date(new Date - 30 * 1000)) ); // 30 sec ago
// // console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // 5min ago
// console.log( formatDate(new Date(new Date - 86400 * 1000)) ); // a day ago

//
// LUXON date-time library
//

// var DateTime = luxon.DateTime;
// var Duration = luxon.Duration;
// var Interval = luxon.Interval;
// var dur = Duration.fromObject({ hours: 2, minutes: 7 });
// console.log(DateTime);

// var dt = DateTime.local(2017, 5, 15, 8, 30);
// console.log(dt);
// dt = dt = DateTime.fromObject({day: 22, hour: 12, zone: 'America/Los_Angeles', numberingSystem: 'beng'});
// console.log(dt);

// console.log(DateTime.fromISO("2017-05-15"));
// console.log(DateTime.fromISO("2017-05-15T08:30:00"));

// console.log(DateTime.now().toString());

// let dtNow = DateTime.now();
// console.log(dt.year);
// console.log(dt.month);
// console.log(dt.day);
// console.log(dt.hour);
// console.log(dt.minute);
// console.log(dt.weekday);
// console.log(dt.zoneName);
// console.log(dt.offset);
// console.log(dt.daysInMonth);

// console.log(dt.toLocaleString());
// console.log(dt.toLocaleString(DateTime.DATETIME_MED));
// console.log(dt.toISO());

// console.log(Intl);

// console.log(dtNow);
// console.log(dtNow.plus(dur));

// let later = DateTime.local(2020, 10, 12);

// console.log(dtNow.toString());
// console.log(later.toString());

// let i = Interval.fromDateTimes(dtNow, later);
// console.log(i);


// Date
// let now = new Date();
// let startDate = new Date(0);
// let stringDate = new Date('2020-5-20');

// console.log(startDate);
// console.log(now);
// console.log(now.getTime());

// let date = new Date(2020, 5, 25, 2, 34, 45);
// console.log(date);
// console.log(
//   date.getDate(),
//   date.getMonth(),
//   date.getFullYear(),
//   date.getHours(),
//   date.getMinutes(),
//   date.getDay(),
//   date.getUTCDate(),
// );
// console.log(date.getTimezoneOffset());

// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());
// console.log(date.toDateString());

// console.log(date);
// let isoStr = date.toISOString();
// console.log(isoStr);
// console.log(Date.parse(isoStr));
// console.log(Date.parse('2020-05-20T23:44:55.000Z'));

// let wrongDate = new Date(2013, 0, 32);
// console.log(wrongDate);

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = new Date();

// console.log(`Finished: ${end - start}ms`);

// console.log((123000000).toLocaleString());

// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }
// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }
// function bench(fn) {
//   let date1 = new Date(0);
//   let date2 = new Date();
//   let start = Date.now();

//   for(let i = 0; i < 1000000; i++) fn(date1, date2);

//   return Date.now() - start;
// }

// let time1 = 0;
// let time2 = 0;

// for (let i = 0; i < 10; i++) {
//   time1 += bench(diffSubtract);
//   time2 += bench(diffGetTime);
// }

// console.log(`Time diffSubtract: ${time1}ms`);
// console.log(`Time diffSubtract: ${time2}ms`);

// let ts = Date.parse('2012-01-26T13:51:52.417-07:00');
// console.log(ts);
// console.log(new Date(ts));

// // 1
// console.log(new Date(2020, 1, 20, 3, 12));

// 2
// let date = new Date(2012, 0, 3);

// function getWeekDay(date) {
//   const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',];

//   return days[date.getDay()];
// }
// console.log(getWeekDay(date));

// 3
// let date = new Date(2012, 0, 3);
// function getLocalDay(date) {
//   let day = date.getDay();

//   if (day === 0) now = 7;

//   return day;
// }
// console.log(getLocalDay(date));

// // 4
// let date = new Date(2015, 0, 2);

// function getDateAgo(date, days) {
//   let cloneDate = new Date(date);
//   cloneDate.setDate(date.getDate() - days)
//   return cloneDate.getDate();
// }
// console.log(getDateAgo(date, 1)); // 1jan2015

// // 5
// function getLastDayOfMonth(year, month) {
//   return new Date(year, month + 1, 0).getDate();
// }
// console.log(getLastDayOfMonth(2012, 1));

// 6
// v1
// function getSecondsToday() {
//   let now = new Date();
//   let today = new Date(
//     now.getFullYear(), now.getMonth(), now.getDate()
//   );
//   let diff = now - today;

//   return Math.round(diff / 1000);
// }
// console.log(getSecondsToday());
// v2
// function getSecondsToday() {
//   let date = new Date();
// 
//   return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
// }
// console.log(getSecondsToday());

// // 7
// function getSecondsToTomorrow() {
//   let now = new Date();
//   let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
//   let diff = tomorrow - now;

//   return Math.round(diff / 1000);
// }
// console.log(getSecondsToTomorrow());

// How much time ago was an act
// // 8
// function formatDate(date) {
//   let diff = new Date() - date;
//   if (diff < 1000) return 'just now';
//
//   let sec = Math.floor(diff / 1000);
//   if (sec < 60) return `${sec} sec ago`;
//
//   let min = Math.floor(diff / 60000);
//   if (min < 60) return `${min} min ago`;
//
//   // return date.toLocaleString();
//   let d = date;
//   d = [
//     '0' + d.getDate(),
//     '0' + (d.getMonth() + 1),
//     '' + d.getFullYear(),
//     '0' + d.getHours(),
//     '0' + d.getMinutes(),
//   ].map(el => el.slice(-2));
//
//   return `${d.slice(0, 3).join('.')} ${d.slice(3).join(':')}`
// }
//
// console.log(formatDate(new Date(new Date - 1))); // 'just now'
// console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
// console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// console.log( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата вроде 31.12.2016, 20:00

//

// console.log(new Date);
// console.log(new Date(new Date - 1000));

// let date = new Date();
// let jsonDate = date.toJSON()
// console.log(new Date(Date.parse(date.toJSON())));


