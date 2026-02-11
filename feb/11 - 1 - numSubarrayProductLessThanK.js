/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {

    let i = 0, j = 0, product = 1, count = 0;

    while (i <= j && j < nums.length) {
        product *= nums[j];

        while (product >= k) {
            product /= nums[i];
            i++;
        }

        if (i <= j && product < k) {
            count += (j - i + 1);
        }
        j++;
    }

    return count;
};