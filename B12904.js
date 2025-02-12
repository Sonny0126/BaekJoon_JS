//첫째 줄 S, 둘쨰 줄 T
// S를 T로 바꾸는 게임
// 문자열 뒤에서  A추가
// 문자열 뒤집고 뒤에 B 추가
// 만들수 있다면 1, 없다면 0 출력

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

let S= input[0];
let T= input[1];

// console.log(S);
// console.log(T);

//1 . 뒤에 A를 추가
//2. 문자열 뒤집고, B추가
// B-> BA -> ABB-> ABBA

while (T.length > S.length) {
    if (T[T.length - 1] === 'A') {
        T = T.slice(0, -1);
    } else if (T[T.length - 1] === 'B') {
        T = T.slice(0, -1).split('').reverse().join('');  
    }
}

if(T===S){
    console.log(1);
}
else{
    console.log(0);
}
