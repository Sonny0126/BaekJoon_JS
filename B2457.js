//첫 줄에는 꽃들의 총 개수 N
//다음 N 줄에는 꽃이 피는 날짜, 지는 날짜 주어짐
// 3 8 7 31은 3/8 꽃 피어서 7/31일날 진다.
//꽃들의 최소 개수출력, 만약, 두조건을 만족하는 꽃 없으면 0 출력
// 조건 1 : 3/1 ~ 11/30 까지 매일 꽃이 한가지 이상 피게
// 조건2 : 정원이 넓지 않으므로, 정원에 시믄 꽃들의 수 최소로


const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const N=Number(input[0]);
let line =1;
const flowers=[];

for(let i=0; i<N; i++){
  const [startMonth, startDay, endMonth, endDay] = input[line].split(' ').map(Number);
  line++;
  flowers.push([startMonth, startDay, endMonth, endDay]);
}

flowers.sort((a,b)=> {
  if(a[0] !== b[0]) return a[0]-b[0];//더 일찍 피는 꽃
  if(a[1] !== b[1]) return a[1]-b[1];//더 일찍 피는 꽃
  if(a[2] !== b[2]) return b[2]-a[2]; //더 늦게 지는 꽃
  return b[3]-a[3];//더 늦게 지는 꽃
});

let cnt=0;
let curMonth=3, curDay=1;
let lastMonth=11, lastDay=30;
let idx=0;
let maxEndMonth=0, maxEndDay=0;

while(curMonth <lastMonth || (curMonth===lastMonth && curDay <= lastDay)){
  let found=false;

  // 현재 날짜보다 이전에 필 수 있는 꽃 중에서 가장 늦게 지는 꽃 선택
  while(idx<N){
    let[sMonth, sDay, eMonth, eDay]=flowers[idx];

    //현재 날짜보다 더 늦게 피는 꽃이면 중지
    if(sMonth > curMonth || (sMonth===curMonth && sDay > curDay)) break;

    //가장 늦게 지는 꽃을 선택
    if(eMonth > maxEndMonth || (eMonth === maxEndMonth && eDay > maxEndDay)){
      maxEndMonth=eMonth;
      maxEndDay=eDay;
      found=true;
    }

    idx++;
  }
  //현재 날짜보다 더 이어갈수있는 꽃이 없으면 0 출력
  if(!found){
    console.log(0);
    return;
  }

  //선택한꽃으로 날짜 갱신
  curMonth=maxEndMonth;
  curDay=maxEndDay;
  cnt++;

  //11월 30일 넘으면 종료
  if(curMonth > lastMonth || (curMonth===lastMonth && curDay > lastDay)) break;
}

console.log(cnt);