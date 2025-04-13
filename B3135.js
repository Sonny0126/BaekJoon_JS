//첫 줄에 A,B
// 정수 N
// 지정된 주파수 주어짐
// 첫 번째 버튼은 주파수를 1MHz 증가시킨다.
// 두 번째 버튼은 주파수를 1MHz 감소시킨다.
// 나머지 N개의 버튼은 즐겨찾기 기능으로, 미리 지정된 주파수로 이동한다.

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const [A,B]=input[0].split(' ').map(Number);
let N=Number(input[1]);

let channel=[];
for(let i=2; i<N+2; i++){
  channel.push(Number(input[i]));
}

let ans=Math.abs(A-B);

for (let i = 0; i < N; i++) {
  const move = Math.abs(channel[i] - B);
  const press = 1 + move; // 즐겨찾기 + 이동
  ans = Math.min(ans, press);
}

console.log(ans);