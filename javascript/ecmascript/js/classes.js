// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
// };

// class Animal {
//
//     static type = 'ANIMAL';
//
//     constructor(options) {
//         this.name = options.name;
//         this.age = options.age;
//         this.hasTail = options.hasTail;
//     }
//
//     voice() {
//         console.log('I am Animal!');
//     }
// }
//
// // const animal = new Animal({
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true,
// // });
//
// class Cat extends Animal {
//     static type = 'CAT';
//
//     constructor(options) {
//         super(options);
//         this.color = options.color;
//     }
//
//     voice() {
//         super.voice();
//         console.log('I am cat');
//     }
//
//     get ageInfo() {
//         return this.age * 7;
//     }
//
//     set ageInfo(newAge) {
//         this.age = newAge;
//     }
// }
//
// cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black',
// });

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector);
//     }
//
//     hide() {
//         this.$el.style.display = 'none';  //in general $el is a variable with the DOM node
//     }
//
//     show() {
//         this.$el.style.display = 'block';
//     }
// }
//
// class Box extends Component {
//     constructor(options) {
//         super(options.selector);
//         this.$el.style.width = this.$el.style.height = options.size + 'px';
//         this.$el.style.background = options.color;
//     }
// }
//
// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'brown',
// });
//
// const box2 = new Box({
//     selector: '#box2',
//     size: 120,
//     color: 'darkgreen',
// });
//
// class Circle extends Box {
//     constructor(options) {
//         super(options);
//         this.$el.style.borderRadius = '50%';
//     }
// }
//
// const c = new Circle({
//     selector: '#circle1',
//     size: 90,
//     color: 'darkorange',
// });
//
// console.log('Boxes:', box1, box2);
// console.log('Circles:', c);

// // Classes - es5 syntax
// const Animal = function(options) {
//     this.name = options.name;
//     this.color = options.color;
//
//     this.voice = function () {
//         console.log('Base voice from ', this.name)
//     }
// }
//
// const dog = new Animal({ name: "Rex", color: "#fff" });
//
// // console.log(dog)
// dog.voice()

// // Classes - es6 syntax
// class Animal {
//   constructor(options) {
//     this.name = options.name
//     this.color = options.color
//   }
//
//   voice() {
//     console.log('Base voice from', this.name)
//   }
// }
//
// const dog = new Animal({ name: 'Rex', color: 'white' })
//
// // dog.voice()
// // console.log(dog);
//
// class Cat extends Animal {
//   constructor(options) {
//     super(options)
//
//     this.hasTail = options.hasTail
//     this.type = 'cat'
//   }
//
//   voice() {
//     super.voice()
//     console.log(this.name, 'says "meow"!')
//   }
// }
//
// const cat = new Cat({ name: 'Ashton', color: '#000', hasTail: true, })
//
// // console.log(cat);
// // console.log(cat.voice());
//
// // Examples
// Object.prototype.print = function () {
//   console.log(`I am object`, this)
// }
//
// // cat.print()
//
// Array.prototype.myAndLog = function () {
//   console.log('Array to map', this)
//   return this.map.apply(this, arguments)
// }
//
// // console.log([1, 2, 3, 4,].myAndLog(x => x ** 2))
//
// String.prototype.toTag = function (tagName) {
//   return `<${tagName}>${this}</${tagName}>`
// }
//
// // console.log('eminem'.toTag('strong'))
// // console.log('eminem'.toTag('em'))
//
// Number.prototype.toBigInt = function () {
//   return BigInt(this)
// }
//
// const number = 42
// console.log(number.toBigInt())

// const animal = {
//   name: 'Animal',
//   age: 5,
//   hasTail: true,
// }

// class Animal {
//   static type = 'ANIMAL'
//
//   constructor(options) {
//     this.name = options.name
//     this.age = options.age
//     this.hasTail = options.hasTail
//   }
//
//   voice() {
//     console.log('I am animal!')
//   }
// }
//
// const animal = new Animal({
//   name: 'Animal',
//   age: 5,
//   hasTail: true,
// })
//
// class Cat extends Animal {
//   static type = 'CAT'
//
//   constructor(options) {
//     super(options); // from Animal, parent
//     this.color = options.color
//   }
//
//   voice() {
//     console.log('I am', this.name)
//   }
//
//   get ageInfo() {
//     return this.age * 7
//   }
//
//   set ageInfo(newAge) {
//     this.age = newAge
//   }
// }
//
// const cat = new Cat({
//   name: 'Cat',
//   age: 7,
//   hasTail: true,
//
//   color: 'black',
// })
//
// cat.ageInfo = 8
//
// console.log(cat.ageInfo) // Cat.ageInfo * cat.age

// class Component {
//   constructor(selector) {
//     this.$el = document.querySelector(selector)
//   }
//
//   hide() {
//     this.$el.style.display = 'none'
//   }
//
//   show() {
//     this.$el.style.display = 'block'
//   }
// }
//
// class Box extends Component {
//   constructor(options) {
//     super(options.selector)
//
//     this.$el.style.width = this.$el.style.height = options.size + 'px'
//     this.$el.style.background = options.background
//   }
// }
//
// const out1 = new Box({
//   selector: '#out1',
//   size: 100,
//   background: 'lightgreen'
// })
//
// const out2 = new Box({
//   selector: '#out2',
//   size: 100,
//   background: 'violet'
// })
//
// // out.hide()
//
// class Circle extends Box {
//   constructor(options) {
//     super(options)
//
//     this.$el.style.borderRadius = options.borderRadius + '%'
//   }
// }
//
// const circle = new Circle({
//   selector: '#out3',
//   size: 100,
//   borderRadius: 50,
//   background: 'cyan'
// })

// // class Book {
// let Book = class BookClass {
//   pages = 123
//
//   constructor(title, author, price) {
//     // console.log('Creating the book object')
//     this.title = title
//     this.author = author
//     this.price = `$${price}`
//   }
//
//   getTitle() {
//     return this.title
//   }
//
//   setPrice(cost) {
//     this.price = `$${cost}`
//   }
//
//   get titleBook() {
//     return this.title
//   }
//
//   set titleBook(value) {
//     this.title = value
//   }
// }
//
// let book1 = new Book('Book of Life', 'A. Brandon', 40)
//
// // book1.setPrice(50)
//
// // console.log(book1.titleBook);
// // book1.titleBook = 'New Book Name'
// // console.log(book1.titleBook);
//
// console.log(book1);

// // Dynamic creating classes
// function createFruit(name, weight) {
//   return class {
//     constructor() {
//       this.name = name
//       this.weight = weight
//     }
//
//     showInfo() {
//       console.log(this.name, this.weight)
//     }
//   }
// }
//
// let fruit1 = createFruit('Apple', 150)
// let apple = new fruit1()
// apple.showInfo()
//
// let fruit2 = createFruit('Cherry', 20)
// let cherry = new fruit2
// cherry.showInfo()
