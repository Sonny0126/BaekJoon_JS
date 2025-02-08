//길이가 L인 테이프
// 좌우 관격 0.5만큼 줘야함
// 첫줄에 물이 새는 개수  N, 테이프 길이 L
// 둘째줄에, 새는 곳 위치가 주어짐
// N < 1000, L < 1000이며 물이 새는 곳 위치 <= 1000 자연수
const fs=require('fs');
const input= fs.readFileSync('input.txt').toString().trim().split('\n');

const[N, L]=input[0].split(' ').map(Number);
const place=input[1].split(' ').map(Number).sort((a,b)=>a-b);

let ans=1;
let start=place[0]; // 1
for(let i=1; i<N; i++){
    if(0.5 + place[i] + 0.5 - start > L){// 구멍난 사이의 길이가 L 보다 크다면
        ans++;
        start=place[i];//시작점 업데이트
    }
}

console.log(ans);