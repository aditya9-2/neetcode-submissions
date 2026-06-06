class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        /**
         * | Approach                | Time Complexity | Space Complexity |
           | ----------------------- | --------------- | ---------------- |
           | Sort + Compare          | O(n log n)      | O(n)             |
           | HashMap Frequency Count | O(n)            | O(n)             |
        */
        
        // return s.split('').sort().join('') === t.split('').sort().join('');
        
        if (s.length !== t.length) {
            return false;
        }

        const map = new Map<string, number>();

        for (const char of s) {
            map.set(char, (map.get(char) ?? 0) + 1);
        }

        for (const char of t) {
            if (!map.has(char)) return false;

            map.set(char, map.get(char)! - 1);

            if (map.get(char)! < 0) return false;
        }     

        return true;

        
    }
}
