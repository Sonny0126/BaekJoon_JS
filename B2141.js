const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const [n, ...arr]=input;
const citypeople=arr.map(i=>i.split(' ').map(j=> +j));

function solution(n, citypeople){
    // 마을 위치 기준 정렬
    citypeople.sort((a, b) => a[0] - b[0]);

    // 전체 인구 수 계산
    const peopleCnt=citypeople.reduce((acc, cur)=> acc+cur[1], 0);
    let sum=0;

    // 인구의 절반 이상이 되는 지점 찾기
    for(let i=0; i<n; i++){
        sum+=citypeople[i][1];
        if(peopleCnt/2 <=sum) return citypeople[i][0];
    }

    return citypeople[citypeople.length-1][0];
}

const ans=solution(+n, citypeople); // 문자열 n을 숫자로 변환
console.log(ans);
