function shadowClone(obj) {
	return Object.assign({}, obj);
}

// env with babel
function shadowClone(obj) {
	return { ...obj };
}

function deepClone(obj) {
	//lost the function value
	return JSON.parse(JSON.stringify(obj));
}

/**
 * 深拷贝
 * @param {目标对象} source object
 * @param {缓存表} hash
 */
function deepClone(source, hash = new WeakMap()) {
	let target = null;
	if (hash.has(source)) {
		return hash.get(source);
	}

	if (source !== null && typeof source === 'object') {
		target = Array.isArray(source) ? [] : {};
		hash.set(source, target);
		for (let key in source) {
			target[key] = deepClone(source[key], hash);
		}
	} else {
		target = source;
	}
	return target;
}

function completeDeepClone(source) {
	const res = deepClone(source);
	Object.setPrototypeOf(res, Object.getPrototypeOf(source));
	return res;
}
