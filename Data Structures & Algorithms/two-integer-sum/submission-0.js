class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * nums = [2,7,11,15], target = 9
     */
    twoSum(nums, target) {
        const seen = {};
        let i = 0;
        while(i < nums.length){
            if(seen[target - nums[i]] == undefined){
                seen[nums[i]] = i
            } else {
                return [seen[target - nums[i]], i];
            }
            i++;
        }
    }
}
