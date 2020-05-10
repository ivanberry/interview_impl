const http = require('http');
const crypto = require('crypto');

const SESSION = {};

function generateCSRFToken() {
	return crypto.randomBytes(48).toString('hex');
}

function parseCookie(str) {
	if (str) {
		const strArr = str.split(';');
		const res = {};
		for (let i = 0; i < strArr.length; i++) {
			const [key, value] = strArr[i].trim().split('=');
			res[key] = value;
		}

		return res;
	}
}

const server = http.createServer((req, res) => {
	if (req.url === '/login') {
		// csrf token async
		const token = generateCSRFToken();
		SESSION[token] = token;
		// 标记登录态，维护用户
		res.setHeader('Set-Cookie', [
			'a=b',
			`X-CSRF-TOKEN=${token}; SameSite=Strict`,
			`SESSIONID=${token}; SameSite=Strict`,
		]);

		res.writeHead(200, {
			'Content-Type': 'application/json',
			// 'Access-Control-Allow-Origin': 'localhost',
		});
		res.end();
	} else {
		// parse cookie
		const { cookie, referer } = req.headers;
		if (cookie) {
			cookieObj = parseCookie(cookie);
			const { SESSIONID, a } = cookieObj;
			if (
				SESSIONID === SESSION[SESSIONID] ||
				cookieObj['X-CRSF-TOKEN'] === SESSION[SESSIONID]
			) {
				res.end('safe request');
			}
			res.end('have cookied but not safe');
		} else {
			res.end('without cookied');
		}

		if (referer !== 'http://interview.local.cn/') {
			// 验证Referer，限制发起请求的来源
			res.end('Bad Referer');
		}
	}
});

server.listen(3004, () => {
	console.log('Server running on port 3004');
});
