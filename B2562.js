let fs=require('fs');
let input =fs.readFileSync('/dev/stdin').toString().split('\n');

let numbers =[];
for(let i=0; i<9; i++){
    numbers.push(Number(input[i]));
}

let max=  -999;//첫번째 값 줘서 오류 발생 적절히 값 수정정
let idx = 0;

for(let i=0; i<9; i++){
    if(max<numbers[i]){
        max=numbers[i];
    }
}

for(let i=0; i<9; i++){
    if(numbers[i]===max){
        idx=i+1;
    }
}

console.log(max, idx);