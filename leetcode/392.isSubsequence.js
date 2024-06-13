//pointers

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting 
// some (can be none) of the characters without disturbing the relative positions of the remaining characters.
//  (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

var isSubsequence = function (s, t) {
    let sPointer = 0; // Pointer for string s
    let tPointer = 0; // Pointer for string t

    // Iterate through both strings
    while (sPointer < s.length && tPointer < t.length) {
        // If characters match, move sPointer to the next character in s
        if (s[sPointer] === t[tPointer]) {
            sPointer++;
        }
        // Move tPointer to the next character in t regardless of whether characters match
        tPointer++;
    }

    // If sPointer has reached the end of s, s is a subsequence of t
    console.log(sPointer === s.length)
    return sPointer === s.length;
};

let s = "adbc"
let t = "ahbgdc"
isSubsequence(s,t)