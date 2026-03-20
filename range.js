function isInRange(n, start, end) {
    let result = n >= start && n <= end;
    console.log(result);
    return result;
}

isInRange(5, 1, 10);  
isInRange(15, 1, 10); 