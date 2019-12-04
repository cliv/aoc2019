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

    let repeatFound = false;

    // check for repeating digits
    characters = [...code];

    // Tighter loop than foreach, since we don't have to look behind the first number or in front of the last
    for (i = 1; i < 6; i++) {
        checkChar = characters[i];

        // Lower preceeding characters is immediate fail, don't bother processing any more
        if (parseInt(characters[i]) < parseInt(characters[i - 1])) { return false; }

        // Check characters on either side and keep moving right or left on match
        matches = 0;
        if (characters[i] == characters[i-1]) {
            matches++;
            if (characters[i] == characters[i-2]) {
                matches++;
            }
        }
        if (characters[i] == characters[i+1]) {
            matches++;
            if (characters[i] == characters[i+2]) {
                matches++;
            }
        }
        if (matches == 1) {
            repeatFound = true;
        }
    }
    return repeatFound;
}

validCodes = [];
for (int = 183564; int <= 657474; int++) {
    let res = checkCode(int);
    if (res) {
        validCodes.push(int);
    }
}
console.log(validCodes.length);