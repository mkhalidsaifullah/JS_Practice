console.log("this is git change checking");
console.log("This is my practice on JS");
var myName = "Khalid";
var myName1 = "Saifullah";
console.log(myName + myName1);
console.log(myName, myName1);
console.log(`This is my name= ${myName} ${myName1}`);
let name = "my name is khalid"; //for declearing simple variable
const name1 = "my Name is muhammad khalid saifullah";
console.log(`This is my name= ${name} `); //for declearing const variable
const age = 20;
const age1 = "20";
if (age < 20) {
  console.log("Age is less than 20");
} else console.log("Age is gerater than 20");

age < 20 && console.log("age is less than 20");
age < 20
  ? console.log("you age is less than 20")
  : console.log("your age is greater than 20");
if (age === age1) {
  console.log("both ages equal");
} else console.log("both ages are not equal");
console.log("hello! world");
// // before ES6
// var myVar = "var keyword"; //use ni krna

// //after ES6
// const myConst = "const keyword"; //pehly use krna hy
// let myLet = "let keyword"; // agr value change type ki hy to use krna hy
// console.log(myLet);

// // myConst = "new value";
// console.log(myConst);

// myLet = "new value";
// console.log(myLet);

// let age = 20;

// if (age > 18) {
//   console.log("you are eligible");
//   //   alert("you are eligible");
// }

// age > 18 && console.log("you are eligible");

// age = 15;

// if (age > 18) {
//   console.log("you are eligible");
// } else {
//   console.log("you are not authorized");
// }

// age > 18
//   ? console.log("you are eligible")
//   : console.log("you are not authorized");

// const myNum = 2 ** 4;
// console.log(myNum);

// let num1 = 2;
// const num2 = "2";
// console.log(typeof num1);
// console.log(typeof num2);

// if (num1 === num2) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }
// let num3 = 3;
// num1 *= num3;
// console.log(num1);

// const myName = "Hamza Masood";
// const myAge = 36;
// const myFloat = 3.25;
// const myBoolean = true;

// if (typeof myAge === "number") {
//   console.log("age is valid");
// } else {
//   console.log("age is invalid");
// }

// const myArr = [myName, myAge];
// console.log(myArr);

// const myObj = {
//   name: "Hamza Masood",
//   age: 36,
// };

// console.log(myObj);
// console.log(myObj.name);
// console.log(myObj.age);

// for (let i = 0; i < 10; i++) {
//   console.log(`print i ${i}`);
// }

// let j = 0;
// while (j < 10) {
//   console.log(`print j ${j}`);
//   j++;
// }

const foodItems = ["pizza", "samosa", "cock", "pakory", "cake"];

foodItems.forEach((food) => {
  console.log(`my item is ${food}`);
});

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myNums.forEach((num) => {
  console.log(`new num is ${num * 2}`);
});

// for (let i = 0; i < foodItems.length; i++) {
//   console.log(foodItems[i]);
// }

// let j = foodItems.length - 1;
// while (j >= 0) {
//   console.log(foodItems[j]);
//   j--;
// }
