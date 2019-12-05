const readlineSync = require('readline-sync');

// Opcode parser based on day two part 1
let opcode = [3, 225, 1, 225, 6, 6, 1100, 1, 238, 225, 104, 0, 1102, 31, 68, 225, 1001, 13, 87, 224, 1001, 224, -118, 224, 4, 224, 102, 8, 223, 223, 1001, 224, 7, 224, 1, 223, 224, 223, 1, 174, 110, 224, 1001, 224, -46, 224, 4, 224, 102, 8, 223, 223, 101, 2, 224, 224, 1, 223, 224, 223, 1101, 13, 60, 224, 101, -73, 224, 224, 4, 224, 102, 8, 223, 223, 101, 6, 224, 224, 1, 224, 223, 223, 1101, 87, 72, 225, 101, 47, 84, 224, 101, -119, 224, 224, 4, 224, 1002, 223, 8, 223, 1001, 224, 6, 224, 1, 223, 224, 223, 1101, 76, 31, 225, 1102, 60, 43, 225, 1102, 45, 31, 225, 1102, 63, 9, 225, 2, 170, 122, 224, 1001, 224, -486, 224, 4, 224, 102, 8, 223, 223, 101, 2, 224, 224, 1, 223, 224, 223, 1102, 29, 17, 224, 101, -493, 224, 224, 4, 224, 102, 8, 223, 223, 101, 1, 224, 224, 1, 223, 224, 223, 1102, 52, 54, 225, 1102, 27, 15, 225, 102, 26, 113, 224, 1001, 224, -1560, 224, 4, 224, 102, 8, 223, 223, 101, 7, 224, 224, 1, 223, 224, 223, 1002, 117, 81, 224, 101, -3645, 224, 224, 4, 224, 1002, 223, 8, 223, 101, 6, 224, 224, 1, 223, 224, 223, 4, 223, 99, 0, 0, 0, 677, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1105, 0, 99999, 1105, 227, 247, 1105, 1, 99999, 1005, 227, 99999, 1005, 0, 256, 1105, 1, 99999, 1106, 227, 99999, 1106, 0, 265, 1105, 1, 99999, 1006, 0, 99999, 1006, 227, 274, 1105, 1, 99999, 1105, 1, 280, 1105, 1, 99999, 1, 225, 225, 225, 1101, 294, 0, 0, 105, 1, 0, 1105, 1, 99999, 1106, 0, 300, 1105, 1, 99999, 1, 225, 225, 225, 1101, 314, 0, 0, 106, 0, 0, 1105, 1, 99999, 8, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 329, 1001, 223, 1, 223, 1108, 677, 226, 224, 102, 2, 223, 223, 1006, 224, 344, 101, 1, 223, 223, 108, 677, 226, 224, 102, 2, 223, 223, 1006, 224, 359, 101, 1, 223, 223, 7, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 374, 101, 1, 223, 223, 1007, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 389, 101, 1, 223, 223, 8, 677, 677, 224, 102, 2, 223, 223, 1006, 224, 404, 1001, 223, 1, 223, 1007, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 419, 101, 1, 223, 223, 1108, 677, 677, 224, 1002, 223, 2, 223, 1005, 224, 434, 1001, 223, 1, 223, 1107, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 449, 101, 1, 223, 223, 107, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 464, 101, 1, 223, 223, 1108, 226, 677, 224, 1002, 223, 2, 223, 1005, 224, 479, 1001, 223, 1, 223, 7, 677, 677, 224, 102, 2, 223, 223, 1006, 224, 494, 1001, 223, 1, 223, 1107, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 509, 101, 1, 223, 223, 107, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 524, 101, 1, 223, 223, 1008, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 539, 101, 1, 223, 223, 7, 226, 677, 224, 1002, 223, 2, 223, 1005, 224, 554, 101, 1, 223, 223, 108, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 569, 101, 1, 223, 223, 1008, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 584, 101, 1, 223, 223, 8, 677, 226, 224, 1002, 223, 2, 223, 1005, 224, 599, 101, 1, 223, 223, 1007, 226, 226, 224, 1002, 223, 2, 223, 1005, 224, 614, 101, 1, 223, 223, 1107, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 629, 101, 1, 223, 223, 107, 677, 226, 224, 1002, 223, 2, 223, 1005, 224, 644, 1001, 223, 1, 223, 1008, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 659, 101, 1, 223, 223, 108, 677, 677, 224, 1002, 223, 2, 223, 1005, 224, 674, 1001, 223, 1, 223, 4, 223, 99, 226];
// let opcode = [3, 21, 1008, 21, 8, 20, 1005, 20, 22, 107, 8, 21, 20, 1006, 20, 31, 1106, 0, 36, 98, 0, 0, 1002, 21, 125, 20, 4, 20, 1105, 1, 46, 104, 999, 1105, 1, 46, 1101, 1000, 1, 20, 4, 20, 1105, 1, 46, 98, 99];

console.log("Start", opcode);
let pos = 0;
let state = "running";
while (state == "running") {
    // Get params
    let instruction = parseInt(String(opcode[pos]).slice(-2));
    let dest_a = parseInt(String(opcode[pos]).slice(-3, -2)) == 1 ? pos + 1 : opcode[pos + 1];
    let dest_b = parseInt(String(opcode[pos]).slice(-4, -3)) == 1 ? pos + 2 : opcode[pos + 2];
    let dest_c = parseInt(String(opcode[pos]).slice(-5, -4)) == 1 ? pos + 3 : opcode[pos + 3];

    switch (instruction) {
        case 1:
            // Addition
            opcode[dest_c] = opcode[dest_a] + opcode[dest_b];
            pos += 4;
            break;
        case 2:
            // Multiplication
            opcode[dest_c] = opcode[dest_a] * opcode[dest_b];
            pos += 4;
            break;
        case 3:
            // Input to address
            opcode[dest_a] = parseInt(readlineSync.question('Value for ' + dest_a + '? '));
            pos += 2;
            break;
        case 4:
            // output from address
            console.log("value for", dest_a, opcode[dest_a]);
            pos += 2;
            break;
        case 5:
            /* Opcode 5 is jump-if-true: 
             * if the first parameter is non-zero, it sets the instruction pointer to the 
             * value from the second parameter. Otherwise, it does nothing.
             */
            pos = opcode[dest_a] > 0 ? opcode[dest_b] : pos += 3;
            break;
        case 6:
            /* Opcode 6 is jump-if-false: 
             * if the first parameter is zero, it sets the instruction pointer to the value 
             * from the second parameter. Otherwise, it does nothing.
             */
            pos = opcode[dest_a] == 0 ? opcode[dest_b] : pos += 3;
            break;
        case 7:
            /* Opcode 7 is less than: 
             * if the first parameter is less than the second parameter, it stores 1 in the position 
             * given by the third parameter. Otherwise, it stores 0.
             */
            opcode[dest_c] = (opcode[dest_a] < opcode[dest_b]) ? 1 : 0;
            pos += 4;
            break;
        case 8:
            /* Opcode 8 is equals: 
             * if the first parameter is equal to the second parameter, it stores 1 in the position 
             * given by the third parameter. Otherwise, it stores 0.
             */
            opcode[dest_c] = (opcode[dest_a] == opcode[dest_b]) ? 1 : 0;
            pos += 4;
            break;
        case 99:
            state = "stopped";
            break;
        default:
            console.log("How did i get here?", instruction, pos)
            for (i = pos - 5; i < pos + 5; i++) {
                console.log(i, opcode[i]);
            }
            pos++;
            break;
    }
    if (pos > opcode.length) { state = "crashed"; console.log("end of stack!"); }
}
// console.log("End", opcode, 0)
