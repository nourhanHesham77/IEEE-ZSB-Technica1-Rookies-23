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
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */

function acmTeam(topic) {
    // Write your code here
 let alltop=[];
   let arr=[];
   //we have to compare two numbers thus, it is two loops(i,i+1)...
   for(var i=0;i<topic.length;i++){
       for(var j=i+1;j<topic.length;j++){
           var count=0;
           for(var s=0;s<topic[0].length;s++){
               //start serching for unique '1'(topics) to count......
               if(topic[i][s]==='1'||topic[j][s]==='1'){
                   count++;
               }
           }
           alltop.push(count);
       }
   }
//    var max = Math.max(...alltop);
       arr= alltop.sort(function(a, b){return b - a});
      const max = arr[0];

console.log(max);
console.log(arr);
   let maxcount=0;
    for(let i of arr){
        if(i === max){
            maxcount++
        }
    }
   return[max, maxcount];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    let topic = [];

    for (let i = 0; i < n; i++) {
        const topicItem = readLine();
        topic.push(topicItem);
    }

    const result = acmTeam(topic);

    ws.write(result.join('\n') + '\n');

    ws.end();
}