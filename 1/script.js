const bubbleSort = (arr) => {
	for (let i = 0, lastI = arr.length - 1; i < lastI; i++) {
		for (let j = 0, lastJ = lastI - i; j < lastJ; j++) {
			if (arr[j] > arr[j + 1]) {
				let swap = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = swap;
			}
		}
	}
	return arr;
};

console.log(bubbleSort([ 1, -3, 4, 7, 22, 11, 45, -5, 0 ]));
