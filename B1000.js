const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ') // vs
const num1 = +input[0]
const num2 = +input[1]

function solution(a, b) {
    let sum = a+b;
    return sum;
}

console.log(solution(num1, num2));