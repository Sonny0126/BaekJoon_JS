const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');
const [N, L]=input[0].split(' ').map(Number);
const arr=input[1].split(' ').map(Number).sort((a,b)=> a-b);

let start=arr[0];
let cnt=1; //최소한 1개의 테이프 필요
for(let i=1; i<N; i++){
    if(1 + arr[i] - start > L){
        cnt++;
        start=arr[i];``
    }
}

console.log(cnt);