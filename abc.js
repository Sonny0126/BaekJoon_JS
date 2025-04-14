// i번 공장에서 라면을 하나 구매한다(1 ≤ i ≤ N). 이 경우 비용은 3원이 든다.
// i번 공장과 (i+1)번 공장에서 각각 라면을 하나씩 구매한다(1 ≤ i ≤ N-1). 이 경우 비용은 5원이 든다.
// i번 공장과 (i+1)번 공장, (i+2)번 공장에서 각각 라면을 하나씩 구매한다(1 ≤ i ≤ N-2). 이 경우 비용은 7원이 든다.
//최소 비용으로 라면 구매하기

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const N=Number(input[0]);

let arr=input[1].split(' ').map(Number);

let coin=0;

//3개
for(let i=0; i<N-2; i++){

  //예외 경우 처리 (arr[i+1]>arr[i+1])
  if(arr[i+1]>arr[i+2]){//3개 처리가 아닌 2개처리
    let cnt=Math.min(arr[i], arr[i+1] - arr[i+2]);
    arr[i]-=cnt;
    arr[i+1]-=cnt;
    coin +=cnt *5;
  }

  let cnt=Math.min(arr[i], arr[i+1], arr[i+2]);
  arr[i]-=cnt;
  arr[i+1]-=cnt;
  arr[i+2]-=cnt;
  coin+=cnt*7;
}

//2개
for(let i=0; i<N-1; i++){
  let cnt=Math.min(arr[i], arr[i+1]);
  arr[i]-=cnt;
  arr[i+1]-=cnt;
  coin +=cnt *5;
}

//1개
for(let i=0; i<N; i++){
  coin +=arr[i] * 3;
}

console.log(coin);