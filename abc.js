const x = [12, 37, 5, 42, 19];
const y = [28, 4, 33, 21, 50];
const z = [47, 13, 9, 36, 22];

//  위의 배열들 중 가장 큰 수를 출력하는 가장 간결한 코드를 작성해보세요.

const max=Math.max(...x,...y,...z);
console.log(max);