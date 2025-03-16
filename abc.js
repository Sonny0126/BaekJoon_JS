const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const N=Number(input[0]);
let line=1;
let flowers=[];

for(let i=0; i<N; i++){
    const [startMonth, startDay, endMonth, endDay]=input[line].split(' ').map(Number);
    line++;
    flowers.push([startMonth, startDay, endMonth, endDay]);
}

//정렬
flowers.sort((a,b)=> {
    if(a[0]!==b[0]) return a[0]-b[0];//일찍 피는 순
    if(a[1]!==b[1]) return a[1]-b[1];//일찍 피는 순
    if(a[2]!==b[2]) return b[2]-a[2];//늦게 지는 순
    return b[3]-a[3];//늦게 지는 순
})

let curMonth=3;
let curDay=1;
let lastMonth=11;
let lastDay=30;
let idx=0;
let maxEndMonth=0, maxEndDay=0;

while(curMonth<lastMonth || (curMonth===lastMonth && curDay < lastMonth)){
    let found =false;

    while(idx<N){
        let[sMonth, sDay, eMonth, eDay]=flowers[idx];
        
        // 3/1보다 늦는다면 멈추기
        if(sMonth>curMonth || (sMonth===curMonth && sDay >curDay))
            break;
        
        // 3/1 이전이면서, 가장 늦는것
        if(eMonth > maxEndMonth || (eMonth === maxEndMonth && eDay> maxEndDay)){
            maxEndMonth=eMonth;
            maxEndDay=eDay;
            found=true;
        }
        idx++;
    }
    //못 찾은 경우
    if(!found){ 
        console.log(0);
        return;
    }

    //찾은 경우
    curMonth=maxEndMonth;
    curDay=maxEndDay;
    cnt++;

    if(curMonth> lastMonth || (curMonth===lastMonth || curDay > lastDay)) break;
}

console.log(cnt);