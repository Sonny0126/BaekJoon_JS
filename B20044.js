const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const n=Number(input[0]);
let arr=input[1].split(' ').map(Number);

arr.sort((a,b)=> a-b);

let ls=[];

for(let i=0; i<n; i++){
    let sum=arr[i]+arr[2*n-1-i];
    ls.push(sum);
}

let ans=Math.min(...ls);

console.log(ans);
