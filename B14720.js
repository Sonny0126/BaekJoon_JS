//첫째 줄 우유 가게의 수 N
// 0은 딸기우유, 1은 초코우유, 2는 바나나 우유
// 1. 맨 처음에는 딸기우유를 한 팩 마신다.
// 2. 딸기우유를 한 팩 마신 후에는 초코우유를 한 팩 마신다.
// 3. 초코우유를 한 팩 마신 후에는 바나나우유를 한 팩 마신다.
// 4. 바나나우유를 한 팩 마신 후에는 딸기우유를 한 팩 마신다.

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input[0]);
const milk = input[1].split(' ').map(Number);

let cnt = 0;
let currentMilk = 0; // 현재 마셔야 할 우유 (0부터 시작)

for (let i = 0; i < N; i++) {
  if (milk[i] === currentMilk) { // 순서대로 마실 수 있는 경우
    cnt++;
    currentMilk = (currentMilk + 1) % 3; // 다음 마셔야 할 우유 변경 (0 → 1 → 2 → 0)
  }
}

console.log(cnt);
