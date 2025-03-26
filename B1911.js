//N개 물웅덩이, 덮는 길이 L
const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const [N, L]=input[0].split(' ').map(Number);

let U=[];

for(let i=1; i<=N; i++){
  let [a,b]=input[i].split(' ').map(Number);
  U.push({start: a, end:b});
}

U.sort((a,b)=> a.start-b.start);//오르차순 정렬
let Nulcnt=0;
let lastU=0;

for(let i=0; i<N; i++){
  let start=Math.max(U[i].start, lastU);
  let end=U[i].end;

  if(start >= end) continue;//이미 판자로 웅덩이를 덮은 경우

  let len=end-start;//웅덩이 길이
  let temp = Math.ceil(len/L);//ceil은 안에 있는수보다 큰 가장 작은 정수 출력
  Nulcnt += temp;//널빤지 개수 추가

  lastU=start+ temp * L;//마지막 거리 업데이트
}

console.log(Nulcnt);