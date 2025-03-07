const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const T = Number(input[0]);
let line = 1;

for (let i = 1; i < T+1; i++) {
  let arr=input[2*i].split(' ').map(Number);
  arr.sort((a,b)=> a-b);
  let newarr=[];
  for(let i of arr){
    newarr.push(i);
    newarr.reverse();
  }
  let MAX=0;

  for (let j = 0; j < newarr.length - 1; j++) {
    const diff = Math.abs(newarr[j] - newarr[j + 1]);
    if (diff > MAX) MAX = diff;
  }
  
  console.log(MAX);
}

// 2 4 5 7 9 
// 2  5  9  7  4 
