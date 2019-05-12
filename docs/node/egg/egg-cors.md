# egg-cors
用来解决跨域问题

## 安装`egg-cors`依赖
```bash
npm install egg-cors --save
```

## 启用`egg-cors`
```js
// app/config/plugin.js
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
```

## 配置白名单
```js
// app/config/config.default.js
exports.security = {
  domainWhiteList: [ 'http://localhost:4200' ],
};
```