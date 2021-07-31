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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positiveCounter = 0,
        negativeCounter = 0,
        zeroCounter = 0;
    
    if(arr.length < 0 || arr.length > 100){
        throw new Error("Array length must be between 0 and 100");
    }

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < -100 || arr[index] > 100) {
            throw new Error("The index of the array's number must be between -100 and 100");
        }else {
            if (arr[index] > 0) {
                positiveCounter++;
            } else if(arr[index] < 0) {
                negativeCounter++;
            } else if(arr[index] === 0){
                zeroCounter++;
            }
        }
        
    };
    console.log(positiveCounter / arr.length);
    console.log(negativeCounter / arr.length);
    console.log(zeroCounter / arr.length);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
