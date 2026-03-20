function toSpongecase(str) {
    let result = str.split('').map((char, index) => {
        if (index % 2 === 0) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
    console.log(result);
    return result;
}

toSpongecase('programizpro123'); 