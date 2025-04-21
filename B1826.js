const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input[0]);
let stations = [];

for (let i = 1; i <= N; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  stations.push({ dist: a, fuel: b });
}

let [L, P] = input[N + 1].split(' ').map(Number);

// 거리순 오름차순 정렬
stations.sort((a, b) => a.dist - b.dist);

let maxHeap = [];
let cnt = 0;
let idx = 0; // 주유소 인덱스

while (P < L) {
  // 현재 연료로 도달 가능한 주유소 전부 힙에 추가
  while (idx < N && stations[idx].dist <= P) {
    maxHeap.push(stations[idx].fuel);
    maxHeap.sort((a, b) => b - a); // 최대 힙처럼 동작
    idx++;
  }

  // 도달 가능한 주유소가 없음 → 실패
  if (maxHeap.length === 0) {
    console.log(-1);
    process.exit();
  }

  // 가장 연료 많은 주유소에서 주유
  P += maxHeap.shift();
  cnt++;
}

console.log(cnt);
