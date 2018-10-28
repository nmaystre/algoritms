class ListNode {
	constructor(value, next) {
		this.next = next || null;
		this.value = value;
	}
	setNext(node) {
		this.next = node;
	}
}

class LinkedList {
	constructor(arr) {
		arr.reduce((node, value) => {
			const currentNode = new ListNode(value);
			if (!node) {
				this.head = currentNode;
			} else {
				node.setNext(currentNode);
			}
			return currentNode;
		}, null);
	}
	toString() {
		const listPresentation = [];

		for (let currentNode = this.head; currentNode; currentNode = currentNode.next) {
			listPresentation.push(currentNode.value);
		}
		return listPresentation.toString();
	}
	reverse() {
		let nextNode = null;
		let prevNode = null;
		for (let currentNode = this.head; currentNode; ) {
			nextNode = currentNode.next;
			currentNode.setNext(prevNode);
			prevNode = currentNode;
			currentNode = nextNode;
		}
		this.head = prevNode;
	}
}

const arr = [ 5, 10, 15, 25 ];
let list = new LinkedList(arr);

console.log(list.toString());
list.reverse();
console.log(list);
console.log(list.toString());
