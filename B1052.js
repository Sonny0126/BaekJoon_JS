// 같은 양의 물병 두 개
//한 개의 물병에 다른 한쪽에 있는 물 다 부음
//  3 1 -> 1 1 1 -> 2 1 -> 횟수 3번 
// 12 3 -> 1 1 1 1 / 1 1 1 1 / 1 1 1 1 
// -> 2 2 / 2 2 / 2 2 -> 4 / 4 / 4 -> 8 / 4 -> 횟수 3번

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const [N, K]=input[0].split(' ');

// 1. 주어진 물병의 개수(N)을 이진수로 만든다.
// 2. 만든 이진수에서 1의 개수가 K보다 작거나 같다면 K개의 물병으로 
// 한 번에 옮길 수 있음.  
function dec2bin(num){
    let cnt=0;
    while(num>0){
        if(num%2===1)
            cnt++;
        // Math.trunc() 정적 메서드는 숫자의 소수 부분을 제거한 숫자의 정수 부분을 반환
        num=Math.trunc(num/2);
    }
    return cnt;
}

function cupCnt(cupNum, move){
    // 결과로 반환할 "이동 횟수"를 0으로 초기화
    let ans = 0;
    
    // 조건을 만족할 때까지 무한 반복
    while(true){
        // dec2bin 함수는 cupNum을 이진수 관련 값(예: 이진수의 자릿수 혹은 1의 개수 등)으로 변환합니다.
        let cnt = dec2bin(cupNum);
        
        // 만약 변환된 값(cnt)이 move 이하라면,
        // 현재까지의 이동 횟수(ans)를 반환하고 함수 종료
        if(cnt <= move){
            return ans;
        }
        
        // 조건에 만족하지 않으면, cupNum을 1 증가
        // 이동 횟수(ans)도 1 증가시킨 후 다시 검사
        cupNum++;
        ans++;
    }
}

console.log(cupCnt(N, K));