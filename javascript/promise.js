const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function newPromise(fn) {
	// 状态
	var state = PENDING;

	// 值存储
	var value = null;

	// .then/.done的处理函数
	var handlers = [];

	// 基本状态切换
	function fulfill(result) {
		state = FULFILLED;
		value = result;
	}

	// 基本状态切换
	function reject(error) {
		state = REJECTED;
		value = error;
	}

	// high-level transition function
	// 这个高阶的状态切换函数有什么用啊？？？再看看文字把
	/**
	 *
	 * @param {Promise/plain value} result
	 */
	function resolve(result) {
		try {
			var then = getThen(result);
			if (then) {
				doResolve(then.bind(result), resolve, reject);
				return;
			}
			fulfill(result);
		} catch (e) {
			reject(e);
		}
	}

	// helper function
	/**
	 * Check if a value is a Promise and, if it is,
	 * return the 'then' method of that promise
	 * @param {Promis/Any} value
	 * @returns {Function/Null}
	 */
	function getThen(value) {
		var t = typeof value;
		if (value && (t === 'object' || t === 'function')) {
			var then = value.then;
			if (typeof then === 'function') {
				return then;
			}
		}
		return null;
	}

	function doResolve(fn, onFulfilled, onRejected) {
		var done = false;
		try {
			fn(
				function (value) {
					if (done) return;
					done = true;
					onFulfilled(value);
				},
				function (reason) {
					if (done) return;
					done = true;
					onRejected(reason);
				}
			);
		} catch (error) {
			if (done) return;
			done = true;
			onRejected(error);
		}
	}

	doResolve(fn, resolve, reject);
}
