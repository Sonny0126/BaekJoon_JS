const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const T = parseInt(input[0]);
let idx = 1;

for (let t = 0; t < T; t++) {
  const N = parseInt(input[idx++]);
  const start = input[idx++];
  const goal = input[idx++];

  let wToB = 0;
  let bToW = 0;

  for (let i = 0; i < N; i++) {
    if (start[i] === 'W' && goal[i] === 'B') wToB++;
    else if (start[i] === 'B' && goal[i] === 'W') bToW++;
  }

  console.log(Math.max(wToB, bToW));
}
