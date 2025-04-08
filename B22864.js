//A,      B,  C,            M
//피로도, 일, 줄어든 피로도, 피로도 최대
const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim()

const [A,B,C,M]=input.split(' ').map(Number);

let pirodo=0;
let work=0;

//하루에 최대 몇시간 일 <=24
for(let i=0; i<24; i++){
  if(pirodo + A <=M){
    pirodo+=A;
    work+=B;
  }
  else{
    pirodo-=C;
    if(pirodo<0) pirodo=0;
  }
}

console.log(work);