# egg-passport

## 安装依赖
```bash
npm install egg-passport --save
```

## 启用
```js
// config/plugin.js
exports.passport = {
  enable: true,
  package: 'egg-passport',
};
```

## API
扩展`application`

- `app.passport.mount(strategy, options)`   => 挂载登录和登录回调路由器以使用给定的strategy
- `app.passport.authenticate(strategy, options)` => 创建一个中间件，使用给定strategy名称授权第三方帐户，可选options。
- `app.passport.verify(handler)` => 验证经过身份验证的用户
- `app.passport.serializeUser(handler)` => 在存储到会话之前序列化用户
- `app.passport.deserializeUser(handler)` => 从会话还原后反序列化用户


扩展`context`

- `ctx.user` => 获取当前经过身份验证的用户
- `ctx.isAuthenticated()` => 测试请求是否经过身份验证
- `ctx.login(user[, options])` => 启动登录会话user。
- `ctx.logout()` => 终止现有登录会话