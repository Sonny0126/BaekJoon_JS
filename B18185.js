// i번 공장에서 라면을 하나 구매한다(1 ≤ i ≤ N). 이 경우 비용은 3원이 든다.
// i번 공장과 (i+1)번 공장에서 각각 라면을 하나씩 구매한다(1 ≤ i ≤ N-1). 이 경우 비용은 5원이 든다.
// i번 공장과 (i+1)번 공장, (i+2)번 공장에서 각각 라면을 하나씩 구매한다(1 ≤ i ≤ N-2). 이 경우 비용은 7원이 든다.
//최소 비용으로 라면 구매하기

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const N=Number(input[0]);

let arr=input[1].split(' ').map(Number);

// 1개만 구입 3, 2개 구입 5, 3개 구입 7개

let cost = 0;

for (let i = 0; i < N - 2; i++) {
  // 예외 처리: 중간(i+1) 공장이 더 많으면 2개짜리 먼저
  if (arr[i + 1] > arr[i + 2]) {
    const two = Math.min(arr[i], arr[i + 1] - arr[i + 2]);
    arr[i] -= two;
    arr[i + 1] -= two;
    cost += two * 5;
  }

  // 그 다음 3개 묶음
  const three = Math.min(arr[i], arr[i + 1], arr[i + 2]);
  arr[i] -= three;
  arr[i + 1] -= three;
  arr[i + 2] -= three;
  cost += three * 7;
}

// 남은 2개 묶음
for (let i = 0; i < N - 1; i++) {
  const two = Math.min(arr[i], arr[i + 1]);
  arr[i] -= two;
  arr[i + 1] -= two;
  cost += two * 5;
}

// 남은 1개씩
for (let i = 0; i < N; i++) {
  cost += arr[i] * 3;
}

console.log(cost);