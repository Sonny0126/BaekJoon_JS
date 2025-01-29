const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const num=Number(input[0]);
const arr=[];

for(let i=1; i<=num; i++){
    const time = input[i];
    const[start, end]=time.split(' ').map(Number);
    arr.push({time:start, isStart:1});
    arr.push({time:end, isStart: -1});
}

const sortedArr = arr.sort((a,b) => {
    if(a.time===b.time){
        //시간이 같을 경우
        return a.isStart - b.isStart;
    }
    return a.time - b.time;
})

let maxcnt=0;
let curcnt=0;

for(const arr of sortedArr){
    if(arr.isStart===1){
        curcnt++;
    }
    else{
        curcnt--;
    }
    maxcnt=Math.max(maxcnt, curcnt);
}

console.log(maxcnt);