function mostCommonChar(str) {
    let freq = {};
    
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    let result = Object.keys(freq).reduce((a, b) => freq[a] >= freq[b] ? a : b);
    console.log(result);
    return result;
}

mostCommonChar('hello world');