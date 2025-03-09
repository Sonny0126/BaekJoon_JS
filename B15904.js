//문자열이 주어지면, UCPC로 만들수 있는지 확인
//UCPC가 되면 "I love UCPC"출력
//아니라면 "I hate UCPC" 출력

//공백과 소문자 제거해서, UCPC가 나오는지 확인
const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim();

let str = input.split('').filter(char => char >= 'A' && char <= 'Z').join('');

const target = "UCPC";
let idx = 0;

for (let char of str) {
    if (char === target[idx]) {
        idx++; // 다음 문자를 찾아야 하므로 증가
    }
    if (idx === 4) break; // "UCPC"가 완성되면 종료
}

console.log(idx === 4 ? "I love UCPC" : "I hate UCPC");
