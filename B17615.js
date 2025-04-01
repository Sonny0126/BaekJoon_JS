//1. 바로 옆에 다른 색깔 볼이 있으면 그 볼들을 모두 뛰어넘어서 옮김
//2. 빨간색 볼 옮겼으면 다음에도, 빨간색 볼만 옮길수 있음
// 최소 이동 횟수 찾기

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input[0]);
const data = input[1].trim().split('');

let result = 500000;

// 빨간 공을 ⬅왼쪽으로 몰자 
let count = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i] !== "R") {
    while (i < data.length) {
      if (data[i] === "R") count += 1;
      i += 1;
    }
  }
}
result = count;

// 빨간 공을 ➡오른쪽으로 몰자
count = 0;
for (let i = data.length - 1; i >= 0; i--) {
  if (data[i] !== "R") {
    while (i >= 0) {
      if (data[i] === "R") count += 1;
      i -= 1;
    }
  }
}
result = Math.min(result, count);

// 파란 공을 ⬅왼쪽으로 몰자 
count = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i] !== "B") {
    while (i < data.length) {
      if (data[i] === "B") count += 1;
      i += 1;
    }
  }
}
result = Math.min(result, count);

// 파란 공을 ➡오른쪽으로 몰자
count = 0;
for (let i = data.length - 1; i >= 0; i--) {
  if (data[i] !== "B") {
    while (i >= 0) {
      if (data[i] === "B") count += 1;
      i -= 1;
    }
  }
}
result = Math.min(result, count);

console.log(result);