"use strict";

// ამოცანა 1
// let array = [12, 25, 3, 6, 8, 14, 7, 23];

// let newArray = array.map(function(x){
//   return x / 3
// })
// console.log(newArray);

// ამოცანა 2
// let languages = ['html', 'css', 'javascript', 'python', 'php'];

// let array = languages.filter(function(x){
// // console.log(x.length);
// if (x.length > 3) {
//   console.log(x);
// }
// })

// ამოცანა 3

// let words = ["Madrid", "Rome", "Milan", "Berlin"];

// let result = words.filter(function (item) {
//   if (item.includes("m") || item.includes("M")) {
//     return item;
//   }
//   return false;
// });

// console.log(result);

// ამოცანა 4.

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// let concatArray = arr1.concat(arr2).concat(arr3)

// console.log(concatArray);

// ამოცანა 5

// let arr = [-1, -2, -3, 4].some(item => item > 0)
// console.log(arr);

// let newArray = (item) => item > 0;

// let result = arr.some(newArray)

// console.log(result);

// ამოცანა 6

// let array = [23, 45, 32, 5, 87, 7, 3, 98];

// array.sort(function (x, y) {
//   return y - x;
// });

// console.log(array[array.length -1]);



// ამოცანა 7

// let newDivElement = document.createElement("div");
// newDivElement.classList.add("wraper");

// let imgElement = document.createElement("img");
// imgElement.setAttribute(  "src",  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
// );
// imgElement.setAttribute("alt", "img-description");

// let newTitleElement = document.createElement("h2");
// newTitleElement.classList.add("title");
// newTitleElement.textContent = "hello"

// newDivElement.appendChild(imgElement);
// newDivElement.appendChild(newDivElement);

// document.getElementById("wraper-id").appendChild(newDivElement);

// ამოცანა 8

// document.querySelectorAll(".test").forEach(function (item) {
//   let pElement = document.createElement("p");
//   pElement.classList.add("test-p");
//   pElement.textContent = "hello";

//   item.appendChild(pElement);
// });


// ამოცანა 9

// let array = [2,15,10,24]

// array.splice(2,1)

// console.log(array);