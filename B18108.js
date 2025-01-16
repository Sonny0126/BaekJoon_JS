const fs =require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const number=Number(input);
console.log(number-543);