//첫줄 N
// 부분집합 최대 크기 출력
const fs = require('fs')
const input = fs.readFileSync('input.txt').toString().trim().split('\n')

const N = Number(input.shift())
input.sort((a, b) => b.length - a.length) //단어 길이 역순 정렬
const output = []
for (const str of input) //돌면서 접두사인지 확인
  //즉, str이 어떤 문자열의 접두사가 되지 않을 때만 결과에 추가
  if (output.every(e => e.indexOf(str) !== 0)) output.push(str) 

  // 접두사 check
console.log(output.length)