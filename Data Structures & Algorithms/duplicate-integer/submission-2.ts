class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        
        /*
        // O(n^2)
        for(let i = 0; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j++) {
                if(nums[i] === nums[j]) return true;
            }
        } 
        */
        /* 
        // using set
        const seen = new Set<number>();
        for(const num  of nums) {
            if (seen.has(num)) return true;
            seen.add(num);
        }
        */

        const map = new Map<number, number>();
        for (const num of nums) {   
            const count = map.get(num) || 0;
            if(count >= 1) return true;

            map.set(num, count + 1);

        }



        
        return false;
    }
}
