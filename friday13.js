function isFriday13th(month, year) {
    
    let date = new Date(year, month - 1, 13);
    
    
    let result = date.getDay() === 5;
    console.log(result);
    return result;
}

isFriday13th(9, 2024);  
isFriday13th(1, 2025);  