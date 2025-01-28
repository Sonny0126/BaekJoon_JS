let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// N, K 입력 받기
const [N, K] = input[0].split(' ').map(Number);

let Nline = 1;
let Kline = 1;

// 보석 정보 배열 초기화
let Narr = [];

// 보석 정보 입력
for (let i = 0; i < N; i++) {
    let [M, V] = input[Nline].split(' ').map(Number);
    Narr.push({ M, V });
    Nline++;
}

// 가방 최대 무게 배열 초기화
let Varr = [];

// 가방 최대 무게 입력
for (let i = 0; i < K; i++) {
    let C = Number(input[Nline]);
    Varr.push(C);
    Nline++;
}

// 가방 오름차순 정렬
Varr.sort((a, b) => a - b);

// 보석은 무게를 기준으로 오름차순 정렬
Narr.sort((a, b) => {
    if (a.M === b.M) {
        // 무게가 같다면, 가치가 높은 순으로 정렬
        return b.V - a.V;
    }
    // 무게를 기준으로 오름차순 정렬
    return a.M - b.M;
});

// 최대 힙 (우선순위 큐) 구현
class MaxHeap {
    constructor() { //기본 클래스일 때, 기본 생성자는 빈 메서드이다.
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] >= this.heap[index]) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let largest = index;

            if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }
            if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }
            if (largest === index) break;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
        return max;
    }

    size() {
        return this.heap.length;
    }
}

let maxHeap = new MaxHeap();
let index = 0;
let max = 0;

// 작은 가방부터 탐색
Varr.forEach((bag) => {
    // 현재 가방(bag)에 담을 수 있는 보석을 찾기 위해 반복
    while (index < Narr.length && Narr[index].M <= bag) {
        maxHeap.push(Narr[index].V); // 보석의 가치를 힙에 추가
        index++;
    }

    // maxHeap에서 가장 가치가 큰 보석을 선택
    if (maxHeap.size() > 0) {
        max += maxHeap.pop();
    }
});

console.log(max);