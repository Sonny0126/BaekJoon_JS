const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

let [N, K]=input[0].split(' ').map(Number);

let result=0;
let sum=0;

for(let i=1; i<=K; i++) 
    sum +=i;

// 합이 n보다 작은 경우 2번 조건 안됨
if(sum > N) 
    result--;
//공의 개수 충분
else {
    N -= sum;
    if(N % K ===0) result = K-1; //남은 공이 K로 똑같이 떨어지면 차이 K-1
    else result = K; // 균등하게 배분되지 않으면 일부 바구니에 공이 더많이 들어가서 차이 K
}

console.log(result);
