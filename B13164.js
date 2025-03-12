// 첫 줄에 유치원 수 N, 조의 개수 K
// N개의 수만큼 공백으로 주어짐
// 조원 최소 1, 최대 N/K
//비용 = 가장 큰 원생과 가장 키가작은 원생의 키 차이만큼 든다

// 7 2
// 10 9 8 5 4 3 2
// 10 9 8 , 5 4 3 2 -> (10-8) + (5-2) = 5(비용)
// 조 K개 만들려면 (K-1)번 끊어야 한다.
// 차이 오름차순 정렬 후, 가장 큰 키차이 제거

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const [N, K]=input[0].split(' ').map(Number);
const arr=input[1].split(' ').map(Number);

const dif=[];
for(let i=0; i< N-1; i++){
    dif.push(arr[i+1]-arr[i]);
}

//오름 차순 정렬
dif.sort((a,b)=> a-b);

let ans=0;

// N-1 차이 중에서 가장 큰 차이값인 (K-1)을 제거
for(let i=0; i< dif.length - (K-1); i++){
    ans+=dif[i];
}

console.log(ans);