//과일을 1먹으면 길이가 1늘어남

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

let [N, L]=input[0].split(' ').map(Number);
let arr=input[1].split(' ').map(Number);
arr.sort((a,b)=> a-b);

for(let i=0; i<N; i++){    
    if(L>= arr[i]){
        L++;
    }
    else {
        break;
    }
}

console.log(L);