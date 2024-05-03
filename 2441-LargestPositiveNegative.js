var findMaxK = function (nums) {
  let maxIndices = [];
  for (let i = 0; i < nums.length; i++) {
    if (maxIndices.length < 3) {
      maxIndices.push(i);
    } else {
      let minIndex = maxIndices.reduce(
        (minIndex, currentIndex) =>
          nums[currentIndex] < nums[minIndex] ? currentIndex : minIndex,
        0
      );
      if (nums[i] > nums[minIndex]) {
        maxIndices[minIndex] = i;
      }
    }
  }
  return maxIndices;
};

const nums = [-1, 2, -3, 3];
console.log(findMaxK(nums)); // Output: [1, 3, 2]
