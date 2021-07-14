// const myName = document.getElementById("my-name");
// const myButton = document.getElementById("my-button");

const myName1 = document.querySelector(".myname");
const myButton1 = document.querySelector(".mybutton");

console.log(myName1);
console.log(myButton1);

// const myFunc = (name1) => {
//   naming = name1.value.trim();
//   naming.length > 0 && console.log(naming);
//   naming.length < 1 && console.log("empty");
//   name1.value = "";
//   // if (name1.value.length > 0) {
//   //   console.log(name1.value);
//   // } else {
//   //   console.log("emty");
//   // }
// };

myButton1.addEventListener("click", () => {
  naming = myName1.value.trim();
  naming.length > 0 && console.log(naming);
  naming.length < 1 && console.log("empty");
  myName1.value = "";
});

myName1.addEventListener("keyup", () => {
  console.log(myName1.value);
});

// const myArray = [
//   1, 0, 100, 10, 5, -1, 100, 5, 0, 200, 7, 3445, 26, 26, 26, 100, 0, 2, -1, -1,
//   -1, 2, 11,
// ];
// console.log(myArray);

// myArray.sort();
// console.log(myArray);

// let duplicateArray = [];

// for (let i = 0; i < myArray.length; i++) {
//   //   console.log(myArray[i]);
//   if (myArray[i] !== myArray[i + 1]) {
//     duplicateArray.push(myArray[i]);
//   }
// }

// console.log(duplicateArray);
