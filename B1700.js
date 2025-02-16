//첫 줄 구멍 개수 N, 전기 용품 총 사용횟수 K
// 전기용 품이름 K개 만큼, 사용순서대로
//하나의 플러그를 뺴는 최소의 횟수를 출력

// 2 7
// 2 3 2 3 1 2 7
//멀티탭 구멍 2개, 전기 용품7번 사용

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split("\n");
const [N,K] = input[0].split(' ').map(Number)
let data=[];
data = input[1].split(' ').map(Number)
const mulPlug = []
//중복이 있을 수 있어 아래와 같이 순회로 멀티탭 배열에 물건을 넣습니다.
while(mulPlug.length < N){
  const num = data.shift()
  if(!mulPlug.includes(num)){ //num이 포함되어있지 않다면
    mulPlug.push(num)//추가
  }
}
 
let answer = 0;

while(data.length !== 0){//비기 전까지
  const item = data.shift() //첫번째 요소 제거, 제거된 요소 반환
	//멀티탭에 꽂혀있는 물건이면 continue.
  if(mulPlug.includes(item)){
    continue;
  }
	//멀티탭에 꽂혀있는 물건이 이후 언제 다시 쓰이는지를 값으로 가지는 배열 order
  // 나중에 쓰이지 않는다면, 값으로 Infinity를 가집니다.
  const order = mulPlug.map((_,i) => [i,Infinity])
  for(let i=0; i<N; i++){
    const temp = mulPlug[i]
    for(let j=0; j<data.length; j++){
      if(data[j] === temp && order[i][1] > j){//현재 플러그와 같고, j가 기본값 보다 작다면
        order[i][1] = j //횟수 업데이트
      }
    }
  }
	//가장 늦게 사용되거나, 다시 사용되지 않는 물건을 골라서 플러그에서 뽑고, 새로운 item을 배열에 넣어줍니다.
  const change = order.sort((a,b)=>b[1]-a[1])[0][0]
  mulPlug[change] = item;
  answer++
}

console.log(answer)