// Fundamentals of JavaScript
// arrays and object
// functions return
// async js coding
// foreach map filter find indexof

var arr = [1, 2, 3, 4, "hello", {}, function () {}, []];

arr.forEach((val) => {
  // console.log(val + " Hello");
  // foreach, a method that run a callback function for each value of an array
});

// Map
// same as foreach. but map return a array of result
let arr1 = [1, 2, 3, 4];
// [12,13,14,15] , we need new array with +12 of arr1
const resultArray = arr1.map((val) => {
  return val + 12;
});

const resultArrayShortV = arr1.map((val) => val + 12);

// .map() expects, we return something in callback function
// with {} → no auto return. need to use return
// without {} → implicit return/automatically returns

// it's Arrow function behavior

// console.log(resultArray);
// console.log(resultArrayShortV);

const newArr = arr1.map(function (val) {
  return 13;
});

// console.log(newArr);

// Filter
// give a new array based on our condition. that new array can be short or long or same like current array.
const filterArr = arr1.filter(function (val) {
  if (val > 3) {
    return true;
  } else return false;
});

// don't need to return val, just return true or false

// console.log(filterArr);

//
// Find
// this method find 1st number based on condition. if found that number, stop execution.
const findAns = arr1.find(function (val) {
  if (val === 3) {
    return true;
  } else return false;
});

// console.log(findAns);

//
// Index Of
// if array have that index it return that data. if there is no that index, it return -1 always
const indexOf = arr1.indexOf(4);
const index2 = arr1.indexOf(12);

// console.log(indexOf);
// console.log(index2);

//
//
// Object  == key value pairs
// {}  it's a black object
// inside curly braces, we can store anything. that is a object

let role = "Dev";

let obj = {
  name: "Montajur",
  age: 23,
  role: role,
};

// console.log(obj.name);
// console.log(obj['age']);
// console.log(obj['role']);

// obj.age = 25   // age changed now

// if we don't want to change like these. we can freeze

Object.freeze(obj);

obj.age = 25; // it's not changed now

// console.log(obj.age);

// length

// console.log(arr1.length);

// we know arr have length. but also function have length. because function is an array

function abcd() {
  // console.log("Hello");

  return 12; // return stop the execution  of this function
}

let ans = abcd();
// function controlled at line 128.

// console.log(abcd.length);  // return 0, no parameter

// console.log(ans);

//
// function.length returns: The number of parameters(arguments) a function expects

// NOT how many values you pass,
// NOT how many lines inside function,
// NOT return value.

function ab(a, b, c, d) {
  a + b + c + d;
}
// console.log(ab.length);  // 4 parameter, ans 4

// Default Parameters are NOT counted
function test(a, b = 5, c = 10) {
  // b and c already have value. it's default value
  a + b + c;
}
// console.log(test.length);  // ans 1, a and b not counted

// Rest Parameters are NOT counted: modern way
function agrs(...args) {
  console.log(args);
}

// agrs(1,2,3)

// old way arguments.length
function sum() {
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[2]);
}

// sum(1,2,3,4)

//
//
// Async js Coding
async function learn() {
  let blob = await fetch(`https://dummyjson.com/products/1`);

  let res = await blob.json();

  console.log(res);
}

// learn();

// normally, code runs line by line. it's called synchronous
// main stack → all code run and execute here 
// side stack → async code process here. it can't execute code.

// after process, if main stack become empty, code moves side stack to main stack

// all async code goes side stack, and runs next sync nature code. 
// after runs all sync code, check async code , they are completed or not.
// if completed, take it to main stack and execute.

//
async function abc() {
  // fetch - by default async. because we depend on 3rd party service. it can be slow or server down.
  // ------- 
  let blob = await fetch(`https://dummyjson.com/products/1`);
  // -------

  // fetch give us a stream data. that is not readable. it's called blob

  let res = await blob.json()   // convert blob to json → now it's readable

  console.log(res);
  console.log(res.title);
  console.log(res['price']);
  
  
  
}


abc()
