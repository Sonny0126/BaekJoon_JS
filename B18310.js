//첫쨰줄 집의 수 N
// 둘째줄 설치할 위치 
//거리의 총합이 최소가 되도록

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const n = Number(input[0]);
const house = input[1].split(' ').map(Number).sort((a, b) => a - b);

// 정렬된 집 위치에서 중앙값 선택
const houseidx = house[Math.floor((n - 1) / 2)];

console.log(houseidx);
