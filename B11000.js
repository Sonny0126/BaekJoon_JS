// 처음값은 무조건 가능, 
// arr[0] -> 1,3 
// arr[1] -> 2,4
// arr[2] -> 3,5

const input = require("fs")
  .readFileSync('')
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const N = Number(input[0]);
  const Arr = [];

  for (let i = 1; i <= N; i++) {
    const time = input[i];
    const [start, end] = time.split(" ").map(Number);
    Arr.push({ time: start, isStart: 1 }); // 1은 시작
    Arr.push({ time: end, isStart: -1 }); //-1은 종료
  }

  const sortedArr = Arr.sort((a, b) => {
    if (a.time === b.time) { 
      return a.isStart - b.isStart;
    }
    return a.time - b.time;
  });

  let maxcnt = 0;
  let curcnt = 0;
  for (const Arr of sortedArr) {
    if (Arr.isStart === 1) {//강의가 시작됬다면
      curcnt++;//++
    } 
    else {//강의가 끝났다면
      curcnt--;//--
    }
    maxcnt = Math.max(curcnt, maxcnt);//최대 값 출력
  }

  return maxcnt; //->최대로 사용된 강의실 개수 저장
}

console.log(solution(input));