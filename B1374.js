const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input[0]);
let arr = [];

for (let i = 1; i <= N; i++) {
    let [Gnum, Gstart, Gend] = input[i].split(' ').map(Number);
    arr.push({ num: Gnum, start: Gstart, end: Gend });
}

// 시작 시간 기준으로 정렬
arr.sort((a, b) => a.start - b.start);

class MinHeap {
    constructor() {
        this.heap = [null]; // 1-based index 사용
    }

    insert(item) {
        this.heap.push(item);
        let current = this.heap.length - 1;
        while (current > 1) {
            let parent = Math.floor(current / 2);
            if (this.heap[parent] > this.heap[current]) {
                [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]];
                current = parent;
            } else break;
        }
    }

    remove() {
        if (this.heap.length === 1) return null; // 빈 힙이면 종료
        if (this.heap.length === 2) return this.heap.pop(); // 원소 하나면 바로 pop

        const min = this.heap[1];
        this.heap[1] = this.heap.pop(); // 마지막 원소를 루트로 올림
        let current = 1;

        while (true) {
            let left = current * 2;
            let right = current * 2 + 1;
            let smallest = current;

            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest === current) break;

            [this.heap[current], this.heap[smallest]] = [this.heap[smallest], this.heap[current]];
            current = smallest;
        }
        return min;
    }

    getMin() {
        return this.heap.length > 1 ? this.heap[1] : null;
    }

    getSize() {
        return this.heap.length - 1;
    }
}

// 강의실 배정 알고리즘
let PQ = new MinHeap();
PQ.insert(arr[0].end); // 첫 번째 강의의 종료 시간을 넣음

for (let i = 1; i < arr.length; i++) {
    if (arr[i].start >= PQ.getMin()) {
        PQ.remove();
    }
    PQ.insert(arr[i].end);
}

console.log(PQ.getSize());
