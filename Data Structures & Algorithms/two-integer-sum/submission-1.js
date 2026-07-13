class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let i = 0;
        while(i < nums.length ) {
            const complement = target - nums[i];
            let j = i + 1;
            while( j < nums.length) {
                if(nums[j] == complement){
                    return [i,j];
                }
                j++;
            }
            i++;
        } 
        return [];
    }
}
