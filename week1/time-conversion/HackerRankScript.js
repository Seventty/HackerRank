'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let newTime = "";

   let [hours, minutes, seconds] = s.split(':');
   let period = seconds.split('').splice(2,3).join("");

   seconds = seconds.split('').splice(0,2).join("")

    if(hours === '12') hours = '00';
    
    if(period === "PM") hours = parseInt(hours, 10)+12;

    newTime = [hours, minutes, seconds].join(":");
    
    return newTime; 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
    
}
