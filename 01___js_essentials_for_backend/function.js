const arr1 = [1, 2, 3];
arr1.push(8);

const arr2 = [...arr1, 4, 5];

arr1.pop();

console.log(arr1);
console.log(arr2);

arr2.forEach((num) => num * 2);

const num = arr1.map((num) => num * 2);

console.log(num);

// filter
const even = arr2.filter((num) => num % 2 === 0);

console.log(even);

const firstOdd = arr1.find((num) => num % 2 !== 0);

console.log(firstOdd);

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const user = users.find((user) => user.id === 2);

console.log(user);
