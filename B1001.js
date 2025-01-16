const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ')
const num1 = Number(input[0]);
const num2 = Number(input[1]);

function minus(a, b){
    let gap = a-b;
    return gap;
}

console.log(minus(num1, num2));