// function containsDuplicate(nums) {
//   for (let i = 0; i <= nums.length - 1; i++) {
//     for (let j = i + 1; j <= nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// let nums = [1, 2, 3, 1];
// let containsDuplicates = containsDuplicate(nums);
// console.log(containsDuplicates);

const containsDuplicate = (nums) => {
  nums.sort((a, b) => a - b);
  console.log(nums);

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

const nums = [1, 2, 3, 4, 5, 2];
console.log(containsDuplicate(nums));
