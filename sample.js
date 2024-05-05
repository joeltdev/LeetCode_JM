// function* generateNumbers() {
//   yield "joel";
//   yield 2;
//   yield 3;
// }

// const numberGenerator = generateNumbers();

// console.log(numberGenerator.next().value);
// console.log(numberGenerator.next().value);
// console.log(numberGenerator.next().value);

// function averageOfSum(arr) {
//   const sum = arr.reduce((acc, num) => acc + num, 0);
//   console.log(sum);
//   const average = sum / arr.length;
//   return average;
// }
// // Example usage
// const numbers = [1, 2, 3, 4, 5];
// const avg = averageOfSum(numbers);
// console.log(avg); // Output: 3
// Original object with a nested object
const originalObj = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

// Deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(originalObj));

// Modifying nested object in the deep copy
deepCopy.address.city = "San Francisco";

console.log(originalObj.address.city); // Output: New York (original object is not modified)
console.log(deepCopy.address.city); // Output: San Francisco (deep copy is modified)
