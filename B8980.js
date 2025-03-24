/*
조건 1: 박스를 트럭에 실으면, 이 박스는 받는 마을에서만 내린다.
조건 2: 트럭은 지나온 마을로 되돌아가지 않는다.
조건 3: 박스들 중 일부만 배송할 수도 있다.
마을 수 N, 트럭 용량 C
M은 박스를 보내는 마을번호, < 받는 마을번호, 보내는 박스 개수
*/

// 차 크기 60
// 1 2 30 
// 1 6 40 
// 2 5 70
// 3 4 40
// 5 6 60

//1번 마을 30 + 30 -> 60
//2번 마을 60-30 +30 -> 60  (30개 전달)
//3번 마을 X
//4번 마을 60-40 -> 20 (40개 전달)
//5번 마을 20-20 + 60 -> 60 (20개 전달)
//6번 마을 (60개 전달) 
// 총 30 + 40 + 20 + 60 = 150

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split("\n");

const [N, C]=input[0].split(' ').map(Number);
const M=Number(input[1]);

let arr=[];

for(let i=2; i<2+M; i++){
  let [sendNum, recNum, cntNum] = input[i].split(' ').map(Number);
  arr.push({sendNum, recNum, cntNum});
}

//도착 마을 기준으로 정렬
arr.sort((a,b)=> a.recNum-b.recNum);

let capacity = new Array(N+1).fill(0);
let sumDelivered = 0;

for (let {sendNum, recNum, cntNum} of arr){
  //현재 구간에서 트럭이 최대로 실을수 있는 양 계산
  let maxLoad=cntNum;

  //도착 마을까지의 경로에서 가득 찬 상태 확인
  for(let i= sendNum; i<recNum; i++){
    //트럭 용량에서 현재 적재량 뺸
    maxLoad=Math.min(maxLoad, C-capacity[i]);
  }
  //적재 가능한 만큼 실음
  for (let i=sendNum; i<recNum; i++){
    capacity[i]+=maxLoad;
  }

  sumDelivered +=maxLoad;
}

console.log(sumDelivered);

