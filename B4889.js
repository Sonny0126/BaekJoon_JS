//1. 빈 문자열 안정
//2. S가 안정적이면, {S}도 안정적
// 입력의 마지말줄은 '-'가 주어짐
// 테스트 케이스 대해서, 번호, 입력, 안정적으로 바꾸는데 필요함

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split("\n");


for(let i=0; i<input.length; i++){
  if(input[i][0]==='-') break;
  let cnt=0;
  let arr=[];
  input[i]=input[i].split('');
  //값 입력
  for(let j of input[i]){
    if(j==='{') arr.push(j);
    else if(j==='}'){
      if(arr[arr.length-1]==='{')
        arr.pop();
      else
        arr.push(j);
    }
  }

  const len=arr.length;
  for(let k=0; k<len; k++){
    if(k%2=== 0 && arr[k]==='}'){// k가 짝수인데 } 라면, { 로 바꿔야 안정적
      cnt++;
    }
    else if(k%2===1 && arr[k]==='{')//k가 홀수인데, { 라면, } 로 바꿔야 안정적적
      cnt++;
  }
  console.log(`${i+1}. ${cnt}`);
}