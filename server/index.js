const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
	ctx.body = {
		msg: 'Done',
		code: 1,
	};
});

app.listen(3008, () => {
	console.log('server is running on port 3008');
});
