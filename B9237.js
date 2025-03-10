// 첫쨰줄 묘목의 수 N
// 둘쨰줄 나무가 자라는데 며칠 걸리는지 주어짐

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const N=Number(input[0]);

//모든 나무가 완전히 자란 이후에 이장님 초대
//답이 여러가지인 경우 최소값 출력

// 4
// 4 3 3 2

// 1번 나무 1일쨰 심음 -> 5일 완전 성장
// 2번 나무 2일째 심음 -> 5일 완전 성장
// 3번 나무 3일쨰 심음 -> 6일 완전 성장
// 4번 나무 2일쨰 심음 -> 6일 완전 성장
// 완전성장 다음날 이장님 초대 날이므로  n + 1

const tree=input[1].split(' ').map(Number).sort((a,b)=> b-a);

let lastday=0;
for(let i=0; i<N; i++){
    let newday= (i+1) + tree[i];
    if(lastday < newday){
        lastday= newday
    }
}

console.log(lastday+1);