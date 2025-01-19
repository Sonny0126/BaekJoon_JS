const fs=require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const A=Number(input[0]);
const B=Number(input[1]);
let result=0;

if(A>B){
    result='>';
}
else if(A===B){
    result='=='
}
else{
    result='<'
}

console.log(result);