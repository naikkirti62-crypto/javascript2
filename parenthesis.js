function isValidParenthesis(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.pop() !== map[char]) {
                console.log(false);
                return false;
            }
        }
    }

    let result = stack.length === 0;
    console.log(result);
    return result;
}

isValidParenthesis('()[]{}'); 
isValidParenthesis('(]');     