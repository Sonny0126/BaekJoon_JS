const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const n=Number(input[0]);
const arr=[];

for(let i=0; i<n; i++){
    const[p, d]=input[i+1].split(' ').map(Number);
    arr.push({pay:p, day:d});
}

//1. 높은 순서대로 배열
arr.sort((a,b)=> b.pay-a.pay);

const dailymoney=new Array(10000).fill(0);

for(let i=0; i<n; i++){
    for(let j=arr[i].day-1; j>=0; j--){
        //2. 비어있는 곳에 넣기
        if(dailymoney[j]===0){
            dailymoney[j]=arr[i].pay;
            break;
        }
    }
}

const sum=(arr)=> arr.reduce((sum, cur) => sum + cur, 0);
console.log(sum(dailymoney));