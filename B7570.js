// 1번 어린이를 제일 앞으로 보낸다. (5 2 4 1 3 → 1 5 2 4 3)
// 4번 어린이를 제일 뒤로 보낸다. (1 5 2 4 3 → 1 5 2 3 4)
// 5번 어린이를 제일 뒤로 보낸다. (1 5 2 3 4 → 1 2 3 4 5)
//어린이 한명을 제일 앞, 또는 뒤로 보낸다
//어린이의 수 최소값을 찾기

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');
const n=Number(input[0]);
const arr=input[1].split(' ').map(Number);

const pos = Array(n + 1); //각 번호의 인덱스 저장
arr.forEach((num, idx) => pos[num] = idx);

let maxlen = 1;
let len = 1;

// 번호가 1씩 증가하고, 위치도 뒤로 갈 때만 len 유지
for (let i = 2; i <= n; i++) {
    if (pos[i] > pos[i - 1]) len++;
    else len = 1;
    maxlen = Math.max(maxlen, len);
}

//최소 이동횟수 = 전체 - 가장 긴 연속 수열 길이
console.log(n-maxlen);
