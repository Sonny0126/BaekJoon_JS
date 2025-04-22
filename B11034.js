//캥거루 세마뤼
// 한번 움직일 떄, 바깥쪽 두 캥거루중 한마리가 다른 캥거루 사이로 점프
// 한 캥거루가 두마리 이상일 수는 없음
// 더이상 못 움직이게 하려면 서로 사이에 틈이 없어야함(연속적)

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split("\n");

let line=0;
while (line < input.length) {
  let [A, B, C] = input[line].split(' ').map(Number);

  // 항상 정렬된 상태로 유지
  const [a, b, c] = [A, B, C].sort((x, y) => x - y);

  // 최대 점프 횟수 = 가장 넓은 구간 - 1
  const maxJumps = Math.max(b - a, c - b) - 1;

  console.log(maxJumps);

  line++;
}
