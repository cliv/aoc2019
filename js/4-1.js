/***
 * Advent of code 2019 Day 4
 * Find all six digit numbers
 * - between 183564 and 657474
 * - has two repeating digits
 * - Numbers are always increasing
 * 
 */
const checkCode = (code) => {
    // force a string
    code = String(code);

    // set check
    let noLowerdigits = true;
    let repeatFound = false;

    // check for repeating digits
    lastChar = '0';
    [...code].forEach(c => {
        if (parseInt(c) < parseInt(lastChar)) { noLowerdigits = false; }
        if (c == lastChar) { repeatFound = true; }
        lastChar = c;
    });

    return (noLowerdigits && repeatFound);
}
validCodes = [];
for (i = 183564; i <= 657474; i++) {
    let res = checkCode(i);
    if (res) {
        validCodes.push(i);
    }
}
console.log(validCodes.length);