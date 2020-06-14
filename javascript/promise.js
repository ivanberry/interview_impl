const PENDING = 'pending';
const RESOLVE = 'resolve';
const REJECT = 'reject';

function get(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('get', url);

		xhr.onreadystatechange(() => {
			if (xhr.status === 200 && xhr.readyState === 4) {
				resolve(xhr.response);
			} else {
				reject(new Error(xhr.responseText));
			}
		});

		xhr.onerror = function () {
			reject(new Error('Network Error'));
		};

		xhr.send();
	});
}
function Promise(executor) {
	var self = this;
	self.status = PENDING;
	self.onResolvedCallback = [];
	self.onRejectedCallback = [];

	function resolve(value) {
		if (self.status === PENDING) {
			self.status = RESOLVE;
			self.data = value;
			for (let i = 0; i < self.onResolvedCallback.length; i++) {
				self.onResolvedCallback[i](value);
			}
		}
	}

	function reject(reason) {
		if (self.status === PENDING) {
			self.status = REJECT;
			self.data = reason;
			for (let i = 0; i < self.onRejectedCallback.length; i++) {
				self.onRejectedCallback[i](reason);
			}
		}
	}

	try {
		executor(resolve, reject);
	} catch (e) {
		reject(e);
	}
}

Promise.prototype.then = function (onResolved, onRejected) {
	var self = this;
	onRejected = typeof onRejected === 'function' ? onRejected : function (v) {};
	onResolved = typeof onResolved === 'function' ? onResolved : function (V) {};

	if (self.status === RESOLVE) {
		return new Promise((resovle, reject) => {
			try {
				const x = onResolved(self.data);
				if (x instanceof Promise) {
					x.then(resovle, reject);
				}
				resovle(x);
			} catch (e) {
				reject(e);
			}
		});
	}

	if (self.status === REJECT) {
		return new Promise((resolve, reject) => {
			try {
				const x = onRejected(self.data);
				if (x instanceof Promise) {
					x.then(resolve, reject);
				}
			} catch (e) {
				reject(e);
			}
		});
	}

	if (self.status === PENDING) {
		return new Promise((resolve, reject) => {});
	}
};
