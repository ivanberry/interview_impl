class PubSub {
	constructor() {
		this.subscribers = []; // 订阅者列表
	}

	subscribe(topic, callback) {
		let callbacks = this.subscribers[topic];
		if (!callbacks) {
			this.subscribers[topic] = [callback];
		} else {
			callbacks.push(callback);
		}
	}

	publish(topic, ...args) {
		let callbacks = this.subscribers[topic];
		callbacks.forEach((callback) => callback(...args));
	}
}

class Subject {
	constructor() {
		this.observers = [];
	}

	add(observer) {
		this.observers.push(observer);
	}

	notify(...args) {
		this.observers.forEach((ob) => ob.update(...args));
	}
}

class Observer {
	update(...args) {
		console.log(...args);
	}
}
