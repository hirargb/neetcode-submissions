class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        let i = 0;

        if (s.length != t.length) {
            return false;
        }

        const charCount = { };

        while( i < s.length ) {

            const ch = s[i];

            if(charCount[ch]) {
                charCount[ch]++;
            } else {
                charCount[ch] = 1;
            }
            i++;
        }

        i = 0;

        while( i < t.length ) {

            const ch = t[i];

            if(!charCount[ch]) {
                return false;
            }
            charCount[ch]--;
            i++;
        }

        return true;
    }
}
