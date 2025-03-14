//첫째 줄 N
//다음 줄 현재상태 나타내는 숫자 N개
// 0은 꺼진 상태, 1은 켜진 상태를 의미
//i를 누르면 i-1, i+1 변환
//최소 횟수를 통해서 원하는 전구 만들기
// 000 -> 110-> 101 -> 010 

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const N = Number(input[0]);
const current = input[1].trim();
const target = input[2].trim();

// 스위치를 눌러야 하는 최소 횟수를 찾는 함수
function minSwitchPresses(N, current, target) {

    // 배열을 문자열로 변환 후 다시 숫자 배열로 변환
    let startArr = current.split('').map(Number);
    let Notbulb1 = [...startArr]; // 첫 번째 전구를 누르지 않는 경우
    let Yesbulb1 = [...startArr]; // 첫 번째 전구를 누르는 경우
    let targetArr = target.split('').map(Number);
    
    let pressCnt1 = 0;
    let pressCnt2 = 1; // 첫 번째 전구를 누르는 경우, 초기 카운트는 1

    // 첫 번째 전구를 누른 경우 초기 상태 변경
    Yesbulb1[0] = 1 - Yesbulb1[0];
    if (N > 1) 
      Yesbulb1[1] = 1 - Yesbulb1[1];
    
    //전구를 누르는 함수
    function pressSwitch(arr, i) {
        arr[i] = 1 - arr[i];
        if (i > 0) 
          arr[i - 1] = 1 - arr[i - 1];

        if (i < N - 1) 
          arr[i + 1] = 1 - arr[i + 1];
    }

    //각 전구를 확인하면서 필요한 경우 스위치 누르기
    for (let i = 1; i < N; i++) {
        if (Notbulb1[i - 1] !== targetArr[i - 1]) {
            pressSwitch(Notbulb1, i);
            pressCnt1++;
        }
        if (Yesbulb1[i - 1] !== targetArr[i - 1]) {
            pressSwitch(Yesbulb1, i);
            pressCnt2++;
        }
    }

    //최종적으로 목표 상태 도달했는지 확인
    const start = Notbulb1.join('') === target;
    const end = Yesbulb1.join('') === target;

    if (start && end) 
      //1번째 전구를 누르지 않은 경우와, 첫번째 전구를 누른경우를 비교하여 더 작은 횟수를 출력
      return Math.min(pressCnt1, pressCnt2);
    if (start) 
      return pressCnt1;
    if (end) 
      return pressCnt2;
    return -1;
}

// 함수 실행
console.log(minSwitchPresses(N, current, target));
