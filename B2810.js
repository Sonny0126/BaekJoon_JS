//첫째줄 좌석 수 N
//둘째줄 좌석의 정보
//S는 일반, L은 커플석
// *S*LL*LL*S*S*LL*
// *S*LL*S*LL*
// *LL*LL*
// LL이 겹쳐져 있으면 인원 -1
const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const N=Number(input[0]);
const seat=input[1].split('');
let cnt=0;
for(let i=0; i<N; i++){
  if(seat[i]==='L'){
    cnt++;
  }
}
if(cnt>=4){
let minus=Math.floor(cnt/2);
let ans=N-minus+1; //1을 더하는 이유는,  LLLL인 경우 *LL*LL* L이 4개인 경우이므로 4-(4/2)+1 해야 개수를 구하기 쉬워서
console.log(ans);
}
else
console.log(N);
