function toTitleCase(str) {
    let result = str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    console.log(result);
    return result;
}

toTitleCase('hello world'); 