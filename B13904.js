//d는 과제 마감일 남은 일수
//하루에 한과제
// 3 2 4 4 6
// 30 50 40 60 5 => 185

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const N = Number(input[0]);

const homework = input.slice(1).map(line => line.split(' ').map(Number));//
//(0줄은 제외) 1줄부터 끝까지 map을 통해배열로 변환


// 마감일 기준 내림차순 정렬
homework.sort((a, b) => b[0] - a[0]);

let sum = 0;
let left = []; // 선택 가능한 점수 저장 배열
let idx = 0;

for (let day = homework[0][0]; day > 0; day--) {
  // 현재 날짜에서 수행할 수 있는 과제 추가
  while (idx < N && homework[idx][0] >= day) {
    left.push(homework[idx][1]);
    idx++;
  }
  // 가장 높은 점수 선택
  if (left.length > 0) {
    left.sort((a, b) => b - a); // 내림차순 정렬
    sum += left.shift(); // 최고 점수 과제 선택
  }
}

console.log(sum);
