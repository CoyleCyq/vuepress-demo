# Cluster 模块
Cluster模块 可以看作是做了封装的child_process模块,Cluster模块的一个显著优点是可以共享同一个socket 连接，这代表可以使用Cluster模块实现简单的负载均衡

```js
// cluster简单例子 test.js

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log('Master process id is', process.pid)
    // fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log('worker process died id ', worker.process.pid)
    })
} else {
    // worker 可以共享同一个TCP连接
    // 这里的例子是一个http服务
    http.createServer( (req, res)=> {
        res.writeHead(200);
        res.end('hello world\n')
    }).listen(8000)
    console.log('Worker started, process id', process.pid)
}
// node test
/*
Master process id is 21568
Worker started, process id 21924
Worker started, process id 20680
Worker started, process id 21704
Worker started, process id 17628
Worker started, process id 7524
Worker started, process id 17848
*/
```
上面是使用cluster模块的一个简单例子，为了充分利用CPU，先调用OS模块的cpus()方法来获得CPU核心数，假设主机装了两个CPU，每个CPU有4个核，那么总核数就是8

上面的代码中，Cluster 模块调用了fork方法来创建子进程，该方法和child_process模块中的fork是同一个方法

cluster模块采用的是经典的主从模型，由master进程来管理所有子进程可以使用process.isMaster属性来判断当前进程是master还是worker,其中主进程不负责具体的任务处理，其主要工作是负责调度和管理，上面的代码中所有的子进程都监听8000端口

```js
// test.js
var cluster = require('cluster');
var data = 0;//这里定义数据不会被所有进程共享，各个进程有各自的内存区域
if (cluster.isMaster) { //主进程
    var numCPUs = require('os').cpus().length;
    for (var i = 0; i < numCPUs; i++) {
        var worker = cluster.fork();
    }
    data=5;
    console.log('DATA VALUE in MainProcess: %d ' , data);
} else { //子进程,会被调用numCPUs次
   // data++;
    console.log('DATA VALUE in ChildProcess %d: %d ', cluster.worker.id, data);//
}

// node test
/*
DATA VALUE in MainProcess: 5
DATA VALUE in ChildProcess 1: 0
DATA VALUE in ChildProcess 2: 0
DATA VALUE in ChildProcess 3: 0
DATA VALUE in ChildProcess 4: 0
DATA VALUE in ChildProcess 5: 0
DATA VALUE in ChildProcess 6: 0
*/

```