//첫째 후보 N
//둘쨰 줄부터 기호 1번 ~N번
//매수해야할 인원의 최소 값
//다른 사람들 보다 득표수가 높아야함
const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const n = Number(input[0]);
const arr=[];

let index=1;
for(let i=0; i<n; i++){
  //반복
  //배열 중에 최대값을 찾아서, 최대값에서 -1을 한 값을, 내가 뽑기로 한 사람에게 +1
  //내가 뽑기로 한사람이 최대값이 될 떄까지
  //arr[0]에 input[2]들어감
  arr[i]=Number(input[index]);
  index++;
}

let cnt=0;

while(true){
  let max=Math.max(...arr);
  let maxcnt=arr.filter(v=> v === max).length; //최대값과 같은 값들로 배열을 만들고, 그 배열긔 길이가 1 즉, 최대값이 1개만 남은 경우
  if(arr[0]===max && maxcnt===1)
    break;

  let maxidx=arr.lastIndexOf(max);//최대값의 인덱스 위치 반환
  arr[maxidx]--;
  arr[0]++;
  cnt++;
}

console.log(cnt);