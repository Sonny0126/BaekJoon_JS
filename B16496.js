// N 리스트 주어지면 가장 큰 수 구하기
const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const num=Number(input[0]);

let arr = input[1].trim().split(' ');

//문자열의 두가지 조합 중 큰 부분이 앞에, 작으면 뒤에 위치
arr.sort((a,b)=> b + a > a+ b ? 1 : -1);
let ans=arr.join('');

if(ans[0]==='0' || Number(ans)==='0')
  console.log('0');
else
console.log(ans);