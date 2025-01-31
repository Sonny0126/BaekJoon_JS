//카운터에서 일함
//2원, 5원짜리로 거스름돈 달라함
// 동전의 개수가 최소가 되게 해야한다
const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim();
const num=Number(input);

let cnt2=0;
let cnt5=0;

let ans = 0;
let sum =num;

while(sum>=0){
    if(sum%5===0){
        cnt5 = sum /5;
        console.log(cnt2+cnt5);
        return;
    }
    sum -= 2;
    cnt2++;
    
}

console.log(-1);