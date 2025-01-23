/* 
첫째줄에 테스트 케이스 개수 T
둘쨰줄부터 N개 줄까지 서류심사 성적, 면접 성적 순위
1부터 N 위까지 동석 X
신입사원의 최대 인원수를 한줄에 하나씩 출력
*/

let fs=require('fs');
let input=fs.readFileSync('input.txt').toString().trim().split('\n');

let Tcase=Number(input[0]);

let curLine=1;

for(let i=0; i<Tcase; i++){
    let num = Number(input[curLine]);
    curLine++;

    let applicants=[];
    for(let j=0; j<num; j++){
        let[paper, interview]=input[curLine].split(' ').map(Number);
        applicants.push({paper, interview});
        curLine++;
    }


    applicants.sort((a,b)=> a.paper-b.paper);
    let cnt=0;
    let min=100001;

    for(let applicant of applicants){
        if(applicant.interview < min){
            cnt++;
            min=applicant.interview;
        }
    }

    console.log(cnt);
}
