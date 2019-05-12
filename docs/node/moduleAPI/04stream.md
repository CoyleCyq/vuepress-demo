# stream模块
stream 为 Node 操作流式数据提供了支持 

要使用 Node 的stream 模块，需要增加引入
```js
const stream = require('stream')
```
## stream的种类
在 Node 中一共有4种基础的stream 类型：
- `Readable` : 可读流
- `Writable` : 可写流
- `Duplex` ： 既可写又可读
- `Transform` : 操作写入的数据，然后读取结果

## Readable Stream
Readable Stream 定义的方法和事件如下：
- `Event: 'close'`: 当流或其底层资源（比如文件描述符）被关闭时触发
- `Event: 'data'` : 当流将数据块传送给消费者后触发。
- `Event: 'end'` : 当流中没有数据可供消费时触发。
- `Event: 'error'` : 当流因底层内部出错而不能产生数据、或推送无效的数据块时触发。
- `Event: 'readable'` : 当流中有数据可供读取时触发。
- `readable.destroy([error])`: 销毁流，并触发 'error' 事件和 'close' 事件。
- `readable.isPaused()` ： 返回可读流当前的操作状态
- `readable.pause()` ： 使流动模式的流停止触发 'data' 事件，并切换出流动模式
- `readable.pipe(destination[, options])`: 绑定可写流到可读流，将可读流自动切换到流动模式，并将可读流的所有数据推送到绑定的可写流
- `readable.read([size])` : 从内部缓冲拉取并返回数据。
- `readable.resume()`: 将被暂停的可读流恢复触发 'data' 事件，并将流切换到流动模式。
- `readable.setEncoding(encoding)` : 为从可读流读取的数据设置字符编码。
- `readable.unpipe([destination])` : 解绑之前使用 stream.pipe() 绑定的可写流。
- `readable.unshift(chunk)` : 将数据块推回内部缓冲
- `readable.wrap(stream)` : 在 Node.js v0.10 之前，流没有实现当前定义的所有的流模块 API 

readable stream 的例子
```js
var stream = require('stream');
var fs = require('fs');
// 创建可读流
var readStream = fs.createReadStream('./test.txt', 'utf-8');

readStream.on('data', function(data) {
    console.log(data);
});

readStream.on('close', function() {
    console.log('close');
});

readStream.on('error', function() {
    console.log('error');
});

// 结果
/*
hello Node
close
*/
```
## Writable Stream
Writable Stream主要使用write方法来写入数据

API列表如下：
- `Event: 'close'`: 当流或其底层资源（比如文件描述符）被关闭时触发
- `Event: 'drain'` : 如果调用 stream.write(chunk) 返回 false，则当可以继续写入数据到流时会触发 'drain' 事件。
- `Event: 'error'` : 当写入数据发生错误时触发。
- `Event: 'finish'` : 调用 stream.end() 且缓冲数据都已传给底层系统之后触发。
- `Event: 'pipe'`: 当在可读流上调用 stream.pipe() 时触发。
- `Event: 'unpipe'` :当在可读流上调用 stream.unpipe() 时触发。
- `writable.cork()`: 强制把所有写入的数据都缓冲到内存中。
- `writable.destroy([error])`: 销毁流，并触发 'error' 事件且传入 error 参数。
- `writable.end([chunk][, encoding][, callback])` ： 调用 writable.end() 表明已没有数据要被写入可写流。
- `writable.setDefaultEncoding(encoding)` ： 为可写流设置默认的 encoding。
- `writable.uncork()`: 将调用 stream.cork() 后缓冲的所有数据输出到目标。
- `writable.write(chunk[, encoding][, callback])` : 写入数据到流，并在数据被完全处理之后调用 callback

write方法同样是异步的

pipe方法相当于在可读流和可写流之间架起桥梁，使数据可以通过管道由可读流进入可写流

使用pipe改写的静态文件服务器 的例子
```js
const stream = require('stream');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        var fileList = fs.readdirSync('./');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(fileList.toString());
    } else {
        var path = '.' + req.url;
        try {
            var readStream = fs.createReadStream(path).pipe(res);
        } catch(e) {
            res.end("file not exists");
        }
    }
})

server.listen(3000, () => {
    console.log('Listening on localhost:3000')
})

// 处理异常
process.on('uncaughtException', () => {
    console.log('got error')
})
```
pipe方法接收一个writable对象，当readable对象调用pipe方法时，会在内部调用writable对象的write方法进行写入

## ReadLine 模块
ReadLine 是一个 node 原生模块，该模块比较不起眼，提供了按行读取stream中数据的功能

下面是ReadLine模块监听事件及方法：
- `Event: 'close'`: 
- `Event: 'line'` : 
- `Event: 'pause'` :
- `Event: 'resume'` : 
- `Event: 'SIGCONT'`: 
- `Event: 'SIGINT'` :
- `Event: 'SIGTSTP'` :
- `rl.close()`: 
- `rl.pause()`: 
- `rl.prompt([preserveCursor])` ：
- `rl.question(query, callback)` ：
- `rl.resume()`: 
- `rl.setPrompt(prompt)` : 
- `rl.write(data[, key])`:

该模块通常用来和stream搭配使用，但因为在实际项目中通常会定制自己的stream或者自定义读取方法，导致该模块地位有些尴尬。

使用readLine模块读取文件

```js
const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: fs.createReadStream('foo.txt');
});
/*
foo.txt => 
line1
line2
line3
line4
*/

rl.on('line', function(data) {
    console.log(data);
});

rl.on('close', function() {
    console.log('closed')
})

/*
line1
line2
line3
line4
cloesd
*/
```
readLine并没有提供形如new readline()形式的构造方法，而是使用createInterface方法初始化一个rl对象

想象下有如下场景，一个可读流中包含很多独立的信息需要逐条处理，这可能是一个消息队列，这时使用readline模块就比较方便

## 自定义stream
在实际开发中，如果想要使用流式API，而原生的stream 不能满足需求时，可以考虑实现自己的stream类，常用的方法就是继承原生的Stream类，然后做一些扩展

下面拿Readable Stream为例来说明如何实现一个自定义的stream
```js
const Readable = require('stream').Readable;
const util = require('util');

util.inherits(MyReadable, Readable);

function MyReadable(array) {
    // 如果objectMode设置成false在消耗数据时会转换成buffer 
    Readable.call(this, {object: true});
    this.array = array
} 

MyReadable.prototype._read = function() {
    if (tghis.array.length) {
        this.push(this.array.shift());
    } else {
        this.push(null);
    }
}
```
上面的代码实现了名为myReadable的类，它继承自Readable类，并且接受一个数组作为参数

想要继承Readable类，就要在自定义的类内部实现_read方法，该方法内部使用push方法往可读流添加数据

当我们在给可读流对象注册data事件后，可读流会在nextTick中调用_read方法，并触发第一次data事件。

当有消费者从readable中取数据时会自动调用该方法。在上面的例子中我们在_read方法里调用了push方法，该方法用来向可读流中填充数据，下面是一个消费者的例子：

```js
const array = ['a', 'b', 'c', 'd', 'e'];
const read = new MyReadable(array);
read.on('data', function() {
    // 如果MyReadable设置了{object: true},这里的data即为buffer类型
    console.log(data)
})

read.on('end', function() {
    console.log('end')
})
```
每次触发data事件都会得到相应的数组元素，当数组为空时_read方法会被调用即
```js
this.push(null)
```
如果end事件触发，则代表读取完毕


