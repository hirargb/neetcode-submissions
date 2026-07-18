class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x: number, n: number): number {
        if(n<0){
            return 1/this.myPow(x, -1 * n);
        }
        else if(n == 0) return 1;
        else if (n==1) return x;

        return x * this.myPow(x, n-1);
    }
}
