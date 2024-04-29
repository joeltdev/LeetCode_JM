let array = [1, 2, 3, 2, 3, 1, 2, 3];

let replacedArray = array.map((num) => (num === 1 ? 2 : num));

console.log(replacedArray); // Output: [2, 2, 3, 2, 3, 2, 2, 3]
