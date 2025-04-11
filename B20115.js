//첫째줄 에너지 드링크 수 N
//둘쨰줄 양 공백으로 주어짐
// 1. 임의의 서로 다른 두 에너지 드링크를 고른다.
// 2. 한쪽 에너지 드링크를 다른 쪽 에너지 드링크에 모두 붓는다. 단, 페인은 야근 후유증으로 인해 손이 떨려, 붓는 과정에서 원래 양의 절반을 바닥에 흘리게 된다.
// 3. 다 붓고 남은 빈 에너지 드링크는 버린다.
// 4. 1~3 과정을 에너지 드링크가 하나만 남을 때까지 반복한다.

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const N=Number(input[0]);

let arr=input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);

while (arr.length > 1) {

  const big=arr.pop();
  const small=arr.pop();
  const sum=big+small * 0.5;
  arr.push(sum);
}

console.log(arr[0]);