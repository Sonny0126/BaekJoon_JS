//배치된 말 중 임의의 2개의 말을 골라 서로의 위치를 바꾼다.
// 말 1개를 들어 뒤집어 놓아 색상을 변경한다.

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const T = Number(input[0]);

for (let t = 0; t < T; t++) {
  const N = Number(input[3 * t + 1]);
  const start = input[3 * t + 2].split('');
  const goal = input[3 * t + 3].split('');

  const visited = new Set();
  const queue = [[start, 0]];
  visited.add(start.join(''));

  while (queue.length) {
    const [curr, step] = queue.shift();
    const currStr = curr.join('');
    if (currStr === goal.join('')) {
      console.log(step);
      break;
    }

    // 조건 1: 모든 쌍 스왑
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const swapped = curr.slice();
        [swapped[i], swapped[j]] = [swapped[j], swapped[i]];
        const key = swapped.join('');
        if (!visited.has(key)) {
          visited.add(key);
          queue.push([swapped, step + 1]);
        }
      }
    }

    // 조건 2: 색상 뒤집기
    for (let i = 0; i < N; i++) {
      const flipped = curr.slice();
      flipped[i] = flipped[i] === 'W' ? 'B' : 'W';
      const key = flipped.join('');
      if (!visited.has(key)) {
        visited.add(key);
        queue.push([flipped, step + 1]);
      }
    }
  }
}
