//첫째줄 빨대 개수 N
const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

//삼각형 만드는데, 세 변의 길이의 합 최대값
const N=Number(input[0]);
//삼각형 만들 수 없다면 -1 출력
let arr=[];
for(let i=1; i<=N; i++){
  arr[i]=Number(input[i]);
}

//내림차순 정렬
arr.sort((a,b)=> b-a);

let maxSum=0;

for(let i=0; i<N; i++){
  let max=arr[0];
  let sum=arr[1]+arr[2];
  if(max<sum) maxSum=max+sum;
  else arr.shift();
}

if (arr.length<3) console.log(-1);
else console.log(maxSum);
