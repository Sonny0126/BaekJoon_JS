const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const T = Number(input[0]); // 테스트 케이스 개수
let idx = 1;

for (let t = 0; t < T; t++) {
  // N(책 개수)과 M(학생 수) 읽기
  const [N, M] = input[idx].split(" ").map(Number);
  idx++;

  let arr = [];
  for (let i = 0; i < M; i++) {
    let [a, b] = input[idx].split(' ').map(Number);
    arr.push({ a, b }); // 객체 형태로 저장
    idx++;
  }

  //가장 빨리 마감되는 범위를 먼저 처리하면 더 많은 학생에게 책을 배정할 수 있다.
  arr.sort((x, y) => x.b - y.b);

  let assigned = new Array(N + 1).fill(false);
  let maxStudent = 0;

  for (let { a, b } of arr) {
    for (let book = a; book <= b; book++) {
      if (!assigned[book]) { //배정되지 않았다면 배정하고 개수 증가
        assigned[book] = true;
        maxStudent++;
        break;
      }
    }
  }

  console.log(maxStudent);
}
