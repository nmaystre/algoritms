const insertionSort = (arr) => {
	const arrLength = arr.length;

	for (let i = 1; i < arrLength; i++) {
		let currentValue = arr[i];
		let j;

		for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentValue;
	}
	return arr;
};

console.log(insertionSort([ 1, -3, 4, 7, 22, 11, 45, -5, 0 ]));
console.log(insertionSort([ 9, 1, 3, 0, 29, 9 ]));
