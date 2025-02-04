//5와 6을 헷갈림
//A, B이 두숫자가 있을 때, 최소값과, 최대값을 출력

//최소는 6을 모두 5로
//최대는 5를 모두 6으로

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim();
const [A, B] = input.split(' ');

//문자열 변경불가하므로, replace()사용

// 5->6  => /5/는 숫자 5를 찾고, g는 모든 문자열에서 찾기
const maxA = A.replace(/5/g, '6');
const maxB = B.replace(/5/g, '6');
const max = Number(maxA) + Number(maxB);

// 6->5
const minA = A.replace(/6/g, '5');
const minB = B.replace(/6/g, '5');
const min = Number(minA) + Number(minB);

console.log(min, max);
