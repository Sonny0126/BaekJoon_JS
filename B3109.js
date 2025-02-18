const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [R, C] = input[0].split(' ').map(Number);

// 2차원 배열로 지도 구성
const map = input.slice(1, R + 1).map(line => line.split(''));

// 방향 우선순위 (오른쪽 위 -> 오른쪽 -> 오른쪽 아래)
const move = [[-1, 1], [0, 1], [1, 1]];
let count = 0;

// 깊이 우선 탐색(DFS) 함수
function dfs(r, c) {
    if (c === C - 1) return true; // 마지막 열 도착 시 성공

    for (let [x, y] of move) {
        let nr = r + x, nc = c + y;
        if (nr >= 0 && nr < R && map[nr][nc] === '.') {
            map[nr][nc] = 'x'; // 방문 처리
            if (dfs(nr, nc)) return true; // 성공 시 종료
        }
    }

    return false; // 경로가 없으면 실패
}

// 모든 행에서 첫 번째 열부터 시작하여 파이프 설치
for (let i = 0; i < R; i++) {
    if (dfs(i, 0)) count++; // DFS 성공하면 카운트 증가
}

// 최종 결과 출력
console.log(count);
