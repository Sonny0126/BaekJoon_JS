// 2개의 문자열 s와 t가 주어졌을 때 s가 t의 부분 문자열인지 판단하는 프로그램을 작성하라. 부분 문자열을 가지고 있는지 판단하는 방법은 t에서 몇 개의 문자를 제거하고 이를 순서를 바꾸지 않고 합쳤을 경우 s가 되는 경우를 이야기 한다.

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

let line=1;

let arr=[];
for(let i=1; i<input.length+1; i++){
  arr.push(input[i]);
}

for(let i=0; i<input.length; i++){
  let [s,t]=input[i].split(' ');
  let sidx=0;
  //s가 t에 속하면 Yes
  //t부분에 몇개의 문자를 제거하고 합쳤을 경우 s가 되어야 함
  for(let j=0; j<t.length; j++){
    if(t[j]===s[sidx]){
      sidx++;
    }
    if(sidx===s.length) break;
  }
  
  if(sidx===s.length) console.log('Yes');
  else  console.log('No');
}








