//첫쨰 줄 사람 수 N, 
//둘쨰 줄 각 사람 돈 인출하는데 걸리는 시간 
// 3 1 4 3 2
// 1 2 3 3 4
// 1+3+6+9+13 = 32 최소값

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);
const arr=[];
//arr배열에 ' '으로 input[1]에 있는 값들을 저장
arr.push(...input[1].split(' ').map(Number));

for(let i=0; i<num-1; i++){
    for(let j=i+1; j<num; j++){
        if(arr[i]>arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}

// for(let i=0; i<num; i++){
//     console.log(arr[i]);
// }


// 1 2 3 3 4
let sum=0;
for(let i=0; i<num; i++){
    //arr[0]
    //arr[0]+arr[1]
    //arr[0]+arr[1]+arr[2]
    for(let j=0; j<i+1; j++){
        sum +=arr[j];
    }
}

console.log(sum);