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
}

class LinkedListReverse {
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
		const listReversePresentation = [];

		for (let currentNode = this.head; currentNode; currentNode = currentNode.next) {
			listReversePresentation.unshift(currentNode.value);
		}
		return listReversePresentation.toString();
	}
}

const arr = [ 'one', 'two', 'three', 'four' ];
const linkListReverse = new LinkedListReverse(arr);
linkListReverse.toString();
console.log(linkListReverse.toString());

// console.log(test, testR);
