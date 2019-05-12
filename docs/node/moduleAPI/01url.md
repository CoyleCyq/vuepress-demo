# url模块
url 模块用于处理与解析 URL。 使用方法如下：
```js
const url = require('url');
```

## 常用api
- [parse](#parse)
- [format](#format)
- [resolve](#resolve)

## API
### 属性
- `url.host` : 获取及设置URL的主机(host)部分。     
- `url.hostname` : 获取及设置URL的主机名(hostname)部分  
- `url.hash` : 获取及设置URL的分段(hash)部分。 
- `url.href` : 获取及设置序列化的URL。
- `url.origin`: 获取只读序列化的URL origin部分。
- `url.password`: 获取及设置URL的密码(password)部分。
- `url.pathname`: 获取及设置URL的路径(path)部分。
- `url.port`: 获取及设置URL的端口(port)部分。
- `url.protocol` : 获取及设置URL的协议(protocol)部分。
- `url.search` : 获取及设置URL的序列化查询(query)部分部分。
- `url.searchParams` : 获取表示URL查询参数的URLSearchParams对象。该属性是只读的
- `url.username`: 获取及设置URL的用户名(username)部分。


### 方法
##### parse
- `url.parse(urlString[, parseQueryString[, slashesDenoteHost]])` 解析 URL 字符串并返回 URL 对象。
    - `urlString` `<string>` 要解析的 URL 字符串
    - `parseQueryString` `<boolean>`  如果设为 true，则返回的 URL 对象的 query 属性会是一个使用 querystring 模块的 parse() 生成的对象。 如果设为 false，则 query 会是一个未解析未解码的字符串。 默认为 false。
    - `slashesDenoteHost ` `<boolean>` 如果设为 true，则 // 之后至下一个 / 之前的字符串会解析作为 host。 例如， //foo/bar 会解析为 {host: 'foo', pathname: '/bar'} 而不是 {pathname: '//foo/bar'}。 默认为 false。

```js
url.parse("http://user:pass@host.com:8080/p/a/t/h?query=string#hash");
// 结果
Url {                                                               
  protocol: 'http:',                                                
  slashes: true,                                                    
  auth: 'user:pass',                                                
  host: 'host.com:8080',                                   
  port: '8080',                                                     
  hostname: 'host.com',                               
  hash: '#hash',                                                   
  search: '?query=string',                                          
  query: 'query=string',                                            
  pathname: '/p/a/t/h',                                             
  path: '/p/a/t/h?query=string',                                    
  href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash' 
}
```
    
##### format 
- `url.format(urlObject)`

url.format() 方法返回一个从 urlObject 格式化后的 URL 字符串。

```js
url.format({
    protocol:"http:",
    host:"192.168.1.58",
    port:"8080"
});

/*
返回值：
'http://192.168.1.58:8080'
*/
```

##### resolve
- `url.resolve(from, to)`

url.resolve() 方法会以一种 Web 浏览器解析超链接的方式把一个目标 URL 解析成相对于一个基础 URL。
```js
const url = require('url');
url.resolve('/one/two/three', 'four');         // '/one/two/four'
url.resolve('http://example.com/', '/one');    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two'); // 'http://example.com/two'
```