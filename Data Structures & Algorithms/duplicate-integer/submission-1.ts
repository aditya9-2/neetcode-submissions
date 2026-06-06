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
        let count = 0;
        for (const num of nums) {
            
            if(map.has(num)) return true;
            map.set(num, count++);
            

        }



        
        return false;
    }
}
