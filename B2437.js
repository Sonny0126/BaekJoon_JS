// N개의 저울추가 있다.
// 둘쨰 줄에는 무게추의 무게들을 입력받는다.
//측정할 수 없는 무게중 최솟값을 구해보시오.
const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const n=Number(input[0]);

const arr =input[1].trim().split(/\s+/).map(Number).sort((a,b)=> a-b);

// for(let i=0; i< n; i++){
//   console.log(arr[i]);
// }

//만들수 없는 최소값은, 0부터 숫자를 연속적으로 키워나가다가 더이상 만들수 없는 이전값 +1

let sum=0;
for(let i=0; i<arr.length; i++){
  if(sum+1< arr[i])
    break;
  sum+=arr[i];
}

console.log(sum+1);