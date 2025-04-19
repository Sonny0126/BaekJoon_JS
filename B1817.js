const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
if (N === 0) {
    console.log(0);
    process.exit();
}

const arr = input[1].split(' ').map(Number);

let cnt = 1; // 최소 한 개의 박스가 필요하므로 1부터 시작
let weight = 0;

for (let i = 0; i < N; i++) {
    if (weight + arr[i] > M) {
        cnt++;
        weight = arr[i];
    } else {
        weight += arr[i];
    }
}

console.log(cnt);
