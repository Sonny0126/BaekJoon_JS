//1부터 N까지...
//1234 기억 X
//지우고 남은 수를 이어붙인수가 주어질 때, N의 최소값
const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const arr=(input[0]).split('');

let idx=0;
let num=1;

while(idx < arr.length){
  const str=String(num);
  for(let ch of str){
    if(ch===arr[idx]){
      idx++;
      if(idx===EventTarget.length) break;
    }
  }
  num++;
}

console.log(num-1);