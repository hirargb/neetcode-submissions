class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = {};
        let i = 0;
        while(i<nums.length){
            if(frequencyMap[nums[i]]){
                frequencyMap[nums[i]]++;
            }else{
                frequencyMap[nums[i]] = 1;
            }
            i++;
        }

        const entries = Object.entries(frequencyMap).sort((a,b)=> b[1]-a[1]);

        return entries.slice(0,k).map(entry=>entry[0])
    }
}
