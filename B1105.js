const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const [L, R]=input[0].split(' ').map(Number);

//L보다 크거나 같고, R보다 작거나 같은 자연수 중, 8이 가장 적게 들어있는 수에 들어있는 
// 8의 개수를 구하는 문제

function cnt8(num){
    let cnt=0;
    while(num>0){
        if(num%10===8) cnt++;
        num = Math.floor(num/10);
    }
    return cnt;
}

function min8(L, R){
    let mincnt=Infinity;
    for(let i=L; i<=R; i++){
        let cnt=cnt8(i);
        if(cnt===0) return 0;
        mincnt=Math.min(mincnt, cnt);
    }
    return mincnt;
}

console.log(min8(L, R));