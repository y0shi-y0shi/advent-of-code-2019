const rule = (input) => {
    const digits = input.toString().split("").map(Number);
    if (digits.some((value, index, digits) => value > digits[index + 1])) {
        return false;
    }
    return digits.some((value, index, digits) => {
        if (value != digits[index + 1]) {
            return false;
        }
        if (value === digits[index + 2]) {
            return false;
        }
        if (value === digits[index - 1]) {
            return false;
        }
        return true;
    });
};
const passwords = (begin, end) => {
    const result = [];
    for (let i = begin; i <= end; i++) {
        if (rule(i)) {
            result.push(i);
        }
    }
    return result;
};
console.log(passwords(152085, 670283).length);
//# sourceMappingURL=day4.js.map