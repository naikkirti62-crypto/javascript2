function coinChange(coins, amount) {
    // Create dp array filled with Infinity, dp[0] = 0
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    // For each amount from 1 to target
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    let result = dp[amount] === Infinity ? -1 : dp[amount];
    console.log(result);
    return result;
}

coinChange([1, 2, 5], 11); 
coinChange([2], 3);        