//첫쨰 줄에 N, M
//둘째 줄부터 패키지(단품 6개짜리), 단품 가격
//적어도 N개를 사기위한 최소가격 구하기
const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

//줄과 개수 입력받기
const firstLine=input[0].split(' ');
const N=Number(firstLine[0]) 
const M=Number(firstLine[1])
// console.log(M);
// console.log(N);

const arr=[];
for(let i=1; i<=M; i++){
    const [Pprice, Sprice]=input[i].split(' ').map(Number);
    arr.push({ package: Pprice, single: Sprice});
}

//오름차순으로 정렬하여 제일 싼 패키지 가격 찾기
//패키지 가격이 같다면, 단품이 싼걸로
arr.sort((a,b)=> {
    if(a.package===b.package){
        return a.single-b.single;
    }
    return a.package-b.package;
});

// 가장 싼 패키지와 단품 가격 찾기
let minPackage = Infinity;
let minSingle = Infinity;

for (let i = 0; i < M; i++) {
    minPackage = Math.min(minPackage, arr[i].package);
    minSingle = Math.min(minSingle, arr[i].single);
}

// 최소 가격 계산
const case1 = Math.ceil(N / 6) * minPackage; // 패키지만 구매
const case2 = Math.floor(N / 6) * minPackage + (N % 6) * minSingle; // 패키지 + 낱개 조합
const case3 = N * minSingle; // 단품만 구매

const minprice = Math.min(case1, case2, case3);

console.log(minprice);