//첫째 줄 N, K
//둘째줄 N자리 숫자
//입력으로 주어진 숫자에서 K개를 지웠을 때 얻을 수 있는 가장 큰 수 출력
//ex) 4 2 1924
// -> 94
const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

let [N, K]=input[0].split(' ').map(Number);
// console.log(N);
// console.log(K);
let num=input[1].split('');

let stack=[];
let delcnt=0;

for(let i=0; i<N; i++){
  while(stack.length>0 && stack[stack.length-1] < num[i] && delcnt<K){
    stack.pop();
    delcnt++;
  }
  stack.push(num[i]);
}

//K개 다 못지우면 뒤에서 삭제
while(delcnt <K){
  stack.pop();
  delcnt++;
}

console.log(stack.join(''));