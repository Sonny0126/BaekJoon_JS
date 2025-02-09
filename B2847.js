//첫째 줄 N
//다음 줄 N개 줄에 얻는 점수가 첫번째 레벨부터, 마지막 레벨까지
//레벨을 클리어할 때 얻는 점수가 주어질 때, 몇 번 감소시키면 되는지 구하는 프로그램
//1만큼 감소시키는것이 1번, 복수 정답인 경우 점수를 내리는 것 최소로

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split("\n");
// 5 3 7 5 -> 2 3 4 5 
// -3 -3 = -6 -> 6
// 5 5 5 -> 3 4 5
// -2 -1 = -3  -> 3
const num=Number(input[0]);
const arr=[];
for(let i=1; i<=num; i++){
    arr[i-1]=Number(input[i].trim());
}

let cnt=0;
let len = arr.length-1;
for (let i = len; i > 0; i--) {
    // 뒤에서부터 비교
    if (arr[i] <= arr[i - 1]) {  // 뒤에 있는 놈이 앞에 놈보다 작다면
        while (arr[i] <= arr[i - 1]) {  // arr[i]가 arr[i-1]보다 커질 때까지 증가
            arr[i-1] --;
            cnt++;
        }
    }
}

console.log(cnt);