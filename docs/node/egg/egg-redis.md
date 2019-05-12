# egg-redis
## 安装依赖
```bash
npm i egg-redis --save
```

## 启用
```js
// config/plugin.js
exports.redis = {
  enable: true,
  package: 'egg-redis',
};
```

## 配置
```js
// config/config.default.js
// 基本配置 
config.redis = {
  client: {
    port: 6379,          // Redis port
    host: '127.0.0.1',   // Redis host
    password: 'auth',
    db: 0,
  },
}
```

## 使用案例
```js
// app/controller/home.js
 
module.exports = app => {
  return class HomeController extends app.Controller {
    async index() {
      const { ctx, app } = this;
      // set
      await app.redis.set('foo', 'bar');
      // get
      ctx.body = await app.redis.get('foo');
    }
  };
};
```