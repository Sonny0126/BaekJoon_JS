//BJ 11501
//세가지 행동 중 하나 실행
//1. 주식 하나 사기
//2. 원하는 만큼 주식을 팔기
//3. 아무것도 안하기

//날 별로 주식의 가격을 알려주면, 최대이익을 추출

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const T= Number(input[0]);

let line=1;

//arr 입력받기
for(let i=0; i<T; i++){
    const N=Number(input[line]);
    line++;

    const arr = input[line].split(' ').map(Number);
    line++;

    let max=-1;
    let sum=0;

    // 최대 이익을 볼 수 있도록 계산
    // 제일 비싼 놈 전까지는 다 더하기
    // 제일 비싼 뒤에 있는 값들은 그냥 들고 있기

    for(let j= N-1; j>=0; j--){
        if(arr[j]>max){
            max=arr[j];
        }
        else{
            sum += max-arr[j];
        }
    }
    console.log(sum);

}

/*

1   3   2   4   2
b   b   b   s   h -> +6

*/

