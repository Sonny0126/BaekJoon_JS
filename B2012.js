//첫쨰줄 자연수 N
// N개줄에 사람의 예상 등수 주어짐
// 불만도 -> |예상등수 - 실제등수|
// 불만도의 합이 최소로 하는 프로그램

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const N=Number(input[0]);

// 1 1 2 3 5
// 1 2 3 4 5 
//   1 1 1 의 합 = 3

const rank=[];
let line=1;
for(let i=0; i<N; i++){
    rank[i]=input[line++];
}
//오름차순 정렬
rank.sort((a,b)=> a-b);

let sum=0;

for(let i=0; i<N; i++){
    const bulman = Math.abs(rank[i]-(i+1));
    sum+=bulman;
}

console.log(sum);
