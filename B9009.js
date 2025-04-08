const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const T=Number(input[0]);

let fibo=[];
fibo.push(0);
fibo.push(1);

//10억 이하
while(fibo[fibo.length-1]<1e9){
  fibo.push(fibo[fibo.length-1]+fibo[fibo.length-2]);
}

for(let i=1; i<=T; i++){
  let tc=input[i];
  const res=[];
  let cnt=fibo.length-1;

  while(tc >0){
    if(tc >= fibo[cnt]){
      tc-=fibo[cnt];
      res.push(fibo[cnt]);
    }
    cnt--;
  }
  res.sort((a,b)=> a-b);
  console.log(res.join(' '));
}
