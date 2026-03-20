function isDisarium(n) {
    let digits = String(n).split('');
    let sum = digits.reduce((acc, digit, index) => {
        return acc + Math.pow(Number(digit), index + 1);
    }, 0);

    let result = sum === n;
    console.log(result);
    return result;
}

isDisarium(135); 
isDisarium(175); 
isDisarium(123); 