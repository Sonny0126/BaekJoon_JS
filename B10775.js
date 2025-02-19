//첫째 줄에 게이트 수 G
//둘째 줄에 비행기 수 P
//p개수만큼 출력
//비행기가 어느 게이트에도 도킹할 수 없다면 종료

const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const G=Number(input[0]);
const P=Number(input[1]);
const parent=new Array(G+1).fill(0).map((_, i)=> i); 
//map이 작동하려면 초기값 필요해서 fill(0)을 사용한것
//이 방법대로라면 자기자신의 값을 가진 배열 parent생성

function find(x){
    if(parent[x]===x) //나 자신을 찾으면 값 반환
        return x;
    return parent[x]=find(parent[x]);//아니라면 찾을때까지
}

function union(a,b){
    let rootA=find(a);
    let rootB=find(b);
    parent[rootA]=rootB;
}

let cnt=0;

for(let i=2; i<P+2; i++){
    let gate=Number(input[i]);
    let dockgate=find(gate);
    if(dockgate===0)
        break;
    union(dockgate, dockgate-1);
    cnt++;
}

console.log(cnt);
