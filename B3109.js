//첫째 줄 R,C
// R개 줄에 빵집 근처 모습이 주어짐
// '.'은 빈 칸이고, 'x'는 건물이다.
// 처음과 마지막칸은 항상 비어있다.
//겹침 X, 접합 X
// ->, -/->, -\->

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);

// 2차원 배열로 지도 구성
const map = input.slice(1, R + 1).map(line => line.split(''));

// 방문 여부를 체크할 배열 생성
const visited = Array.from({ length: R }, () => Array(C).fill(false));

let cnt = 0;

// 각 행을 순차적으로 검사하여 파이프라인을 설치
for (let i = 0; i < R; i++) {
    let j = 0;  // 첫 번째 열에서 시작
    let success = false;  // 성공 여부 체크

    while (j < C - 1) {  // 마지막 열에 도달할 때까지 이동
        if (map[i][j] === 'x') break;  // 건물에 부딪히면 중단

        // 오른쪽 위로 이동 (대각선 위)
        if (i > 0 && map[i - 1][j + 1] === '.' && !visited[i - 1][j + 1]) {
            visited[i - 1][j + 1] = true;  // 경로를 방문 처리
            i--;  // 행 이동
            j++;  // 열 이동
        }
        // 오른쪽으로 이동
        else if (map[i][j + 1] === '.' && !visited[i][j + 1]) {
            visited[i][j + 1] = true;  // 경로를 방문 처리
            j++;  // 열만 이동
        }
        // 오른쪽 아래로 이동 (대각선 아래)
        else if (i < R - 1 && map[i + 1][j + 1] === '.' && !visited[i + 1][j + 1]) {
            visited[i + 1][j + 1] = true;  // 경로를 방문 처리
            i++;  // 행 이동
            j++;  // 열 이동
        }
        else {  // 이동할 곳이 없으면 중단
            break;
        }

        // 마지막 열에 도달한 경우 성공
        if (j === C - 1) {
            success = true;
            break;
        }
    }

    if (success) {
        cnt++;  // 파이프라인 설치 성공 시 카운트
    }
}

console.log(cnt);  // 최종 결과 출력

