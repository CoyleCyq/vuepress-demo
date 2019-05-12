# egg-sequelize

## 安装依赖
```bash
# 安装 egg-sequelize
npm install --save egg-sequelize

# 安装 mysql
npm install --save mysql2
```

## 启用
```js
// config/plugin.js
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
}
```

## 配置
```js
// config/config.default.js
// 常用配置
config.sequelize = {
    dialect: 'mysql', // 支持mysql, mariadb, postgres, mssql
    database: 'test', // 数据库名
    username: 'root',
    password: '1234',
    host: 'localhost',
    timezone: '+8:00',
    port: 3306,
    operatorsAliases: false,
    quoteIdentifiers: false,
    pool: {
        max: 20,
        min: 2,
        idle: 90000,
        acquire: 90000,
        evict: 90000
    },
    logging: false
};
```

## 建立model
```js
// app/model/*.js

/**
 * 用户表
 * @param {*} sequelize
 * @param {*} DataTypes
 */
'use strict';
module.exports = app => {
    const { DataTypes } = app.Sequelize;
    const User = app.model.define('user', {
        id: { type: DataTypes.UUID, primaryKey: true, allowNull: false, comment: 'id' },
        name: { type: DataTypes.STRING(30), unique: true, comment: '用户名 唯一存在' },
        phone: { type: DataTypes.STRING(16), unique: true, comment: '手机号 唯一存在' },
        password: { type: DataTypes.STRING(255), comment: '密码' },
        roles: {type: DataTypes.STRING(20), comment: '权限'}
    }, {
        comment: '用户信息',
        tableName: 'user',
        updatedAt: 'updateTime',
        createdAt: 'createTime'
    });
    User.prototype.associate = () => {};
    return User;
};
```

注：开始一个新项目时，我们并没有数据库结构，使用Sequelize时，并不需要先定义好数据库结构。我们只要定义好模型，然后进行同步即可。

## 同步
```js
// app.js 或者其他能使用application的地方同步即可
module.exports = app => {
    // global.Op = app.Sequelize.Op;
    // global.Sequelize = app.Sequelize;
    // app.beforeStart(async () => { 
    //     await app.model.sync(); // 同步
    // });
    app.ready(async () => {
        console.log('启动成功');
    });
};
```
注：只有第一次运行才需要同步, 每次同步会删除并重建表，所以同步后就可以注释掉了

> .sync({ force: true })会删除并重建表，这时我们可以添加match选项，只重建正则表达式匹配的表：

```js
sequelize.sync({ force: true, match: /_test$/ });
```

## 使用
```js
// 简单案例
'use strict';
const Controller = require('egg').Controller;

class TableController extends Controller {
    async getAllCountry () {
        const { ctx, app } = this;
        try {
            const list = await app.model.Country.findAll(); // 从数据库获取数据
            let newList = list.map(itm => { // 数据组装
                var o = {};
                o['code'] = itm.code;
                o['cn'] = itm.chineseName;
                o['en'] = itm.englishName;
                o['createTime'] = app.dateFormat(itm.createTime);
                o['updateTime'] = app.dateFormat(itm.updateTime);
                return o;
            })
            ctx.formatResponse.list = newList; // 格式化数据
            const body = ctx.formatResponse.formattedRes();
            ctx.body = body;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = TableController
```

> 参考文档[Sequelize 中文API文档](https://itbilu.com/nodejs/npm/V1PExztfb.html#definition)