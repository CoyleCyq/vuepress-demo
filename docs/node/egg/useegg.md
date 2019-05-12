# egg简单使用
## 直接使用脚手架搭建
```bash
# 全局安装egg脚手架
npm i egg-init -g

# 初始化简易版egg项目
egg-init egg-example --type=simple

# 使用cd命令，进入文件夹
cd egg-example

# 安装依赖
npm i
```

## 启动项目
`npm run dev`

`open localhost:7001`

### 目录结构
<pre><span class="line">egg-project</span><br><span class="line">├── package.json</span><br><span class="line">├── app.js (可选)</span><br><span class="line">├── agent.js (可选)</span><br><span class="line">├── app</span><br><span class="line">|   ├── router.js</span><br><span class="line">│   ├── controller</span><br><span class="line">│   |   └── home.js</span><br><span class="line">│   ├── service (可选)</span><br><span class="line">│   |   └── user.js</span><br><span class="line">│   ├── middleware (可选)</span><br><span class="line">│   |   └── response_time.js</span><br><span class="line">│   ├── schedule (可选)</span><br><span class="line">│   |   └── my_task.js</span><br><span class="line">│   ├── public (可选)</span><br><span class="line">│   |   └── reset.css</span><br><span class="line">│   ├── view (可选)</span><br><span class="line">│   |   └── home.tpl</span><br><span class="line">│   └── extend (可选)</span><br><span class="line">│       ├── helper.js (可选)</span><br><span class="line">│       ├── request.js (可选)</span><br><span class="line">│       ├── response.js (可选)</span><br><span class="line">│       ├── context.js (可选)</span><br><span class="line">│       ├── application.js (可选)</span><br><span class="line">│       └── agent.js (可选)</span><br><span class="line">├── config</span><br><span class="line">|   ├── plugin.js</span><br><span class="line">|   ├── config.default.js</span><br><span class="line">│   ├── config.prod.js</span><br><span class="line">|   ├── config.test.js (可选)</span><br><span class="line">|   ├── config.local.js (可选)</span><br><span class="line">|   └── config.unittest.js (可选)</span><br><span class="line">└── <span class="built_in">test</span></span><br><span class="line">    ├── middleware</span><br><span class="line">    |   └── response_time.test.js</span><br><span class="line">    └── controller</span><br><span class="line">        └── home.test.js</span><br></pre>


- `app/router.js` 用于配置 URL 路由规则
- `app/controller/**` 用于解析用户的输入，处理后返回相应的结果
- `app/service/**` 用于编写业务逻辑层，可选，建议使用
- `app/middleware/**` 用于编写中间件，可选
- `app/public/**` 用于放置静态资源，可选
- `app/extend/**` 用于框架的扩展，可选
- `config/config.{env}.js` 用于编写配置文件
- `config/plugin.js` 用于配置需要加载的插件
- `test/**` 用于单元测试
- `app.js` 和 `agent.js` 用于自定义启动时的初始化工作，可选
- `app/schedule/**` 用于定时任务，可选
- `app/view/**` 用于放置模板文件，可选，由模板插件约定
- `app/model/**` 用于放置领域模型，可选，由领域类相关插件约定，如 egg-sequelize

## 配置
egg-sequelize 配置

egg-cors 配置

中间件(Middleware) 配置



见当前目录下的其他文档



## 简单使用

###### 以获取国家接口为例
```js

// app/controller/*.js
'use strict';
const Controller = require('egg').Controller;

class TableController extends Controller {
    async getAllCountry () {
        const { ctx, app } = this;
        try {
            const list = await app.model.Country.findAll();
            let newList = list.map(itm => {
                var o = {};
                o['code'] = itm.code;
                o['cn'] = itm.chineseName;
                o['en'] = itm.englishName;
                o['createTime'] = app.dateFormat(itm.createTime);
                o['updateTime'] = app.dateFormat(itm.updateTime);
                return o;
            })
            ctx.formatResponse.list = newList;
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

```js
// app/router.js
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/table/country', controller.table.getAllCountry);
};


```

