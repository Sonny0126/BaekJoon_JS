const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const [N, M]=input[0].split(' ').map(Number);
const DNAs=[];
const alpha=['A','C','G','T'];
let str="";
let distance=0;

for(let i=0; i<N; i++){
    DNAs.push(input[i+1].trim());
}

for(let i=0; i<M; i++){
    const cnt=[0,0,0,0];
    for(const DNA of DNAs){
        if(DNA[i]==='A'){
            cnt[0]++;
        }
        else if(DNA[i]==='C'){
            cnt[1]++;
        }
        else if(DNA[i]==='G'){
            cnt[2]++;
        }
        else if(DNA[i]==='T'){
            cnt[3]++;
        }
    }

    const maxcnt=Math.max(...cnt);
    const index=cnt.indexOf(maxcnt);

    str +=alpha[index];
    distance += N-maxcnt;
}

console.log(str);
console.log(distance);