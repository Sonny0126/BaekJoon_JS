// 회색(벌 있는 장소), 진한회색(벌통 있는 장소)
// 1. 두마리가 모두 지나간 장소에서 두 마리 모두 표시된양만큼 꿀 따기
// 2. 벌이 시작한 장소ㅗ에서는 어떤벌도 꿀 딸 수 없음
// 4 + 1 + 4 + 9 + 9 = 27
// 9 + 4 + 4 + 9 + 9 = 35

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const n = Number(input[0]);
const honey = input[1].split(' ').map(Number);
const sum = new Array(n + 1).fill(0);
let ans = 0;

for(let i=1; i<=n; i++){
  sum[i]=sum[i-1]+honey[i-1];
}

//1. 벌(0), 벌(i), 꿀통(n-1)
for(let i=1; i<n-1; i++){
  //전체 꿀에서 마지막 벌통 위치(n-1) 빼고, 벌2 위치(i)빼고 벌2 i까지 가면서 먹은 꿀(sum[i])더함
  // 
  ans=Math.max(ans, sum[n]-honey[n-1]-honey[i]+sum[i]);
}
//2. 벌(0), 꿀통(i), 벌(n-1)

for(let i=1; i<n-1; i++){
  //벌1이 i까지 가면서 먹은 꿀(sum[i+1])에서 시작위치(0) 빼고, 벌2가 n-1에서 i까지 먹은 꿀(sum[i+1])에서 벌2 시작 위치(n-1)의 꿀을 제외
  ans=Math.max(ans, sum[i+1]-honey[0] + sum[n]-sum[i]-honey[n-1]);  
}
//3. 꿀통(0), 벌(i), 벌(n-1);
for(let i=1; i<n-1; i++){
  //전체 꿀에서 처음 벌통 위치 빼고 벌2(i)위치 빼고 벌2가 n-1까지 가면서 먹은 꿀(sum[n]-sum[i+1]을 더함)
  ans=Math.max(ans, sum[n]-honey[0]-honey[i]+sum[n]-sum[i+1]);
}

console.log(ans);
