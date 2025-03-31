const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const num = Number(input[0]);

let arr = [];
for (let i = 1; i <= num; i++) {
    let [start, end] = input[i].split(' ').map(Number);
    arr.push([start, end]);
}

// 1️⃣ 시작 시간을 기준으로 정렬
arr.sort((a, b) => a[0] - b[0]);

let endTimes = []; // 강의 종료 시간을 저장하는 배열

for (let i = 0; i < num; i++) {
    let [s, e] = arr[i];

    // 2️⃣ 현재 강의실 중 가장 빨리 끝나는 강의실 찾기
    endTimes.sort((a, b) => a - b); // 종료 시간을 기준으로 정렬
    
    if (endTimes.length > 0 && endTimes[0] <= s) {
        // 가장 빨리 끝나는 강의실을 재사용 가능 -> 기존 강의실 갱신
        endTimes.shift(); 
    }
    
    // 3️⃣ 새 강의 종료 시간 추가
    endTimes.push(e);
}

console.log(endTimes.length);
