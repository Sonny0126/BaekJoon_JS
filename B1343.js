//폴리오미노 2개를 무한개만 큼 가진다
//  AAAA, BB
//이제 .과 X로 이루어진 보드판이 있을 떄, 
//겹침없이  X를 모두 폴리오미노로 덮으려고한다.
// .은 폴리오미노로 덮으면 안된다.

//첫쨰줄에, 사전순으로 가장 앞서는 답
//덮을수 없다면 -1 출력

const fs = require("fs").readFileSync("./input.txt", "utf8");
let input = fs.trim();

let board = input.replace(/XXXX/g, "AAAA").replace(/XX/g, "BB");

//변환하고, 만약 X가 남아있다면 홀수이므로 -1 출력
if (board.includes("X")) {
  console.log(-1);
} 
else {
  console.log(board);
}