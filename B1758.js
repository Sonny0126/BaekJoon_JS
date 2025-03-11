//첫째줄 스타벅스 앞에 사람 수 N
// 둘쨰줄 부터 N개의 줄에 각 사람이 주려고 하는 팁이 주어진다.
// 돈 -(받은 등수 -1)
// 값이 음수이면 팁이 없다

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const N=Number(input[0]);
const tips=[];
for(let i=0; i<N; i++){
    tips[i]=Number(input[i+1]);
}

//내림차순 정렬
tips.sort((a,b)=> b-a);

//내가 받을 팁 = 돈 - (순서 -1)
let tipSum=0;

for(let i=0; i<N; i++){
    if(tips[i]-(i+1 -1)> 0)
        tipSum +=(tips[i] - (i+1 -1));
}

console.log(tipSum);
