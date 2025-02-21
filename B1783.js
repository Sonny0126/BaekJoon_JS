//1. 2칸 위, 1칸 오른쪽
//2. 1칸 위, 2칸 오른쪽
//3. 1칸 아래, 2칸 오른쪽
//4. 2칸 아래, 1칸 오른쪽
//이동횟수 4칸 미만이 아니면, 이동 방법을 모두 한번씩 사용
//방문할 수 있는 최대 칸 출력

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number); // 숫자로 변환

if (N === 1) {
    console.log(1);
} 
else if (N === 2) {
    console.log(Math.min(4, Math.floor((M + 1) / 2))); // M 사용
} 
else if (M < 7) {
    console.log(Math.min(4, M)); // M 사용
} 
else {
    console.log(M - 7 + 5);
}
