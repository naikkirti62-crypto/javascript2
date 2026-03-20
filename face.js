function clockInterval(a, b) {
    let diff = Math.abs(a - b);
    let result = Math.min(diff, 12 - diff);
    console.log(result);
    return result;
}

clockInterval(3, 9);  
clockInterval(1, 11); 