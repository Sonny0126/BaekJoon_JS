const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//첫번째 줄에서 N(바구니 개수)와 M(명령 개수)를 숫자로 변경해서 추출
const [N, M] = input[0].split(' ').map(Number);
// 초기 바구니 배열 생성[1, 2, ..., N]
let arr=[];
for(let i=1; i<=N; i++){
    arr.push(i);
}

for (let k = 1; k <= M; k++) {
    const [i, j] = input[k].split(' ').map(Number);
    
    // 바구니 배열의 i번째부터 j번째까지를 역순으로 만듭니다.
    // i-1부터 j까지의 부분 배열을 추출하고, reverse() 메서드로 순서를 뒤집습니다.
    arr = [
        ...arr.slice(0, i - 1),
        ...arr.slice(i - 1, j).reverse(), //설정한 부분만 역수
        ...arr.slice(j),
    ];
}

console.log(arr.join(' '));
