// logNow('INFO', 'Test');

// debugNow('debug test');

// const controller = new AbortController();
// const signal = controller.signal;

// function request() {
// 	fetch('https://www.google.com', { signal }).then((res) => console.log(res));
// }

// function abortFetch() {
// 	controller.abort();
// }

// function request() {
// 	console.log('click');
// }

// // Test for call/apply custom imple
// var a = {
// 	name: 'a',
// 	say: function (msg, date) {
// 		console.log(`${this.name}-${msg}-${date}`);
// 	},
// 	bye: function (arr) {
// 		console.log(`${this.name}-${arr.length}`);
// 	},
// };

// var b = {
// 	name: 'b',
// };

// a.say.ownCall(b, 'Hi', new Date());
// a.say.ownApply(b, ['Hi', new Date()]);

// a.bye.ownCall(b, 'Hi', new Date());
// a.bye.ownApply(b, ['Hi', new Date()]);

// a.say.call2(b, 'Hi', new Date());

// new Promise((resolve) => {
// 	mockAjax('getUserId', 1, (result) => {
// 		resolve(result);
// 	});
// }).then((result) => console.log(result));
