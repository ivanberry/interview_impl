// call
Function.prototype.ownCall = function (thisArg, ...args) {
	// 保证this值
	const _this = thisArg || window;

	// 为什么需要唯一呢？
	const fn = Symbol();
	_this[fn] = this;

	// 原来的参数呢？
	const res = _this[fn](...args);

	// delete,避免污染
	delete _this[fn];
	return res; // 规范规定需要返回函数调用值
};

Function.prototype.ownApply = function (thisArg, arg) {
	const _this = thisArg || window;
	const fn = Symbol();
	_this[fn] = this; // 此处this为调用call的方法
	let res;
	if (arg && arg.length === 0) {
		res = _this[fn]();
	} else {
		res = _this[fn](...arg);
	}

	delete _this[fn];
	return res;
};

// 更加简单高效的实现
Function.prototype.call2 = function (thisArg, ...args) {
	return Object.create(thisArg, { fn: { value: this } }).fn(...args);
};

/**
 * func.bind -> return a function
 */
Function.prototype.bind = function (thisArg, ...args) {
	const thatFunc = this;
	if (typeof thatFunc !== 'function') {
		throw new TypeError(`What's trying to bind is not callable!`);
	}
	return function () {
		thatFunc.apply(thisArg, args);
	};
};
