// 0과 1로이 루어진 행렬 A, 행렬 B 
// A->B 바꾸는데 필요한 연산의 횟수의 최솟값
// N, M  둘째 줄부터 N개의 줄에는 행렬 A
// 부분행렬의 원소를 뒤집는다
// M은 문자 길이
// 바꿀수 없다면 -1 출력
/*
0 0 0 0
0 0 1 0
0 0 0 0 //전체 0->1, 1->0
--------
1 1 1 1 // [] 부분 변환
1[1 0]1
1[1 1]1
--------
1 1 1 1
1 0 1 0
1 0 0 1
*/

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

// 2차원 배열 생성 함수
function arr2D(rows, columns) {
    return Array.from(Array(rows), () => Array(columns).fill(0));
}

// arr1, arr2 배열 생성
const arr1 = arr2D(n, m);
const arr2 = arr2D(n, m);

let idx = 1;
//입력받기
for (let i = 0; i < n; i++) {
    arr1[i] = input[idx].split('').map(Number);
    idx++;
}

for (let i = 0; i < n; i++) {
    arr2[i] = input[idx].split('').map(Number);
    idx++;
}

// 3x3 부분 반전 함수
function reverse(matrix, x, y) {
    for (let i = x; i < x + 3; i++) {
        for (let j = y; j < y + 3; j++) {
            matrix[i][j] = 1 - matrix[i][j]; // 0->1, 1->0 변환
        }
    }
}

// 배열 A를 B로 변환하는 함수
function changeArr(A, B) {
    let operations = 0;

    for (let i = 0; i <= n - 3; i++) {
        for (let j = 0; j <= m - 3; j++) {
            if (A[i][j] !== B[i][j]) {
                reverse(A, i, j);
                operations++;
            }
        }
    }

    // 변환 후 A와 B가 동일한지 확인
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (A[i][j] !== B[i][j]) {
                return -1; // 변환 불가능
            }
        }
    }

    return operations;
}

// 결과 출력
console.log(changeArr(arr1, arr2));
