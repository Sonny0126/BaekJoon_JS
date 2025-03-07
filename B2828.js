//첫째 줄 N, M 
//두래 줄 사과 개수 J
// 다음 J 줄부터는 사과가 떨어지는 위치
const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const [N, M]=input[0].split(' ').map(Number);
const J=Number(input[1]);
const arr = input.slice(2, 2 + J).map(Number); // 사과가 떨어지는 위치 배열

//M칸을 차지하는 바구니는 N칸 밖으로 나가면 안된다.
//사과를 모두 담을 수 있는 최소거리 
let left = 1;
let right = M;
let move = 0;

for (let i = 0; i < arr.length; i++) {
  const apple = arr[i];

  if (apple >= left && apple <= right) {
    // 바구니 안에 떨어지는 경우 이동 없음
    continue;
  } else if (apple < left) {
    // 사과가 바구니보다 왼쪽에 떨어지는 경우
    const dist = left - apple;
    left = apple;
    right -= dist; // 오른쪽도 함께 이동
    move += dist;
  } else {
    // 사과가 바구니보다 오른쪽에 떨어지는 경우
    const dist = apple - right;
    right = apple;
    left += dist; // 왼쪽도 함께 이동
    move += dist;
  }
}

console.log(move);
