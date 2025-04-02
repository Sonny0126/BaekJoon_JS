//1. 빈 문자열 안정
//2. S가 안정적이면, {S}도 안정적
// 입력의 마지말줄은 '-'가 주어짐
// 테스트 케이스 대해서, 번호, 입력, 안정적으로 바꾸는데 필요함

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let cnt = 0;
let arr = [];
for (let i = 0; i < input.length; i++) {
  if (input[i][0] === "-") break;
  arr = [];
  cnt = 0;
  input[i] = input[i].split("");
  for (let j of input[i]) {
    if (j === "{") {
      arr.push(j);
    } else if (j === "}") {
      if (arr[arr.length - 1] === "{") {
        arr.pop();
      } else {
        arr.push(j);
      }
    }
  }

  const len = arr.length;
  for (let k = 0; k < len; k++) {
    if (k % 2 === 0 && arr[k] === "}") {
      cnt++;
    } else if (k % 2 === 1 && arr[k] === "{") {
      cnt++;
    }
  }
  console.log(`${i + 1}. ${cnt}`);
}