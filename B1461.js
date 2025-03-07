const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(v=> +v);
let arr=input[1].split(' ').map(v => +v);

let maxDis=0;

const neg=arr.filter(v=> v<0).sort((a,b)=> a-b);//절대값 큰게 앞으로
const pos=arr.filter(v=> v>0).sort((a,b)=> b-a);

if(neg.length >0){
  maxDis=Math.abs(neg[0]);
}
if(pos.length>0){
  maxDis=Math.max(maxDis, pos[0]);
}

let sum=0;

//음수 위치 처리
for(let i=0; i<neg.length; i+=M){
  sum+=Math.abs(neg[i]) * 2;
}
//양수 위치 처리
for(let i=0; i<pos.length; i+=M){
  sum+=pos[i] * 2;
}

sum -= maxDis;
console.log(sum);

/*
-39 -37 -29 -28 -6
78 + 58 + 12

11 2
22

148 + 22 - 39 = 131
*/