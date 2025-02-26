//첫째 줄에 DNA수 N, 문자열의 길이 M
//둘째줄 Hamming Distance의 합을 출력
// Hamming Distance란 길이가 같은 두 DNA가 있을 때, 
// 각 위치의 뉴클오티드 문자가 다른 것의 개수이다.
//  만약에 “AGCAT"와 ”GGAAT"는 첫 번째 글자와 
//  세 번째 글자가 다르므로 Hamming Distance는 2이다.

const { count } = require('console');
const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const [N, M]=input[0].split(' ').map(Number);
const DNAs=[];
const alpha=['A', 'C', 'G', 'T'];
let str="";
let distance=0;

for(let i=0; i<N; i++){
    DNAs.push([...input[i+1].trim()]);
}

for(let i=0; i<M; i++){
    const cnt=[0, 0, 0, 0];
    for(const DNA of DNAs){
        if(DNA[i]==='A')
            cnt[0]++;
        else if (DNA[i]==='C')
            cnt[1]++;
        else if (DNA[i]==='G')
            cnt[2]++;
        else if (DNA[i]==='T')
            cnt[3]++;
    }
    const maxcnt=Math.max(...cnt);
    const index=cnt.indexOf(maxcnt);

    str += alpha[index];
    distance += N - maxcnt; // N-maxcnt는 나머지 2개 문자 남음
}

console.log(str);
console.log(distance);