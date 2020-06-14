const Koa = require('koa');
const app = new Koa();

const { router } = require('./router');

app.use(router.routes()).use(router.allowedMethods());

app.listen(3008, () => {
	console.log('server is running on port 3008');
});
