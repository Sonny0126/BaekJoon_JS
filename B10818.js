let fs = require('fs');
//입력으로 공백을 구분하여 나눔 ex) "20 10 35 30 7"
let input = fs.readFileSync('/dev/stdin').toString().split('\n').trim();
let count = Number(input[0]);

let numberStr = input[1].split(' '); 
//numberStr은 배열의 각 요소를 숫자 타입으로 변환하는 함수
let numbers = numberStr.map(function(cur) {
    //map 메서드는 배열을 순회하며 함수를 각 요소(cur)을 Number()함수를 사용해 숫자 타입으로 변환
  return Number(cur);
});

let max = numbers[0];//첫번째 요소 max
let min = numbers[0];//첫번째 요소 min
for (let i = 1; i < count; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
  if (min > numbers[i]) {
    min = numbers[i];
  }
}
console.log(min, max);// 두 개의 값이 공백으로 구분되어 출력됨
// console.log(`${min} ${max}`); //두 값이 하나의 문자열로 결합

