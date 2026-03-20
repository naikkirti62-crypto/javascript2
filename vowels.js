function replaceVowels(str, char) {
    let result = str.replace(/[aeiouAEIOU]/g, char);
    console.log(result);
    return result;
}

replaceVowels('hello world', 'x'); 