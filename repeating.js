function firstRepeatingChar(str) {
    let seen = new Set();

    for (let char of str) {
        if (seen.has(char)) {
            console.log(char);
            return char;
        }
        seen.add(char);
    }

    console.log('No repeating characters');
    return 'No repeating characters';
}

firstRepeatingChar('hello');   
firstRepeatingChar('racecar'); 
firstRepeatingChar('abcd');    