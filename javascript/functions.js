/**
 * 一定时间内，函数只能执行一次
 * @param {待执行函数} fn
 * @param {可重复执行的时间间隔} delay
 */
function debounce(fn, delay) {
	let timer = 0;
	return function (...args) {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			fn && fn.apply(this, args);
		}, delay);
	};
}

function throttle(fn, threshold) {
	let timer = 0,
		last = new Date();
	return function (...args) {
		let now = new Date();
		clearTimeout(timer);
		if (now - last > threshold) {
			// 当两次运行超过时间阈值后，保证执行
			fn && fn.apply(this, args);
			last = now;
		} else {
			//  now - last < threshold内，可以看成了防抖
			timer = setTimeout(() => {
				fn && fn.apply(this, args);
			}, threshold);
		}
	};
}
