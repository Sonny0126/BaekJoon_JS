//N명 매일 아침 한 줄
//사람 수  N
//자신보다 키가 큰사람 왼쪽에 몇명 있었는지 기억
//사람들 키는 모두 다름

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');
const n=Number(input[0]);
const arr=input[1].split(' ').map(Number);

//null로 초기화시킨 ans 배열 생성
const ans = new Array(n).fill(null);

for(let i=0; i<n; i++){
    let position=arr[i];
    let cnt=0;
    for(let j=0; j<n; j++){
        if(ans[j]===null) { //자리가 비어있는 경우
            if(cnt===position){
                ans[j]=i+1;
                break;
            }   
            cnt++;
        }
    }
}

console.log(ans.join(' '));