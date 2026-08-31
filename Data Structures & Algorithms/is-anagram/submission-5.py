class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        map_s = {}

        if len(s) != len(t):
            return False

        for i in s:
            if i in map_s:
                map_s[i] +=1;
            else:
                map_s[i] = 1;

        for i in t:
            if i in map_s:
                map_s[i] -= 1;
            else:
                return False

        for i in map_s:
            if map_s[i] > 0:
                return False
        return True