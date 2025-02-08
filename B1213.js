//팰린드롬
//영어이름 -> 팰린드롬 변환
//팰린드롬은 순서를 거꾸로 해도 기존과 동일한 경우
//팰린드롬이 안되면 "I'm Sorry Hansoo" 출력
//정답이 여러가지인 경우, 사전순으로 앞서는 것을 출력

const fs = require('fs');

// 입력 파일에서 문자열을 읽어와서 배열로 변환
const input = fs.readFileSync('input.txt').toString().trim().split('');

const charCnt = {}; // 문자별 개수를 저장할 객체

// 문자열에서 각 문자 개수를 세기
for (let char of input) {
    if (charCnt[char] === undefined) {
        charCnt[char] = 1; // 처음 등장하는 문자라면 1로 초기화
    } 
    else {
        charCnt[char] += 1; // 이미 있으면 1 증가
    }
}

// Object.keys(charCnt).sort()를 사용해 키(문자)를 사전순으로 정렬해서
// 일정한 순서로 출력하기 위해서
const sortedKeys = Object.keys(charCnt).sort(); 

// 홀수 개수의 문자가 몇 개인지 확인
let oddCnt = 0;
let center = ''; // 중앙에 위치할 문자
let halfStr = ''; // 절반을 구성할 문자열

for (let char of sortedKeys) {
    const cnt = charCnt[char];

    // 만약 문자 개수가 홀수이면, 중앙에 올 문자로 지정
    if (cnt % 2 === 1) {
        oddCnt++;
        center = char;
    }

    // 절반 문자열 구성 (나머지 절반은 반대로 붙이면 되므로)
    halfStr += char.repeat(Math.floor(cnt / 2));//횟수만큼 반복해서 더해주는 것 'a'.repeat(2)-> 'aa'
}

// 팰린드롬이 불가능한 경우 (홀수 개수 문자가 2개 이상이면 불가능)
if (oddCnt > 1) {
    console.log("I'm Sorry Hansoo");
} else {
    // 팰린드롬 문자열을 구성하여 출력
    const palindrome = halfStr + center + halfStr.split('').reverse().join('');
    console.log(palindrome);
}
