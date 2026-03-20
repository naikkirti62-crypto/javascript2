function brokenKeyboard(workingKeys, word) {
    let result = word.toLowerCase().split('').every(char => workingKeys.toLowerCase().includes(char));
    console.log(result);
    return result;
}

brokenKeyboard('abc', 'cab'); 
brokenKeyboard('abc', 'car'); 