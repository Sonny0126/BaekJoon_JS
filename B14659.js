// N개 봉우리
// 오른쪽으로만 이동
// 자신보다 낮은 놈들만 킬 가능
// 최대 숫자 출력

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split("\n");

const N=Number(input[0]);
const arr=input[1].split(' ').map(Number);

let MAX=-1;
let cnt=0;

for(let i=0; i<N; i++){
    cnt=0;
    for(let j=i+1; j<N; j++){
        if(arr[i]>arr[j])
            cnt++;
        else
            break;
    }
    MAX=Math.max(MAX, cnt);
}

console.log(MAX);