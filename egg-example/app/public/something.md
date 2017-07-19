## 0.es6之前的回调
```shell
function a(func,callback){
  (callback && typeof(callback) === "function") && callback.call(this,func());
}
function b(){
  console.log(111);
  return 222;
}
a(b,function(data){
  console.log(data);
});
//111 -> 222
```

*问题*：
- 回调地狱，嵌套过多难以维护
- zalgo问题（噩梦中的怪兽）,同时进行了同步和异步操作

```shell
ajax({},function(data){console.log(data)})
data = null;
//response or null ?
```

## 1.Promise对象
```shell
var promise = new Promise(function(resolve, reject) {
 if (/* 异步操作成功 */){
 resolve(value);
 } else {
 reject(error);
 }
});

promise.then(function(value) {
 // success
}, function(value) {
 // failure
});
```


## 2. Generator生成函数(携程)
```shell
function* gen(a) {
  yield a;// yield在英语里的意思就是“产出”
  yield ++a;
  yield ++a;
  return ++a;
}

const pointerObj = gen(1);// 返回一个指向内部状态的指针对象，即iterator遍历器，而不是原函数的返回值

// 执行next后返回一个{value: yield后表达式的值, done: Boolean}
pointerObj.next();// {value: 1, done: false}
pointerObj.next();// {value: 2, done: false}
pointerObj.next();// {value: 3, done: false}
pointerObj.next();// {value: 4, done: true}
```
*用“同步”的写法实现了异步编程*

## 3.co库
```shell
function run(generator, res) {
  const ret = generator.next(res);
  if (ret.done) return;
  ret.value.then(function (res) {
    run(generator, res);
  });
}

let count = 1;
function tick(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('tick %s after %s ms', count++, time);
      resolve();
    }, time);
  });
}
function* main() {
  console.log('start run...');
  yield tick(500);
  yield tick(1000);
  yield tick(2000);
}
run(main());
```

## 4. es8 async function

async function 的原理其实和 co 类似，但它是语言层面提供的语法糖，通过 async function 编写的代码和 co + generator 编写的代码看起来很类似。
