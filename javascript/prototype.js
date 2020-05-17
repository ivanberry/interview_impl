function _new(ctor, ...args) {
	// 新建一个对象
	const res = {};
	// 设置对象的原型为传入函数的prototype对象（构造函数的prototype不为null）
	if (ctor.prototype !== null) {
		res.__proto__ = ctor.prototype;
	}
	// 执行传入函数，并绑定函数的this对象为当前新建对象
	const ret = ctor.apply(res, args);
	// 如果函数返回结果非空，且为对象或者函数，则返回这个对象，否则返回新建的对象
	if (ret !== null && (typeof ret === 'object' || typeof ret === 'function')) {
		return ret;
	}
	return res;
}

/**
 * 继承的多种实现
 */

// 1. call
function Parent1() {
	this.name = 'parent1';
	this.apply = [1, 2, 3];
}

Person1.prototype.test = function test() {
	console.log('test');
};

function Child1() {
	Person1.call(this);
	this.type = 'child1';
}

const p1_0 = new Child1();
const p1_1 = new Child1();

//组合继承
function Parent2() {
	this.name = 'parent2';
	this.apply = [1, 2, 3];
}

Parent2.prototype.test = function test() {
	console.log('test');
};

function Child2() {
	Parent2.call(this);
	this.type = 'child2';
}

Child2.prototype = new Parent2();

const p2_0 = new Child2();
const p2_1 = new Child2();

// 寄生组合继承
function Parent3() {
	this.name = 'parent3';
	this.apply = [1, 2, 3];
}

function Child3() {
	Parent3.apply(this);
	this.type = 'child3';
}

Child3.prototype = Object.create(Parent3.prototype);
Child3.prototype.constructor = Child3;

const p3_0 = new Child3();
const p3_1 = new Child3();

// ES6 extends
class Parent4 {
	constructor() {
		this.name = 'parent4';
		this.apply = [1, 2, 3];
	}

	// Getter
	get getName() {
		return this.name;
	}

	// Method
	getApplyLength() {
		return this.apply.length;
	}
}

class Child4 extends Parent4 {
	constructor() {
		super();
		this.type = 'child4';
	}
}

const p4_0 = new Child4();
const p4_1 = new Child4();
