var data = [];

for (var i = 0; i < 3; i++) {
	data[i] = function () {
		console.log(i);
	};
}

data[0]();
data[1]();
data[2]();

// 闭包实践 - 柯里化
function sum(...args) {
	function fn(...newArgs) {
		return sum(...args, ...newArgs);
	}

	fn.toString = () => {
		return args.reduce((pre, cur) => {
			return pre + cur;
		}); // ingore option initialValue, JS will set the
		// args[0] as the initialValue
	};

	return fn;
}

sum(1)(2)(4);
sum(1, 2, 3, 4)(5);
