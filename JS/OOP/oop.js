// const s1 = "Hello";
// console.log(typeof s1);
// const s2 = new String('Hello');
// console.log(typeof s2);
// console.log(navigator.appVersion);
//Object Literal
// const book1 = {
//   title: "Book One",
//   author: "John Doe",
//   year: 2013,
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}.`;
//   },
// };
// console.log(book1.getSummary());
// console.log(Object.values(book1));
// console.log(Object.keys(book1));
//Constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }
// // //GetSUmmary
// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}.`;
// };

//Instantiate an object
// const book2 = new Book("Book Two", "Moby Dick", 1990);
// const book2 = new Book();

// console.log(book2);
// book2.revise(2024);
// console.log(book2, "revised");

//Inheritance

// //Magazine
// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);
//   this.month = month;
// }
// // inherit prototype
// Magazine.prototype = Object.create(Book.prototype);

// //Instantiate magazine Object
// const mag1 = new Magazine("Mag One", "Clown Killer", 1998, "January");

// // Use magazine constructor
// Magazine.prototype.constructor = Magazine;

// console.log(mag1);

//Object of Protos
// const bookProtos = {
//   getAge: function () {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old.`;
//   },
//   //Revise/Change year
//   revise(new_year) {
//     this.year = new_year;
//     this.revised = true;
//   },
//   //getSummary
//   getSummary() {
//     return `${this.title} was written by ${this.author} in ${this.year}.`;
//   },
// };

//Create Object
// const book1 = Object.create(bookProtos);
// book1.title = 'Atomic Habits';
// book1.author = 'John Doe';
// book1.year = 3480;

// const book1 = Object.create(bookProtos, {
//     title: {value: "Book 1"},
//     author: {value: 'Ben Carson'},
//     year: {value: 1921}
// });
// console.log(book1);

// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }

//   getAge() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old.`;
//   }

//   revise(new_year) {
//     this.year = new_year;
//     this.revised = true;
//   }

//   getSummary() {
//     return `${this.title} was written by ${this.author} in ${this.year}.`;
//   }

//   static topBookStore(){
//       return 'Yaba Market';
//   }
// }

// const book1 = new Book('Champions for God', 'Children', 2019);

//subclasses
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  }
}

class Magazine extends Book {
    constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
    }
}

//Instantiate Magazine
const mag1 = new Magazine("Tanzol", "Smigo", 9001, "July");

console.log(mag1.getSummary());

//Solid Principles of OO design
// 1. Solid Responsibilty
// 2. Open-Closed: open for extension, closed for modification.
// 3. Liskov Substitution: every subclasss should be substitutable for its parent class.
// 4. Interface Segregation 
// 5. Dependency Inversion: objects must depend on abstractions rather than concretions. This ensures that specific implementations of the dependencies in your program can be easily interchanged.