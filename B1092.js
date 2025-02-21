//첫째 줄 크레인 개수 N, N<=50
//둘째 줄 크레인의 무게 제한 주어짐
//셋째 줄에는 박스의 수 M이 주어짐
//넷째 줄에는 각 박스의 무게가 주어짐
//1분에 박스를 하나씩 배에 실을 수 있다.

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const N=Number(input[0]);
//크레인 무게 제한
crane=input[1].split(' ').map(Number);

const M=Number(input[2]);

// 박스의 무게
box=input[3].split(' ').map(Number);


//문제 풀이
function solution(n, crane, m, box){
    //내림차순 정리
    crane.sort((a,b)=>b-a);
    box.sort((a,b)=>b-a);
    let ans=0;

    if(Math.max(...box) > crane[0]) //box 배열의 최대값이 크레인 보다 큼
        return -1;

    while(box.length){
        for(let i=0; i<n; i++){
            for(let j=0; j<m; j++){
                if(crane[i]>=box[j]){
                    box.splice(j, 1);
                    break;
                }
            }
        }
        ans++;
    }
    return ans;
}

const ans=solution(N, crane, M, box);
console.log(ans);


