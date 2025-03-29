const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const N=Number(input[0]);
let farm=[];

for(let i=1; i<=N; i++){
    let[arrive, inspect]=input[i].split(' ').map(Number);
    farm.push({start:arrive, end:inspect});
}

farm.sort((a,b)=> a.start-b.start);


let cnt=0;
let lastEndtime=0;

for(let i=0; i<N; i++){
    if(farm[i].start>lastEndtime)
        cnt=farm[i].start;
    
    cnt+=farm[i].end;
    lastEndtime=cnt;   
}

console.log(cnt);
