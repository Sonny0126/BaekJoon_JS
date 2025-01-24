//N을 입력받는데, 숫자를 조합해서, 원하는 숫자들을 섞어
//30의 배수가 되는 가장 큰 수를 만들려고 한다.
//없다면 -1을 출력

let fs=require('fs');
let input=fs.readFileSync('/dev/stdin').toString().trim()

let num_arr=input.split('').map(Number);

//이제 얻은 이 값들을 잘 조합해서 30의 배수를 만들어야 한다.

function find30(input){
    //0이 없는 경우 걸러내기
    if(!num_arr.includes(0)){
        return -1;
    }

    //30의 배수중 최대값을 수 조합을 통해 얻기
    //자릿수의 합이 3의 배수가 아니면, 30의 배수를 만들 수 없다
    let sum=num_arr.reduce((acc, cur) => acc+cur); 
    if(sum%3 !==0){
        return -1;
    }

    num_arr.sort((a,b)=> b-a);

    return num_arr.join('');
}

console.log(find30(input));
