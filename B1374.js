//N개 강의실
// 강의 번호, 강의 시작시간, 강의 종료 시간
const fs=require('fs');
const input=fs.readFileSync('input.txt').toString().trim().split('\n');

const N=Number(input[0]);
let arr=[];

for(let i=1; i<=N; i++){
    let[Gnum, Gstart, Gend]=input[i].split(' ').map(Number);
    arr.push({num:Gnum, start:Gstart, end:Gend});
}

arr.sort((a,b)=>a.start-b.start);

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    insert(item) {
      	// 가장 마지막 노드부터 비교하며 위치를 찾는 방식
        let current = this.heap.length;
        while (current > 1) {
            const parent = Math.floor(current / 2);
            if (this.heap[parent] > item) {
                this.heap[current] = this.heap[parent];
                current = parent;
            } else break;
        }
        this.heap[current] = item;
    }

    remove() {
        let min = this.heap[1];
        if (this.heap.length > 2) {
          	// 힙의 최상단을 제거
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);
			// 최상단부터 비교
            let current = 1;
            let leftChild = current * 2;
            let rightChild = current * 2 + 1;
          	// 트리 구조이기 때문에 왼쪽 자식이 없을 때까지 확인하면 됨
            while (this.heap[leftChild]) {
                let CompareItem = leftChild;
                if (this.heap[rightChild] && this.heap[CompareItem] > this.heap[rightChild]) {
                    CompareItem = rightChild;
                }
              	// 구조 분해 할당을 이용한 값 교체
                if (this.heap[current] > this.heap[CompareItem]) {
                    [this.heap[current], this.heap[CompareItem]] = [this.heap[CompareItem], this.heap[current]];
                    current = CompareItem;
                } else break;

                leftChild = current * 2;
                rightChild = current * 2 + 1;
            }
        } else if (this.heap.length === 2) {
            this.heap.splice(1, 1);
        } else {
            return null;
        }
        return min;
    }

    getMin() {
        return this.heap[1];
    }

    getHeap() {
        return this.heap;
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