// const dogo = ["rover", "spike", "dingo", ""]
// let dogname = "rover";
// let dogweight = 23;


// function bark(name, weight) {
//     if (weight > 20) {
//         console.log(name + " says WOOF WOOF")
//     } else {
//         console.log(name + " says woof woof")
//     }
// }

// bark(dogname, dogweight)

// for (let i = 0; i < dogo.length; i++) {
//     if (dogweight > 20) {
//         console.log(dogo[i] + " says WOOF WOOF")
//     } else {
//         console.log(dogo[i] + " says woof woof")
//     }
// }

// let x, y, radius, centerX, centerY, width, height

// x = 32;
// y = 44;
// radius = 5;

// centerX = 0;
// centerY = 0;
// width = 600;
// height = 400;

// function setup(width, height) {
//     centerX = width / 2;
//     centerY = height / 2;
// }

// function computeDistance(x1, y1, x2, y2) {
//     let dx = x1 - x2;
//     let dy = y1 - y2;
//     let d2 = (dx * dx) + (dy * dy);
//     let d = Math.sqrt(d2);
//     return d;
// }

// function circleArea(r) {
//     let area = Math.PI * r * r;
//     return area;
// }

// setup(width, height);
// let area = circleArea(radius);
// let distance = computeDistance(x, y, centerX, centerY);
// alert(area + " This is the area");
// alert(distance + " This is the distance");

// let scores = [60, 50, 60, 58, 54 , 54, 58, 50, 52, 54];

// for (i = 0; i < scores.length; i++){
//     let ind = i + 1
//     console.log("Solution " + ind + " creates " + scores[i] + " amount of bubbles.")
// }

// let bubbles = [60, 50, 60, 58, 54, 54, 
//     58, 50, 52, 54, 48, 69,
//     34, 55, 51, 52, 44, 51,
//     69, 64, 66, 55, 52, 61,
//     46, 31, 57, 52, 44, 18,
//     41, 53, 55, 61, 51, 44
// ];


// let high = 0;
// let count = 0;

// for (i = 0; i < bubbles.length; i++) {
//     if (bubbles[i] > high) {
//         high = bubbles[i];
//         count = 0;
//     }
//     if (bubbles[i] == high) {
//         count = count + 1;
//     }
// }

// console.log("highest bubble count = " + high);
// console.log("There are " + count + " highest scores");

// let numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);

// let num = new Array(5);
// console.log(num);

// let arr = Array.of(5);
// console.log(arr);

// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // [1, 2, 3, 4]
// arr.pop();
// console.log(arr); // [1, 2, 3]
// arr.unshift(0); 
// console.log(arr); // [0, 1, 2, 3]
// arr.shift();
// console.log(arr); // [1, 2, 3]

// console.log(arr.indexOf(2));
// console.log(arr.indexOf(7)); // returns -1 because not found

// console.log(arr.lastIndexOf(2)); 

// console.log(arr.includes(2)); // checks if an element exists or not

// arr.splice(2, 1, 10, 20); // 
// console.log(arr);

// console.log(arr.slice(1,3));

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let combined = arr1.concat(arr2);
// console.log(combined);

// let words = ["hello", "world"];
// console.log(words.join(" "));

// let sentence = "Javascript is fun";
// let wordsArray = sentence.split(" ");
// console.log(wordsArray);

// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 3));

// const added = (a, b) => a + b;
// console.log(added(2,3));

// const multiply = (a, b) => {
//     console.log("Multiplying ${a} and ${b}");
//     return a * b
// }

// const square = x => x*x;
// console.log(square(6));

// const greet = () => "hwllo World";