function isComposite(n) {
    if (n <= 1) return false;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log(true);
            return true;
        }
    }

    console.log(false);
    return false;
}

isComposite(4);  
isComposite(7);  
isComposite(9);  