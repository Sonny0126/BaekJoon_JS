const readline = require('readline');

function solution(num){
    for(let i=1; i<=num; i++){
        console.log('*'.repeat(i));
    }
}

//입출력을 처리하는 인터페이스 생성
const rl =readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});

//'line'이벤트는 사용자가 입력을 완료하고 엔터를 치면 발생
rl.on('line', line => {
    const num = Number(line.trim());
    solution(num);
    rl.close();
})