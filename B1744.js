const input = require('fs').readFileSync('input.txt').toString().trim().split('\n'); 
const n = Number(input.shift());

const pos = [];  // 양수
const neg = [];  // 음수 및 0

// 수를 양수, 음수, 1로 분리
for (let num of input) {
    num = Number(num);
    if (num > 0) {
        pos.push(num); // 양수
    } else {
        neg.push(num); // 음수 및 0
    }
}

// 오름차순 정렬 (양수는 내림차순으로, 음수는 오름차순으로)
pos.sort((a, b) => b - a);
neg.sort((a, b) => a - b);

let ans = 0;

// 양수 처리
for (let i = 0; i < pos.length; i++) {
    if (i === pos.length - 1) {
        ans += pos[i]; // 마지막 하나는 더함
    } else if (pos[i] * pos[i + 1] > pos[i] + pos[i + 1]) {
        ans += pos[i] * pos[i + 1]; // 곱셈이 더 크면 곱함
        i++; // 한 번 더 진행
    } else {
        ans += pos[i] + pos[i + 1]; // 더하는 것이 더 크면 더함
        i++; // 한 번 더 진행
    }
}

// 음수 처리
for (let i = 0; i < neg.length; i += 2) {
    if (i === neg.length - 1) {
        ans += neg[i]; // 홀수 개 남으면 마지막 음수는 더함
    } else if (neg[i] === 0 || neg[i + 1] === 0) {
        // 0이 있을 경우 0을 곱해서 양수 효과를 낼 수 있으므로 추가
        ans += 0;
    } else {
        ans += neg[i] * neg[i + 1]; // 음수끼리 곱함
    }
}

console.log(ans);
