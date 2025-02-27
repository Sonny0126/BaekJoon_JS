// 첫째 줄 N
// 둘쨰 줄 주사위에 쓰여있는 수가 주어짐, A,B,C,D,E,F
// 주사위 N의 3승개를 가지고 있다.
// 5개쓰여있는 수의 합의 최솟값 출력

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const n = Number(input[0]);
let dice = input[1].split(' ').map(Number);

if (n === 1) {
    dice.sort((a, b) => a - b);
    dice.pop();
    console.log(dice.reduce((acc, cur) => acc + cur, 0));
    return;
}

let arr = [];
arr[0] = [dice[0], dice[5]].sort((a, b) => a - b);
arr[1] = [dice[1], dice[4]].sort((a, b) => a - b);
arr[2] = [dice[2], dice[3]].sort((a, b) => a - b);


// 1. 한 면만 보이는 경우 최솟값 계산
// 주사위의 1개 면만 보이는 경우는 가장 바깥쪽 면입니다.
// (n-2) * (n-2) → 꼭짓점을 제외한 중앙 평면 부분 개수
// 4 * (n-1) * (n-2) → 가장자리 부분 개수 (가장자리는 세로 + 가로 각각 (n-1)개씩 존재)

let minOne = (4 * (n - 1) * (n - 2) + (n - 2) * (n - 2)) * Math.min(...dice);
// 2. 두 면이 보이는 경우 최솟값 개수
// 모서리는 주사위의 두 면이 보이는 부분입니다.
// 모서리는 항상 4개 + (n-2)*4개가 존재합니다.
// 4 * (n-1) → 윗면과 아랫면 모서리
// 4 * (n-2) → 옆면 모서리
let minTwocnt = 4 * (n - 1) + 4 * (n - 2); 

// 3. 세 면이 보이는 경우 최솟값 계산
// 꼭짓점 부분 (항상 4개 존재)
// arr[0][0], arr[1][0], arr[2][0]은 마주보지 않는 면 중 최솟값만 남긴 조합
// [A, F], [B, E], [C, D] 중 최소값만 사용
let minThree = (arr[0][0] + arr[1][0] + arr[2][0]) * 4;

let min = Infinity;

// 두 면이 보이는 최솟값 찾기
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        if (i === j) continue;
        if ((i === 0 && j === 5) || (i === 5 && j === 0)) continue;
        if ((i === 1 && j === 4) || (i === 4 && j === 1)) continue;
        if ((i === 2 && j === 3) || (i === 3 && j === 2)) continue;

        let cur = dice[i] + dice[j];
        min = Math.min(min, cur);
    }
}

let minTwo = min * minTwocnt;
console.log(minOne + minTwo + minThree);

