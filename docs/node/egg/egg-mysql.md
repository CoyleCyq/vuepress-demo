# egg-mysql
egg框架配合mysql使用的插件
 
## 安装依赖
```bash
$ npm i egg-mysql --save
```

## 启用
```js
// config/plugin.js
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
```

## 配置
```js
// config/config.default.js
exports.mysql = {
  // 配置
  client: {
    // 主机
    host: 'mysql.com',
    // 端口
    port: '3306',
    // 用户名
    user: 'test_user',
    // 密码
    password: 'test_password',
    // 数据库
    database: 'test',  
    // 解决阿里云数据库报错
    insecureAuth: true, 
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
  
};
```

## 使用
```js

await app.mysql.query(sql, values); // 单实例可以直接通过 app.mysql 访问
```
多个数据库使用和配置查看[egg-mysql官方文档](https://eggjs.org/zh-cn/tutorials/mysql.html)

## 在service中使用
```js
// app/service/user.js
class UserService extends Service {
  async find(uid) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const user = await this.app.mysql.get('users', { id: 11 });
    return { user };
  }
}

// 在controller中调用
// app/controller/user.js
class UserController extends Controller {
  async info() {
    const ctx = this.ctx;
    const userId = ctx.params.id;
    const user = await ctx.service.user.find(userId);
    ctx.body = user;
  }
}
```

## 增删查改
### 增
```js
// 插入
const result = await this.app.mysql.insert('posts', { title: 'Hello World' }); // 在 post 表中，插入 title 为 Hello World 的记录

console.log(result);
=>
{
  fieldCount: 0,
  affectedRows: 1,
  insertId: 3710,
  serverStatus: 2,
  warningCount: 2,
  message: '',
  protocol41: true,
  changedRows: 0
}

// 判断插入成功
const insertSuccess = result.affectedRows === 1;
```

### 查
```js
// 查询一条记录
const post = await this.app.mysql.get('posts', { id: 12 });

// 查询全表
const results = await this.app.mysql.select('posts'); // => SELECT * FROM `posts`;

// 条件查询和结果定制
const results = await this.app.mysql.select('posts', { // 搜索 post 表
  where: { status: 'draft', author: ['author1', 'author2'] }, // WHERE 条件
  columns: ['author', 'title'], // 要查询的表字段
  orders: [['created_at','desc'], ['id','desc']], // 排序方式
  limit: 10, // 返回数据量
  offset: 0, // 数据偏移量
});
=> SELECT `author`, `title` FROM `posts`
  WHERE `status` = 'draft' AND `author` IN('author1','author2')
  ORDER BY `created_at` DESC, `id` DESC LIMIT 0, 10;
```

### 改
```js
// 修改数据，将会根据主键 ID 查找，并更新
const row = {
  id: 123,
  name: 'fengmk2',
  otherField: 'other field value',    // any other fields u want to update
  modifiedAt: this.app.mysql.literals.now, // `now()` on db server
};
const result = await this.app.mysql.update('posts', row); // 更新 posts 表中的记录

=> UPDATE `posts` SET `name` = 'fengmk2', `modifiedAt` = NOW() WHERE id = 123 ;

// 判断更新成功
const updateSuccess = result.affectedRows === 1;

// 如果主键是自定义的 ID 名称，如 custom_id，则需要在 `where` 里面配置
const row = {
  name: 'fengmk2',
  otherField: 'other field value',    // any other fields u want to update
  modifiedAt: this.app.mysql.literals.now, // `now()` on db server
};

const options = {
  where: {
    custom_id: 456
  }
};
const result = await this.app.mysql.update('posts', row, options); // 更新 posts 表中的记录

=> UPDATE `posts` SET `name` = 'fengmk2', `modifiedAt` = NOW() WHERE custom_id = 456 ;

// 判断更新成功
const updateSuccess = result.affectedRows === 1;
```

### 删
```js
const result = await this.app.mysql.delete('posts', {
  author: 'fengmk2',
});

=> DELETE FROM `posts` WHERE `author` = 'fengmk2';
```

 > 参考文档[egg-mysql](https://eggjs.org/zh-cn/tutorials/mysql.html)