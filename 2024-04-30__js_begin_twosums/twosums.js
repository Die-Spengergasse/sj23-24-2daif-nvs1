/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (i = 0; i < nums.length - 1; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};

let bsp1 = {
    nums: [2, 7, 11, 15],
    target: 26,
    answer: [2, 3]
};
let erg = twoSum(bsp1.nums, bsp1.target);
console.log(erg);
