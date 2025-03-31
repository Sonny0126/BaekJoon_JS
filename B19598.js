const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const num = Number(input[0]);

let arr = [];
for (let i = 1; i <= num; i++) {
    let [start, end] = input[i].split(' ').map(Number);
    arr.push({ s: start, e: end });
}

// 시작 시간을 기준으로 정렬
arr.sort((a, b) => a.s - b.s);

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    insert(item) {
        this.heap.push(item);
        let current = this.heap.length - 1;

        while (current > 1) {
            const parent = Math.floor(current / 2);
            if (this.heap[parent] > this.heap[current]) {
                [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]];
                current = parent;
            } else break;
        }
    }

    remove() {
        if (this.heap.length <= 1) return null;
        if (this.heap.length === 2) return this.heap.pop();

        const min = this.heap[1];
        this.heap[1] = this.heap.pop();
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

            if (smallest !== current) {
                [this.heap[current], this.heap[smallest]] = [this.heap[smallest], this.heap[current]];
                current = smallest;
            } else break;
        }
        return min;
    }

    getMin() {
        return this.heap.length > 1 ? this.heap[1] : Infinity;
    }

    getSize() {
        return this.heap.length - 1;
    }
}

let PQ = new MinHeap();
PQ.insert(arr[0].e); // 첫 번째 강의 종료 시간 추가

for (let i = 1; i < arr.length; i++) { // i = 1부터 시작
    if (arr[i].s >= PQ.getMin()) {
        PQ.remove();
    }
    PQ.insert(arr[i].e);
}

console.log(PQ.getSize());
