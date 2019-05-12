# 中间件
## 编写中间件
```js
// app/middleware/*.js
// egg官网案例
const isJSON = require('koa-is-json');
const zlib = require('zlib');

async function gzip(ctx, next) {
  await next();

  // 后续中间件执行完成后将响应体转换成 gzip
  let body = ctx.body;
  if (!body) return;
  if (isJSON(body)) body = JSON.stringify(body);

  // 设置 gzip body，修正响应头
  const stream = zlib.createGzip();
  stream.end(body);
  ctx.body = stream;
  ctx.set('Content-Encoding', 'gzip');
}
```
注：中间件编写完后需要配置，否则不会生效

## 配置中间件
```js
// config/config.default.js
config.middleware = ["gzip", "mycors"]; // 多个中间件方法 以逗号隔开
```

## 中间件使用
```js

```
