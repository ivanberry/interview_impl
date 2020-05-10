const http = require('http');

const server = http.createServer((req, res) => {
	res.setHeader('Access-Control-Allohhw-Origin', '*');
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write('<script>alert(1)</script>');
});

server.listen(3003, () => {
	console.log('server on 3003');
});
