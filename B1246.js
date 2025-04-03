// N개의 달걀, 잠재적 고객 M
// i번째 고객은 달걀을 Pi이하로
// 한 고객당 하나
// 최재 측정 가격, 최대 수익 출력
const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const[N, M]=input[0].split(' ').map(Number);

let arr=[];
for(let i=1; i<=M; i++){
  let temp=Number(input[i]);
  arr.push(temp);
}

// 2 8 7 10 
let maxSum=0;
let price=0;
let mm=0;

//오름차순 정렬
arr.sort((a,b)=> a-b);
//2 7 8 10
let maxNum=0;

//달걀개수 N개
for(let i=0; i<M; i++){
  price=arr[i];
  let sellCnt=Math.min(N, M-i);
  maxSum=price*sellCnt;
  if(mm<maxSum){
    mm=maxSum;
    maxNum=price;
  }
}

console.log(maxNum, mm);

