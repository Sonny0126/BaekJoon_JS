// 식탁의 길이 N
// 사람 기준에서  K거리 이하에서 만큼가장 가까운 곳에 있는 햄버거 먹기

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split("\n");

const[N, K]=input[0].trim().split(' ').map(Number);

//H가 햄버거, P가 사람
const line=input[1].split('');
let cnt=0;

let curidx=0;

for(let i=0; i<N; i++){
  if(line[i]==='P'){//사람일 때
    let start=i-K; //왼쪽
    let end=i+K;//오른쪽
    for(let j=start; j<=end; j++){
      if(line[j]==='H'){//찾은경우
        line[j]='X'; //없음 처리
        cnt++;
        break;
      }
    }
  }
}

console.log(cnt);