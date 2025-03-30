//1. 바로 옆에 다른 색깔 볼이 있으면 그 볼들을 모두 뛰어넘어서 옮김
//2. 빨간색 볼 옮겼으면 다음에도, 빨간색 볼만 옮길수 있음
// 최소 이동 횟수 찾기
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input[0]);
const balls = input[1].trim().split('');

// // 빨간 공을 한쪽 끝으로 이동하는 경우
let moveR_right = 0; // 오른쪽 끝으로 이동
let moveB_right = 0; // 오른쪽 끝으로 이동

// 왼쪽에서 연속된 R을 제외한 나머지 R 개수
for (let i = N - 1; i >= 0; i--) {
  if (balls[i] === 'R') moveR_right++;
  else break;
}

// 왼쪽에서 연속된 B를 제외한 나머지 B 개수
for (let i = N - 1; i >= 0; i--) {
  if (balls[i] === 'B') moveB_right++;
  else break;
}

// 최소 이동 횟수 찾기
const result = Math.min(
  moveR_right, // 빨간 공을 오른쪽 끝으로 몰기
  moveB_right, // 파란 공을 오른쪽 끝으로 몰기
);

console.log(result);
