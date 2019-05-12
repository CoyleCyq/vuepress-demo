# http模块
要使用 HTTP 服务器和客户端，必须 require('http')。

```js
const http = require('http')
```

http模块，主要的应用是两部分，一部分是 `http.createServer` 担当web服务器，另一部分是 `http.createClient`，担当客户端，实现爬虫之类的工作

## API

### 属性
- `request` : 请求体
    - `request.url` : 获取请求的url
    - `request.headers`: 获取请求头
    - `request.method`： 获取请求的方法
- `response`： 响应体
    - `response.writeHead()` : 设置响应头，多个响应
    - `response.setTimeout()`：设置超时
    - `response.statusCode`: 设置网页状态码
    - `response.setHeader()`: 设置http协议头
    - `response.headersSent` : 判断是否设置了http头
    - `response.write()` ： 返回网页数据
    - `response.end()`: 将设置的数据包，发送数据到客户端

### 方法
##### createServer
- `http.createServer([options][, requestlistener])` 


```js
const http = require('http');
// 创建服务器
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok');
})

server.listen(8001, () => {
    console.log('服务开启成功, 地址：http://localhost:8001')
})
```




