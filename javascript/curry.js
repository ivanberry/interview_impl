function curry(fn) {
	return function curried(...args) {
		if (args.length >= fn.length) {
			return fn.apply(this, args);
		} else {
			return function (...newArgs) {
				return curried.apply(this, args.concat(newArgs));
			};
		}
	};
}

function log(date, importance, messge) {
	console.log(`${date}-${importance}: ${messge}`);
}

var curriedLog = curry(log);

//封装函数用于输出当日的信息
function logNow(importance, messge) {
	curriedLog(new Date())(importance)(messge);
}

// 封装函数用于DEBUG当日的信息
function debugNow(messge) {
	logNow('DEBUG', messge);
}
