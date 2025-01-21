//500, 100, 50, 10, 5, 1엔
//거스름돈 개수가 가장 적게 잔돈을 줌
//1000엔 지불
//잔돈의 개수 구하는 프로그램
//처음부터 큰돈으로 써보고 안되면 작은 돈
let fs=require('fs');
let input=fs.readFileSync('/dev/stdin')

const num = Number(input);
const total = 1000;
let change = total-num;

//거스름돈 단위
const per = [500, 100, 50, 10, 5, 1];
let exchange = 0;

for(let i=0; i<per.length; i++){
    if(change===0) 
        break;
    let coin = per[i];
    //Math.floor(x) -> x와 같거나 작은 정수 중 가장 큰 수 출력  
    // 현재 동전(coin)으로 최대 몇개를 사용할 수 있는지 계산
    let count = Math.floor(change/coin);
    exchange +=count;
    //나머지 계산
    change %=coin;
}

console.log(exchange);