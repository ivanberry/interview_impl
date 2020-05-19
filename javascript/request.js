// ajax过程
function createAjax(fn, url, methd, data) {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange(() => {
		if (xhr.readyState === 4 && xhr.status === 200) {
			let res = JSON.parse(xhr.responseText);
			fn(res);
		}
	});
	xhr.open(url, methd);
	xhr.send(data);
}

const controller = new AbortController();
const signal = abortCon.signal;
// 模拟 fetch 中断
fetch(url, { signal }).then((res) => console.log(res));
controller.abort();
