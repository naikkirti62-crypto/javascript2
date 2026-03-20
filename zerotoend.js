function moveZeroesToEnd(n) {
    let digits = String(n).split('');
    let nonZeroes = digits.filter(d => d !== '0');
    let zeroes = digits.filter(d => d === '0');

    let result = Number([...nonZeroes, ...zeroes].join(''));
    console.log(result);
    return result;
}

moveZeroesToEnd(1020304050); 