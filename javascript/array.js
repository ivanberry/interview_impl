function unique(arr) {
	return Array.from(new Set(arr));
}

// loop over
function unique_loop(arr) {
	const newArr = [];
	for (let i in arr) {
		let item = arr[i];
		if (!newArr.includes(item)) {
			newArr.push(item);
		}
	}
	return newArr;
}

// flattern
function flattern(arr) {
	return arr.flat(Infinity);
}

// 字符串化
function flattern(arr) {
	let str = JSON.stringify(arr).replace(/[\[|\]]/g, '');
	return JSON.parse(`[${str}]`);
}

// 递归
function flattern(arr) {
	const newArr = [];
	arr.forEach((item) => {
		if (Array.isArray(item)) {
			newArr = newArr.concat(flattern(item));
		} else {
			newArr.push(item);
		}
	});
	return newArr;
}

// reduce flatten
function flatten(arr) {
	return arr.reduce((pre, cur) => {
		return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
	}, []);
}

// reduce to map
Array.prototype.newMap = function map(fn) {
	const result = [];
	this.reduce((_, cur, index) => {
		result.push(fn(cur, index));
	}, []);
	return result;
};

// shuffle array
function shuffle(arr) {
	return arr.sort(Math.random() - 0.5);
}
