const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 0; i < T; i++) {
    const n = Number(input[2 * i + 1]); // 카드 개수
    const word = input[2 * i + 2].trim().split(' '); // 카드들

    let str = [word[0]];// ["A"]배열

    for (let j = 1; j < n; j++) {
        if (word[j] <= str[0]) {
            str.unshift(word[j]);
        } else {
            str.push(word[j]);
        }
    }

    console.log(str.join(''));
}
