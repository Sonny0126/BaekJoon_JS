

// 최소 힙 클래스 구현
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // 힙에 값 삽입
    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    // 힙에서 최소값 추출
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        
        return root;
    }

    // 힙 구조 유지 - 위로 올리기
    _heapifyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx] < this.heap[parentIdx]) {
                [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
                idx = parentIdx;
            } else {
                break;
            }
        }
    }

    // 힙 구조 유지 - 아래로 내리기
    _heapifyDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            let swap = null;

            if (leftChildIdx < length) {
                if (this.heap[leftChildIdx] < element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                if (
                    (swap === null && this.heap[rightChildIdx] < element) ||
                    (swap !== null && this.heap[rightChildIdx] < this.heap[leftChildIdx])
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;

            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }

    // 힙의 크기 반환
    size() {
        return this.heap.length;
    }
}

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const T = Number(input[0]); // 테스트 케이스 수
let idx = 1;

for (let t = 0; t < T; t++) {
    const K = Number(input[idx]); // 장의 수
    const sizes = input[idx + 1].split(' ').map(Number); // 파일 크기 배열

    // 우선순위 큐를 사용하여 최소 힙을 생성
    const minHeap = new MinHeap();

    // 파일 크기 배열을 최소 힙에 삽입
    sizes.forEach(size => minHeap.push(size));

    let sum = 0;

    // 최소 힙 방식으로 파일을 합치는 과정
    while (minHeap.size() > 1) {
        // 가장 작은 두 파일을 꺼냄
        const first = minHeap.pop();
        const second = minHeap.pop();

        const cost = first + second; // 두 파일을 합치는 비용
        sum += cost; // 비용 누적

        // 합친 파일을 다시 힙에 삽입
        minHeap.push(cost);
    }

    console.log(sum);
    idx += 2; // 다음 테스트 케이스로 이동
}
