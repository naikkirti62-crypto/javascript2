function ginortS(str) {
    let lowercase = str.split('').filter(c => c >= 'a' && c <= 'z').sort();
    let uppercase = str.split('').filter(c => c >= 'A' && c <= 'Z').sort();
    let oddDigits = str.split('').filter(c => '13579'.includes(c)).sort();
    let evenDigits = str.split('').filter(c => '02468'.includes(c)).sort();

    let result = [...lowercase, ...uppercase, ...oddDigits, ...evenDigits].join('');
    console.log(result);
    return result;
}

ginortS('Sorting1234'); 