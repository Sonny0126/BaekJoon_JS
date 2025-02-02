const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('');

//문자열 개수 체크
const strCnt={};
//펠린드롬이 될 수 있는지 확인
for(char of input){
    if(strCnt[char]===undefined){
        strCnt[char]=1;
    }
    else{
        strCnt[char]++;
    }
}

const sortedKeys= Object.keys(strCnt).sort();

let oddcnt=0;
let center='';
let leftstr='';

for (let char of sortedKeys){
    const cnt = strCnt[char];
    //홀수
    if(cnt %2===1){
        oddcnt++;
        center=char;
    }
    leftstr += char.repeat(Math.floor(cnt/2));
}
if(oddcnt>1){
    console.log("I'm Sorry Hansoo");
}
else{
    let ans = leftstr + center + leftstr.split('').reverse().join('');

    console.log(ans);
}

