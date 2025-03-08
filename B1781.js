const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input[0]);
const arr = [];

for (let i = 0; i < N; i++) {
    const [d, r] = input[i + 1].split(' ').map(Number);
    arr.push({ deadline: d, ramyun: r });
}

// 1. 데드라인 기준 "오름차순" 정렬
arr.sort((a, b) => a.deadline - b.deadline);

// MinHeap (우선순위 큐) 구현
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this._heapifyUp();
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return min;
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx] <= this.heap[idx]) break;

            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
        }
    }

    _heapifyDown() {
        let idx = 0;
        while (2 * idx + 1 < this.heap.length) {
            let leftChild = 2 * idx + 1;
            let rightChild = 2 * idx + 2;
            let smallChild = leftChild;

            if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[leftChild]) {
                smallChild = rightChild;
            }

            if (this.heap[idx] <= this.heap[smallChild]) break;

            [this.heap[idx], this.heap[smallChild]] = [this.heap[smallChild], this.heap[idx]];
            idx = smallChild;
        }
    }
}

// -------------------------------------------------------------------------------------

const minHeap = new MinHeap();
let ramyunSum = 0;

for (let i = 0; i < N; i++) {
    minHeap.push(arr[i].ramyun);
    ramyunSum += arr[i].ramyun;

    if (minHeap.size() > arr[i].deadline) {
        ramyunSum -= minHeap.pop(); // 최소값 제거
    }
}

console.log(ramyunSum);
