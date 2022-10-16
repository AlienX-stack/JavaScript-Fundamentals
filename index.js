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
