const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		const callback = req.match.params.callback;
		res.setHeader(200);
		res.end(`${callback}("some data from server")`);
	} else {
		const callback = req.url.split('=')[1];
		res.end(`${callback}("some data from server")`);
	}
});

server.listen(3002, () => {
	console.log(`Server running on port 3002`);
});
