const fs=require('fs');
const { send } = require('process');
const input=fs.readFileSync('input.txtx').toString().trim().split('\n');

const [N,C]=input[0].split(' ').map(Number);
const M=Number(input[1]);

let arr=[];
for(let i=2; i<M+2; i++){
    let [sendNum, recNum, cntNum]=input[i].split(' ').map(Number);
    arr.push({sendNum, recNum, cntNum});
}

arr.sort((a,b)=> a.recNum-b.recNum);

let capacity=new Array(N+1).fill(0);
let sumDelivered=0;

for(let i=0; i<N; i++){

    let maxLoad=cntNum;

    //현재 구간에서 트럭이 최대한 적재가능한 양
    for(let i=sendNum; i<recNum; i++){
        maxload=Math.min(maxLoad, C-capacity[i]);
    }
    //적재 가능한 양 실음
    for(let i=sendNum; i<recNum; i++){
        capacity[i]+=maxload;
    }

    sumDelivered+=maxload;
}

console.log(sumDelivered);