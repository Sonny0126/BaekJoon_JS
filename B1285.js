const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const board = input.slice(1).map(line => line.trim().split(''));

// 'H' => 0, 'T' => 1로 변환
const coinBoard = board.map(row => row.map(c => c === 'T' ? 1 : 0));

let minFlip = Infinity;

// 0 ~ 2^N-1: 가능한 모든 행 뒤집기 조합
for (let mask = 0; mask < (1 << N); mask++) {
  const flipped = [];

  for (let i = 0; i < N; i++) {
    // i번째 행을 뒤집는 경우
    if (mask & (1 << i)) {
      const flipR = coinBoard[i].map(cell => cell ^ 1); // 0 ↔ 1
      flipped.push(flipR);
    } else {
      // i번째 행은 그대로 사용 (복사본 생성)
      flipped.push([...coinBoard[i]]);
    }
  }

  let sumFlip = 0;

  // 각 열마다 T의 개수 세기
  for (let c = 0; c < N; c++) {
    let tCnt = 0;
    for (let r = 0; r < N; r++) {
      if (flipped[r][c] === 1) tCnt++;
    }

    // 열 기준 최소 뒤집기 수: Math.min(T 개수, H 개수)
    sumFlip += Math.min(tCnt, N - tCnt);
  }

  minFlip = Math.min(minFlip, sumFlip);
}

console.log(minFlip);
