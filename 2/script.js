const selectionSort = (arr) => {
	let minValueI;
	const arrLength = arr.length;

	for (let i = 0; i < arrLength - 1; i++) {
		minValueI = i;
		for (let j = i + 1; j < arrLength; j++) {
			if (arr[minValueI] > arr[j]) {
				minValueI = arr[j];
			}
			[ arr[i], arr[minValueI] ] = [ arr[minValueI], arr[i] ];
		}
	}

	return arr;
};

console.log(selectionSort([ 9, 1, 3, 0, 29 ]));
