let fs=require('fs');
let input =fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num=Number(input[0]);

//둘째 줄 부터 데이터를 공백으로 분리
const numbers = input[1].split(' ').map(Number);

let max=0;
for(let i=0; i<num; i++){
    if(max<numbers[i]){
        max=numbers[i];
    }
}

let sum=0;
for(let i=0; i<num; i++){
    sum += numbers[i]/max * 100;
}

let avg=0;
avg= sum/num;
console.log(avg);