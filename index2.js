myFun1("hamza");
myFun1("khalid");

const person = {
  name: "khalid",
  age: 22,
  class: "BSSE",
  "joing-date": "24-6-21",
};

console.log(person);
person["joing-date"] = "22-7-21";
person.name = "hamza";
console.log(person);

// classical/old style
function myFun1(user) {
  console.log(`hello how are you ${user}`);
}

// new style
const myFun2 = function (user) {
  console.log(`hello how are you ${user}`);
};

//arrow function
const myFun3 = () => {
  console.log(`this is arrow func `);
};

const myFun4 = (user) => {
  return {
    name: "khalid",
    age: 22,
  };
};

myFun3();
myFun2("rufaida");
myFun4("masood");
myFun5("Khalid");

// const square = (number) => {
//   return number * number;
// };

const square = (number) => number * number;

let num = square(2);
console.log(num);
