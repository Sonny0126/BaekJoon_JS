const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const [R, C] = input[0].split(' ').map(Number);

//map을 만들기
const map=input.slice(1, R+1).map(line => line.split(''));
const move=[[-1,1],[0,1],[1,1]];
let cnt=0;

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

for(let i=0; i<R; i++){
    if(dfs(i,0)){
        cnt++;
    }
}

console.log(cnt);