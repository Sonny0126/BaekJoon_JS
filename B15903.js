//석환이는 응애야
// 1. x번카드, y번 카드 두장에 쓰여진 수 합
// 2. 계산한 값을 x번 카드와 y번카드 두장 모두에 덮어 쓴다
// m번하면 놀이 끝!
// 첫줄에 n, m주어짐
// 2, 3, 6
// 5, 5, 6

//가장 작은 점수 만들기

const fs = require("fs");
let input = fs.readFileSync('input.txt').toString().trim().split("\n");

class MinHeap {// idx = 1에 min value 저장
    constructor() {
      this.heap = [BigInt(0)];
    }
  
  // 삭제과정에서 부모가 자식보다 큰 경우 교체
  isBiggerThanChildren(idx) {
    // 자식이 존재하는지
    if (this.heap[2 * idx]) {
            return (
                this.heap[idx] > this.heap[2 * idx] ||
                this.heap[idx] > this.heap[2 * idx + 1]
            );
        } 
  
    else {
        return false;
    }
}

  
    swapValue(idx1, idx2) {
      [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
  
    insert(value) {
      this.heap.push(value);
  
      let currentIdx = this.heap.length - 1;
      let parentIdx = Math.floor(currentIdx / 2);
  
      while (currentIdx > 1 && this.heap[currentIdx] < this.heap[parentIdx]) {
        this.swapValue(currentIdx, parentIdx);
        currentIdx = parentIdx;
        parentIdx = Math.floor(currentIdx / 2);
      }
    }

    sum(){
        return this.heap.reduce((a, b) => a+b, BigInt(0));
    }
  
    remove() {
    // 최소 하나는 있는 경우 [0, value]인 경우
      if (this.heap.length > 1) {
      // [0, value] 인 경우 value 리턴
        if (this.heap.length === 2) return this.heap.pop();
  
        let removedVal = this.heap[1];
        this.heap[1] = this.heap.pop();
        let currentIdx = 1;
  
        // 우선 자식들이 부모보다 작은 경우
        while (this.isBiggerThanChildren(currentIdx)) {
            if ( this.heap[2 * currentIdx + 1] < this.heap[2 * currentIdx]) {
                // 오른쪽 자식이 존재하고, 오른쪽 자식이 왼쪽 자식보다 작은 경우
                if (this.heap[2 * currentIdx + 1] < this.heap[currentIdx]) {
                    this.swapValue(2 * currentIdx + 1, currentIdx);
                    currentIdx = 2 * currentIdx + 1;
                }
            } else {
                // 왼쪽 자식이 부모보다 작은 경우
                if (this.heap[2 * currentIdx] < this.heap[currentIdx]) {
                    this.swapValue(2 * currentIdx, currentIdx);
                    currentIdx = 2 * currentIdx;
                }
            }
        }
  
        return removedVal;
      } else return null;
    }
  }
  
let [N, M] = input.shift().split(' ').map(Number)
let arr = input.shift().split(' ').map(BigInt);
let pq = new MinHeap();

for(let i=0; i<arr.length; i++){
    pq.insert(BigInt(arr[i]))
}

while(M > 0){
    let first = pq.remove();
    let second = pq.remove();
    pq.insert(first+second);
    pq.insert(first+second);
    M--;
}
console.log(pq.sum().toString());