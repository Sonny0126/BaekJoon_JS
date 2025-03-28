const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const [N, L]=input[0].split(' ').map(Number);

let U=[];

for(let i=1; i<=N; i++){
    let [a,b]=input[i].split(' ').map(Number);
    U.push({start:a, end:b});
}
//정렬
U.sort((a,b)=>a.start-b.start);

let Nulcnt=0;
let lastU=0;//마지막 위치

for(let i=0; i<N; i++){
    let start=Math.max(U[i].start, lastU);
    let end=U[i].end;

    if(start>=end) continue;

    let len=end-start;
    let temp=Math.ceil(len/L);
    Nulcnt+=temp;
    lastU=start+temp *L;
}

console.log(Nulcnt);