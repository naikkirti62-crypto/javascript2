function longestPalindromicSubsequence(str) {
    const n = str.length;
    
    
    let dp = Array.from({length: n}, () => new Array(n).fill(0));
    
    
    for (let i = 0; i < n; i++) dp[i][i] = 1;
    
    
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1;
            if (str[i] === str[j]) {
                dp[i][j] = dp[i+1][j-1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
            }
        }
    }

    let result = dp[0][n-1];
    console.log(result);
    return result;
}

longestPalindromicSubsequence('BBABCBCAB'); 
longestPalindromicSubsequence('abcd');      