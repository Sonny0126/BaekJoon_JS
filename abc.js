const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');
const n = Number(input[0]);
const arr=input[1].split(' ').map(Number);

const ans = new Array(n).fill(null);

for(let i=0; i<n; i++){
    let position = arr[i];
    let cnt=0;
    for(let j=0; j<n; j++){
        if(ans[j]===null){
            if(cnt===position){
                ans[j]=i+1;
                break;
            }
            cnt++;
        }
    }
}

console.log(ans.join(' '));