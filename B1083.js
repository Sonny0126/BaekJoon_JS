//첫째줄 N
//둘째 줄 원소 주어짐
//배열 sort시 연속된 두개의 원소만, 
//교환은 많아봐야 s번
//사전순으로 가장 뒷서는 것을 출력

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const N=Number(input[0]);

let arr=input[1].split(' ').map(Number);

let S=Number(input[2]);

//N = 7, arr={10,20,30,40,50,60,70}, S=1

//버블정렬로 구하면 정렬된 겨로가가 가장 뒤가 아닐 경우가 있다
//선택 정렬처럼 가장 큰 숫자를 찾은 후, 버블정렬처럼 옆과 교환하는 방식으로 구현
let sortedix=0;

while(S >0 && sortedix < N-1){
  let max=sortedix;

  //sortedidx 이후 S번 이내에서 가장 큰 수를 찾는 과정
  for(let i=sortedix+1; i<sortedix+S+1 && i<N; i++){
    if(arr[max]>arr[i]) continue;
    if(arr[max]<arr[i]) max=i;
  } 

  //가장 큰 값을 앞으로 이동
  for(let i=max; i>sortedix; i--){
    let temp = arr[i];
    arr[i] = arr[i - 1];
    arr[i - 1] = temp;
    S--;
  }
  sortedix++;//정렬된 값은 제외하고 다시 찾기
}

console.log(arr.join(" "));