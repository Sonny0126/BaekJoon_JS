//첫째줄 유제품 수 N
//둘째줄 부터 유제품 가격 C
//3개를 사면 가장 싼것 무료, 두개만 지불
//https://www.acmicpc.net/board/view/137718 <- Node.js 사용시 런타임에러가 발생한다면?

const fs=require('fs');
const input=fs.readFileSync(0, 'utf-8').trim().split('\n')

const N=Number(input[0]);

let price=[];

for(let i=1; i<=N; i++){
  price.push(Number(input[i]));
}

price.sort((a,b)=> b-a);

let money=0;
let cnt=Math.floor(N/3)+1;

for(let i=0; i<N; i+=3){
  money+=price[i];
  if(i+1 < N)
    money+=price[i+1];
}

console.log(money);