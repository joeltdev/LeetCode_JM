var buildArray = function (nums) {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }
  return ans;
};
const nums = [0, 3, 4, 2, 1, 5];
const findsum = buildArray(nums);
console.log(findsum);
