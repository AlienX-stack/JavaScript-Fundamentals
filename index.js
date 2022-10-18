// console.log("Hello World");

// let name = "John";

// console.log(name);

// cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

// let firstName = "John",
// lastName = "Snow";

// Constants
// Cannot be reassigned
// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// Primitive/Value Types
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol

// let name = "John"; // String Literal
// let age = 30; // Number Literal
// let isApproved = true; // Boolean Literal
// let firstName = undefined; // Undefined
// let selectedColor = null; // Null

// Reference Types
// 1. Object
// 2. Array
// 3. Function

// let person = {
//   name: "John",
//   age: 30,
// };

// // Change the value of the object
// // // 1. Dot Notation
// person.name = "Mary";

// // // 2. Bracket Notation
// person["name"] = "Mar";

// console.log(person);

// Arrays

// let selectedColors = ["red", "blue"];
// selectedColors[2] = 1;
// console.log(selectedColors);

// Functions

// name is a parameter of the greet function
// function greet(name) {
//   console.log("Hello " + name);
// }

// // John is an argument to the greet function
// greet("John");

// Arithmetic Operators

// Increment (++)
// let x = 10;
// console.log(x++);

// Strict Equality (Type + Value)
// console.log(1 === 1);
// console.log("1" === 1);

// // Lose Equality (Value)
// console.log(1 == 1);
// console.log("1" == 1);

// // Ternary Operator
// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

// let points = 110;
// let type = points > 100 ? "gold" : "silver";
// console.log(type);

// Logical Operators with Non-Boolean

// Logical AND (&&)
// Returns TRUE if both operands are TRUE
// console.log(true && true);

// let highIncome = true;
// let goodCreditScore = true;

// let eligibleForLoan = highIncome && goodCreditScore;
// console.log("Eligible", eligibleForLoan);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE

// Logical NOT (!)
// Returns TRUE if operand is FALSE
// let applicationRefused = !eligibleForLoan;
// console.log(applicationRefused);

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// let userColor = undefined;
// let defaultColor = "blue";
// let currentColor = userColor || defaultColor;
// console.log(currentColor);

// Bitwise Operators
// 8 bits = 1 byte
// 1 = 00000001
// 2 = 00000010
// R| = 00000011
// R& = 00000000

// console.log(1 | 2); // Bitwise OR
// console.log(1 & 2); // Bitwise AND

// Access Control System
// Read, Write, Execute
// 00000100
// 00000010
// 00000001

// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;

// let myPermission = 0;

// myPermission = myPermission | writePermission;
// console.log(myPermission);

// let message = myPermission & readPermission ? "yes" : "no";

// console.log(message);

// Operators Precedence

// let x = (2 + 3) * 4;

// let a = "red";
// let b = "blue";

// let c = a;
// a = b;
// b = c;

// console.log(`a: ${a}, b: ${b}, c: ${c}`);

// // if ...  else

// let hour = 10;

// if (hour >= 6 && hour < 12) console.log("Good Morning");
// else if (hour >= 12 && hour < 18) console.log("Good Afternoon");
// else console.log("Good Evening");

// // Switch

// let role = "guest";

// switch (role) {
//   case "guest":
//     console.log("Guest User");
//     break;
//   case "moderator":
//     console.log("Moderator User");
//     break;
//   default:
//     console.log("Unknown User");
// }

// // For Loop

// for (let i = 0; i < 5; i++) {
//   console.log("Hello World", i);
// }

// // While Loop

// let i = 0;

// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

// // // Do While Loop

// let j = 0;

// do {
//   if (j % 2 !== 0) console.log(j);
//   j++;
// } while (j <= 5);

//// for ... in suitable for objects
// const person = {
//   name: "John",
//   age: 30,
// };

// for (let key in person) console.log(key, person[key]);

// const colors = ["red", "green", "blue"];
// for (let index in colors) console.log(index, colors[index]);

// // for ... of suitable for arrays

// for (let color of colors) console.log(color);

// // Break and Continue
// let i = 0;
// while (i <= 10) {
//   // console.log(i);
//   // if (i === 5) break;
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

//1. Max of Two Numbers

// function maxTwoNumbers(a, b) {
//   return a > b ? a : b;
// }

// console.log(maxTwoNumbers(74, 68));

//2. Landscape or Portrait
// function isLandscape(width, height) {
//   return width > height ? "Landscape" : "Portrait";
// }

// console.log(isLandscape(500, 600));

//3. FizzBuzz
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not Divisible by 3 or 5 => input
// Not a number => 'Not a number'

// function fizzBuzz(input) {
//   if (typeof input !== "number") return NaN;
//   if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
//   if (input % 3 === 0) return "Fizz";
//   if (input % 5 === 0) return "Buzz";
//   return input;
// }

// console.log(fizzBuzz("22"));

//4. Demerit Points

// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed < speedLimit + kmPerPoint) {
//     console.log("Ok");
//     return;
//   }
//   const points = Math.floor((speed - speedLimit) / kmPerPoint);
//   if (points >= 12) console.log("License suspened");
//   else console.log("Points", points);
// }

// checkSpeed(180);

// 5. Odd and even numbers

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) console.log(i, i % 2 === 0 ? "EVEN" : "ODD");
// }

// showNumbers(10);

// 6. Count Truthy

// function countTruthy(array) {
//   let count = 0;
//   for (let element of array) if (element) count += 1;
//   console.log("Count of truthy values", count);
// }

// countTruthy([0, null, undefined, 2, 3, ""]);

// 7. String Properties

// const movie = {
//   title: "a",
//   releaseYear: 2018,
//   rating: 4.5,
//   director: "b",
// };

// showProperties(movie);

// function showProperties(movie) {
//   for (let value in movie)
//     if (typeof movie[value] !== "number") console.log(value, movie[value]);
// }

// 8. Multiples of 3 and 5

// function sumDivBy3_5(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++)
//     i % 3 === 0 || i % 5 === 0 ? (sum += i) : sum;

//   return sum;
// }

// console.log(sumDivBy3_5(10));

// 9. Average
// const marks = [80, 80, 50];

// function calculateAverage(array) {
//   let sum = 0;
//   for (let element of array) sum += element;
//   const average = Math.floor(sum / array.length);
//   return average;
// }
// function calculateGrade(marks) {
//   const averageMarks = calculateAverage(marks);

//   if (averageMarks < 60) return "F";
//   if (averageMarks < 70) return "D";
//   if (averageMarks < 80) return "C";
//   if (averageMarks < 90) return "B";
//   return "A";
// }

// console.log(calculateGrade(marks));

// 10. Stars

// function showStars(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let pattern = "";
//     for (let j = 0; j < i; j++) pattern += "*";
//     console.log(pattern);
//   }
// }

// showStars(10);

// 11. Show Primes

// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++) {
//     let count = 0;
//     for (let j = 2; j <= number; j++) {
//       if (number % j === 0) count += 1;
//     }
//     if (count === 1) console.log(number);
//   }
// }

// showPrimes(20);

// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++)
//     if (isPrime(number)) console.log(number);
// }

// function isPrime(number) {
//   for (let factor = 2; factor < number; factor++)
//     if (number % factor === 0) return false;

//   return true;
// }

// // Objects
// OOP (Object Oriented Programming)

// 2. Factory Functions
// function createCircle(radius, location) {
//   return {
//     radius,
//     // location: location,
//     // isVisible: true,
//     // draw: function () {
//     //   console.log("draw");
//     // },
//     draw() {
//       console.log("draw");
//     },
//   };
//   //   return circle;
// }

// const circle1 = createCircle(1);
// console.log(circle1);

// 3. Constructor Function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(1);
// circle.color = "yellow";
// delete circle.draw;

// console.log(circle);

//// Constructor property

// let x = {};
// // let x = new Object();

// // Functions are objects
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// // the first argument identifies the target of this
// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);

// // const Circle1 = new Function(
// //   "radius",
// //   `this.radius = radius;
// //   this.draw = function () {
// //     console.log("draw");
// //   };`
// // );

// // const circle = new Circle1(1);

// const another = new Circle(1);

// // Value vs Reference Types

// Value Types                                    Reference Types

// 1. Number                                     1. Object
// 2. String                                      2. Function
// 3. Boolean                                    3. Array
// 4. Symbol
// 5. undefined
// 6. null

// Here the value is copied

// let x = 10;
// let y = x;

// x = 20;

// let x = { value: 10 };
// let y = x;

// x.value = 20;

////////////////
// let number = 10;

// function increase(number) {
//   number++;
// }
// //number is passed by value
// increase(number);
// console.log(number); output:10

//////////////////
// let obj = { value: 10 };

// function increase(obj) {
//   obj.value++;
// }
// //// obj is passed by reference
// increase(obj);
// console.log(obj); output:11

//// Enumerating an object
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// for (let key in circle) {
//   console.log(key, circle[key]);
// }

// for (let key of Object.keys(circle)) console.log(key);
// for (let entry of Object.entries(circle)) console.log(entry);

// if ("radius" in circle) console.log("yes");

// // Cloning an Object

// Method 1
// const another = {};
// for (let key in circle) another[key] = circle[key];

// Method 2
// const another = Object.assign({}, circle);

// console.log(another);

// Method 3
// const another = { ...circle };
// console.log(another);

//// Garbage collection
// It is handled automatically by JavaScript

//// String

// //String primitive
// const message = "This is my first message";

// // String object
// const another = new String("hi");

// // Template literals
// const message = "This is my\n" + "first message";
// const another = `Hi John,

// Thank you for joining my mailing list.

// Regards,
// Sandip`;

// console.log(another);

// // Date
// const now = new Date();
// const date1 = new Date("May 11 2018 09:00");
// const date2 = new Date(2018, 5, 30, 9);

// Exercise 1 --> Address Object

// street
// city
// zipcode
// showAddress(address)

// let address = {
//   street: "a",
//   city: "b",
//   zipCode: "754138",
// };

// function showAddress(address) {
//   //   for (let value of Object.entries(address)) console.log(value);
//   for (let key in address) console.log(key, address[key]);
// }

// showAddress(address);

// // Ex 2 --> Factory and Constructor function

// function factoryAddress(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode,
//   };
// }

// let factAddress = factoryAddress("a", "b", "c");
// console.log(factAddress);

// Constructor function

// function factoryConstructor(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }

//// Ex3 --> Object Equality

// let constAddress1 = new factoryConstructor("a", "b", "c");
// let constAddress2 = new factoryConstructor("a", "b", "c");

// function areEqual(address1, address2) {
//   return address1 === address2;
// }

// function areSame(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode
//   );
// }

// console.log(areEqual(constAddress1, constAddress2));
// console.log(areSame(constAddress1, constAddress2));

// // Ex 4 --> Blog Post Object

// let post = {
//   title: "Today is Sunday",
//   body: "Today is a holiday",
//   author: "SpectralCone",
//   views: 202,
//   comments: [
//     {
//       author: "Jon Snow",
//       body: "Winter is coming",
//     },
//     {
//       author: "Egrite",
//       body: "You know nothing Jon Snow!",
//     },
//   ],
//   isLive: true,
// };

// // Ex 5 --> Constructor Functions
// console.log(post);
// function postConstructor(title, body, author) {
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.views = 0;
//   this.comments = [];
//   this.isLive = false;
// }

// let post = new postConstructor("a", "b", "c");
// console.log(post);

// // Ex 6 --> Price Range Objects
// let priceRanges = [
//   {
//     label: "$",
//     tooltip: "Inexpensive",
//     minPerPerson: 0,
//     maxPerPerson: 10,
//   },
//   {
//     label: "$$",
//     tooltip: "Moderate",
//     minPerPerson: 11,
//     maxPerPerson: 100,
//   },
//   {
//     label: "$$$",
//     tooltip: "Expensive",
//     minPerPerson: 101,
//     maxPerPerson: 1000,
//   },
// ];

/////////////////////////////////////////////////////////
// Arrays

// // Adding an element

// const numbers = [1, 2, 3, 4, 1, 5];

// //End
// numbers.push(5, 6);
// //Beginning
// numbers.unshift(1, 2);
// //Middle
// numbers.splice(1, 0, "a", "b");

// console.log(numbers);

// // Finding elements (primitive)
// console.log(numbers.indexOf("a"));
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.indexOf(1) !== -1);
// console.log(numbers.includes(1));

// // Finding elements (reference types)

// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];

// courses.includes({ id: 1, name: "a" }); // false because two different references

// const found = courses.find((course) => course.name === "a");
// const foundIndex = courses.findIndex((course) => course.name === "a");
// console.log(found);

//// Removing elements from an array

// End
// const last = numbers.pop();

// Beginning
// const first = numbers.shift();
// console.log(first);
// Middle
// numbers.splice(2, 2);
// console.log(numbers);

// // Emptying an array
// let numbers = [1, 2, 3, 4];
// let another = numbers;

// Solution 1
// numbers = []

// Solution 2
// numbers.length = 0;

// Solution 3
// numbers.splice(0, numbers.length);

// Solution 4 (Not recommended)
// while (numbers.length > 0) numbers.pop();

// console.log(numbers);
// console.log(another);

// // Combining and slicing arrays
// const first = [{ id: 1 }];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// first[0].id = 10;

// const slice = combined.slice(2, 4);
// console.log(combined);
// console.log(slice);

// // The Spread Operator

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combined = first.concat(second);
// const combined = [...first, ...second];

// const copy = combined.slice();
// const copy = [...combined];

// // Iterating  an array
// const numbers = [1, 2, 3];

// for (let number of numbers) console.log(number);

// numbers.forEach((number, index) => console.log(index, number));

// // Joining Arrays

// const numbers = [1, 2, 3];
// const joined = numbers.join(",");
// console.log(joined);

// const message = "This is my first message";
// const parts = message.split(" ");
// console.log(parts);
// const combined = parts.join("-");
// console.log(combined);

// // Sorting numbers
// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" },
];

courses.sort(function (a, b) {
  // a<b => -1
  // a>b => 1
  // a===b=>0
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  console.log(nameA, nameB);
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

// console.log(courses);

/// Testing the elements of an array

// every() => every element matches the criteria
// const numbers = [1, -1, 2, 3];

// const allPositive = numbers.every(function (value) {
//   return value >= 0;
// });

// console.log(allPositive);

// some() => atleast some elements matches the criteria

// const atLeastOnePositive = numbers.some(function (value) {
//   return value >= 0;
// });

// console.log(atLeastOnePositive);

///////////
// // Filtering an array
// const filtered = numbers.filter((value) => value >= 0);

// console.log(filtered);

// Map

// const items = filtered.map((n) => "<li>" + n + "</li>");
// console.log(items);

// const html = items.join();
// console.log(html);

// const items = filtered.map((n) => {
//   console.log(n);
// });

// const items = numbers
//   .filter((n) => n >= 0)
//   .map((n) => ({ value: n }))
//   .filter((obj) => obj.value > 1)
//   .map((obj) => obj.value);
// console.log(items);

/**
 * * Reduce
 */

// let sum = 0;
// for (let n of numbers) sum += n;

// console.log(sum);

// const sumReduce = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum);

/**
 * ? Exercise 1 : Array from Range
 */

// const arrayFromRange = (min, max) => {
//   const output = [];
//   for (let i = min; i <= max; i++) output.push(i);
//   return output;
// };
// const numbers = arrayFromRange(-10, -4);
// console.log(numbers);

/**
 * ! Exercise 2 : Includes
 */

// const numbers = [1, 2, 3, 4];

// const includes = (array, searchElement) => {
//   for (let i of array) if (i === searchElement) return true;
//   return false;
// };

// const result = includes(numbers, 3);
// console.log(result);

/**
 * Todo Exercise 3: Except
 */

// const numbers = [1, 2, 3, 4, 1, 1];

// const except = (array, excluded) => {
//   let output = [];
//   for (let i of array) if (!excluded.includes(i)) output.push(i);
//   return output;
// };

// const output = except(numbers, [1, 2]);
// console.log(output);

/**
 * ! Exercise 4: Moving an element
 */

// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 1, -4);

// function move(array, index, offset) {
//   const position = index + offset;

//   if (position >= array.length || position <= array.length) {
//     console.error("Invalid offset");
//     return;
//   }
//   const output = [...array];
//   const element = output.splice(index, 1)[0];
//   output.splice(position, 0, element);
//   return output;
// }

// console.log(output);

/**
 * * Exercise 5 : Count occurrences
 */

// const numbers = [1, 2, 3, 4, 1];

// const countOccurrences = (array, searchElement) => {
//   const count = array.reduce((acc, cur) => {
//     const num = cur === searchElement ? 1 : 0;
//     console.log(acc, cur, searchElement);
//     return acc + num;
//   }, 0);

//   return count;
// };

// const count = countOccurrences(numbers, 1);
// console.log(count);

/**
 * ? Exercise 6 : Get Max
 */

// const numbers = [1, 2, 3, 5, 4, 40];

// const getMax = (array) => {
//   if (array.length === 0) return undefined;
//   return array.reduce((acc, cur) => (cur > acc ? (acc = cur) : acc));
// };

// console.log(getMax(numbers));

/**
 * ! Exercise 7 : Movies
 */

const movies = [
  { title: "b", year: 2018, rating: 4.2 },
  { title: "a", year: 2018, rating: 4.5 },
  { title: "e", year: 2018, rating: 4.1 },
  { title: "c", year: 2022, rating: 3.5 },
  { title: "d", year: 2019, rating: 3 },
];

const movieRatings = (movies) => {
  return movies
    .filter((movie) => movie.rating > 4 && movie.year === 2018)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map((m) => m.title);
};

console.log(movieRatings(movies));
