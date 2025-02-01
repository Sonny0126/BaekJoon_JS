//P일중, L일만 사용가능, V일짜리 휴가 시작
// 캠핑장을 최대 며칠동안 사용 가능?
// 입력은 L, P, V
// 8일중 5일만 사용가능, 20일 휴가
//마지막 줄은 0 0 0이다.
const fs=require('fs');
const input= fs.readFileSync('input.txt').toString().trim().split('\n');
let cnt=0;
for(const arr of input){
    const[l, p, v]=arr.split(' ').map(Number);
    cnt++;

    //arr에서 p, l, v가 모두 0이라면 종료
    if(p===0 && l===0 && v===0){
        break;
    }

    let temp = Math.floor(v/p);
    let day = l* temp +  Math.min(v % p, l);
    console.log('Case ' + cnt + ': ' +day);
}
