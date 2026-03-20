function harmonicSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / i;
    }

    let result = parseFloat(sum.toFixed(2));
    console.log(result);
    return result;
}

harmonicSum(5); 