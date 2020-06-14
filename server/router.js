const Router = require('koa-router');

const router = new Router();

const story = [
	{
		id: 0,
		title: 'yyy',
		url: 'https://www.google.com',
	},
	{
		id: 1,
		title: 'zzz',
		url: 'https://www.bing.com',
	},
];

router
	.get('/', (ctx, next) => {
		ctx.body = 'Hello, Koa';
		next();
	})
	.get('/story', (ctx, next) => {
		ctx.body = story;
		next();
	});

module.exports = {
	router,
};
