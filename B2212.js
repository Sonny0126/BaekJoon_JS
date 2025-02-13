//N개의 센수
//집중국의 개수 K <- 최대 k개의 집중국
// 셋째줄의 N개의 센서 좌표가 주어짐
//수신가능한 거리의 합의 회솟값을 구하는 프로그램
//수신가능영역은 고속도로 상에서 연결된 구간으로 나타낸다.

// 1 3 6 6 7 9(좌표)
//[1, 3]구간 수신,  [6,9]구간 수신
// 2 + 3 = 5
const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const N=Number(input[0]);
const K=Number(input[1]);

const arr=input[2].split(' ').map(Number);
//오름차순
arr.sort((a,b) => a-b);

// console.log(N);
// console.log(K);
// for(let i=0; i<N; i++){
//     console.log(arr[i]);
// }

//기존 배열[1, 6, 9, 3, 6, 7];
//오름차순[1, 3, 6, 6, 7, 9];
//거리의 차[2, 3, 0, 1, 2];
//거리의 차 내림차순[3, 2, 2, 1, 0];
const subarr=[];
for(let i=1; i<N; i++){
    subarr[i-1]=arr[i]-arr[i-1];
}

//내림차순
subarr.sort((a,b) => b-a);
let cnt=0;
for(let i=K-1; i<N-1; i++){
    cnt+=subarr[i];
}

console.log(cnt);