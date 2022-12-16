'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function kaprekarNumbers(p, q) {
    // Write your code here
let arr = [];
    for(let i = p; i <= q; i++) {
        const sqnum = (i * i).toString();
        const num1 = sqnum.substring(0, sqnum.length/2);
        const num2 = sqnum.substring(sqnum.length/2, sqnum.length);
          
        if (Number(num1) + Number(num2) === i) {
            // arr = arr.concat(i)
            arr.push(i)
        }
    }
    if (arr.length === 0) {
        console.log('INVALID RANGE')
    } else {
        console.log(...arr);
    }
}

function main() {
    const p = parseInt(readLine().trim(), 10);

    const q = parseInt(readLine().trim(), 10);

    kaprekarNumbers(p, q);
}
