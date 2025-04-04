// 첫째 줄 마을 수 n
// 둘째 이동비용
const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const n=Number(input[0]);

let arr=input[1].split(' ').map(Number)

arr.sort((a,b)=>a-b);

let sum=0;
for(let i=0; i<n-1; i++){
  sum+=arr[i];
}

console.log(sum);