const mockAjax = (url, s, callback) => {
	setTimeout(() => {
		callback(`${url}异步操作耗时${s}秒`);
	}, 1000 * s);
};
