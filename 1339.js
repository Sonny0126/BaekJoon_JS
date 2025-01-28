const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/); 
const n = Number(input.shift()) //이렇게 하면 다시 0부터 받아도 됨 <- 기억
let arr = []; 
for(let i=0; i<n; i++){
    arr.push(input[i])
}
function solution(n, arr){
    let map = new Map();  //Map을 설정
    for(let word of arr){
        let cnt = 1
        for(let i=word.length-1; i>=0; i--){
            if(!map.has(word[i])){ //has는 주어진 키에 대한 요소의 존재여부를 true, flase로 알려줌
                //즉, 없는 경우에
                map.set(word[i], 0)// 0으로 키 값을 추가
            }
          map.set(word[i], map.get(word[i])+cnt)//get은 특정 요소 추출
            cnt *= 10 
        }
    }
    let answer = [...map.entries()]// key, value쌍을 출력
    answer.sort((a,b) => b[1] - a[1])
    let num = 9
    let totalSum = 0; 

    for(let [key, value] of answer){
        totalSum += value * num
        num--; 
    }
    return totalSum; 
}

console.log(solution(n, arr))