let apples: number = 1;
// now ts gives error if we try to assign different value type
// all of this (annotation) is not required if you declare and initialize variable in same line (inference)
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

let numb = 2;

// built in objects

let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1. function that returns any type - ts cant predict what type will it be - assumes any
const json = '{"x": 10, "y": 20}';
const coordinaes: { x: number; y: number } = JSON.parse(json);
console.log(coordinaes);

// 2. when we declare variable in one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3. variable whose type cant be inferred correctly
let number = [-10, -1, 12];
let numberAboveZero: number | boolean = false;

for (let i = 0; i < number.length; i++) {
  if (number[i] > 0) {
    numberAboveZero = number[i];
  }
}
