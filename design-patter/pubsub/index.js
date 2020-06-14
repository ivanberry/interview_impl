// 创建事件调度中心
const pubSub = new PubSub();

// A订阅SOS事件（A只关注SMS本身，而不关心谁发布这个事件）
pubSub.subscribe('SOS', console.log);

// B订阅了SOS事件
pubSub.subscribe('SOS', console.log);

// C发布了SOS事件，但不关心谁订阅了这个事件
pubSub.publish('SOS', 'I publised SOS event');

// 观察者模式

// 创建观察者1
let ob1 = new Observer();
// 创建观察者2
let ob2 = new Observer();

// 创建目标sub
let sub = new Subject();

// 目标中添加观察者
sub.add(ob1);
sub.add(ob2);

// 目标sub触发事件（目标主动通知观察者）
sub.notify('I fired SOS event');
