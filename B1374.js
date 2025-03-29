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

arr.sort((a,b)=> a.start-b.start);
for(let i=0; i<N; i++)
    console.log(arr[i]);

let cnt=0;
let starttime=0;
let classCnt=0;

class MinHeap{
    construcor(){
        this.heap=[];
    }
    swap(a,b){
        [this.heap[a], this.heap[b]]=[this.heap[b], this.heap[a]];
    }
    size() {
		return this.heap.length;
	}

	push(value) {
		this.heap.push(value);
		let current = this.heap.length - 1;
		let parent = Math.floor((current - 1) / 2);

		while (this.heap[parent] > value) {
			this.swap(parent, current);
			current = parent;
			parent = Math.floor((current - 1) / 2);
		}
	}

	pop() {
		const last = this.heap.length - 1;
		let current = 0;
		this.swap(current, last); // 0번이 루트노드
		const value = this.heap.pop();

		while (current < last) {
			let left = current * 2 + 1;
			let right = current * 2 + 2;

			if (left >= last) {
				break;
			} else if (right >= last) {
				if (this.heap[current] > this.heap[left]) {
					this.swap(current, left);
					current = left;
				} else {
					break;
				}
			} else {
				if (this.heap[left] < this.heap[current] || this.heap[right] < this.heap[current]) {
					let next = this.heap[left] < this.heap[right] ? left : right;
					this.swap(current, next);
					current = next;
				} else {
					break;
				}
			}
		}
		return value;
	}
}

