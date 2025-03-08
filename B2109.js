//첫째 줄 n주어짐
//다음 줄 부터 각 대학의 p, d 주어짐
// d일안에 강연 하면 p만큼 강연료 지불, 최대 벌수 있는 돈 출력

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const n=Number(input[0]);
const arr=[];

for(let i=0; i<n; i++){
    const[p,d]=input[i+1].split(' ').map(Number);
    arr.push({ pay: p, day: d });
}

//1. 강연료 높은 순서대로 내림차순 정렬
arr.sort((a,b)=> b.pay-a.pay);

let dailymoney=new Array(10000).fill(0);

for(let i=0; i<n; i++){
    //2. 강연을 가능한 가장 늦은 날에 배치
    for(let j= arr[i].day-1; j >= 0; j--){
        if (dailymoney[j] === 0) {  // 빈 날짜가 있다면 배치
            dailymoney[j] = arr[i].pay;
            break;
        }
    }
}

//3. 총 수익을 계산
const ans = (arr) => arr.reduce((sum, cur) => sum + cur, 0);

console.log(ans(dailymoney));
