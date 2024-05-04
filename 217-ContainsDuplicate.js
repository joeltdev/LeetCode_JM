function containsDuplicate(nums) {
  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}
let nums = [1, 2, 3, 1];
let containsDuplicates = containsDuplicate(nums);
console.log(containsDuplicates);
