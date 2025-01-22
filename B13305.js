//주유소
//첫번째 도시 개수
//왼쪽부터 N자연수로 제시
//제일 왼쪽 도시부터, 오른쪽 도시까지
//제일 왼쪽에서 오른쪽 도시로 이동하는 최소 비용
//둘쨰줄 도로 길이
//셋쨰줄  주유소 가격

//최소가 나올려면 거리 x 주요소 값이 제일 싼데에서
//목적지까지의 값을 다 넣어버리기

let fs=require('fs');
let input=fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let num = input[0];
let distance=[];
let price=[];

//거리 입력
distance=input[1].split(' ').map(v => BigInt(v));
//주유소 리터가격 값 입력력
price=input[2].split(' ').map(v=> BigInt(v));

// console.log('num:', num);
// console.log('거리(dis):', dis);
// console.log('리터(liter):', liter);

let curprice=price[0];
let sum= 0n;
for(let i=0; i<num-1; i++){
    //현재 위치한 주유소보다 기름값이 더 저렴한 가장 가까운 주유소 찾기
    //더 저렴한 주유소까지만 갈 수 있는 연료를 현재 위치한 주유소에서 주유하고, 그 주유소까지 간다
    //이 과정을 반복
    sum += curprice * distance[i];
    if(curprice > price[i+1]){
        curprice=price[i+1];
    }
}

console.log(String(sum));