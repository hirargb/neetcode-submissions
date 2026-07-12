class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const charCount = new Array(26).fill(0);
        
        if (s.length != t.length){
            return false;
        }

        let i = 0;

        while(i < s.length) {
            const index = s.charCodeAt(i) - 'a'.charCodeAt(0);
            charCount[index]++;
            i++;
        }

        i = 0;

        while( i < t.length ) {
            const index = t.charCodeAt(i) - 'a'.charCodeAt(0);
            if(charCount[index]==0){
                return false;
            }
            charCount[index]--;
            i++;
        }

        return true;
    }
}
