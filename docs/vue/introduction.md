# 导读
## 认识数据驱动模式
开始接触前端编程的基本上都是先学习 DOM 节点操作，jQuery 在这一领域上一度成为了标准，所以在前端编程的领域中，jQuery 几乎是每个开发者的标配。随着前后端分离的成熟，产品或项目都趋于分布式部署，开发者已不满足于操作 DOM 节点， 设计模式便慢慢的被前端化。

数据驱动的设计模式在思维逻辑上与 DOM 节点操作完全不一样。

```html
<!-- html -->
<div id="div1"></div>
  <div id="app">
    <span>{{message}}</span>
  </div>
```
<br>

```js
// DOM 节点操作
document.getElementById('div1').innerText = '节点被动改变'  

// Vue 数据驱动： 当 message 发生改变的时候，span 会相应的发生改变，而不需要手动去改变 span。
var vm = new Vue({
  el: '#app',
  data: {
    message: '我是通过映射显示的文本'
  }
})
```

## 认识 MVVM 模式
M：Model，称之为数据模型，在前端以对象的形式表现。
```js
var data = {message: '我就是一个数据模型'}
```

V：View，视图，也就是 HTML
```js
<div id="app">
  <span>我是视图</span>
</div>
```
VM：ViewModel，就是连接数据和视图的桥梁，当 Model 发生改变的时候，ViewModel 便将数据映射到视图。

那么数据驱动模式和 MVVM 模式有什么关系，换句话说，MVVM 是数据驱动模式的一种实现，Vue 是 MVVM 的一种实现。


## 相关连接
- [Vue2.x官方文档](https://cn.vuejs.org/v2/guide/)
- [Vue-router官方文档](https://router.vuejs.org/zh/)
- [Vuex官方文档](https://vuex.vuejs.org/zh/)
- [Vue服务器端渲染](https://ssr.vuejs.org/zh/)
- [Vue-CLI3.x文档](https://cli.vuejs.org/zh/guide/)
- [Vuepress文档](https://v1.vuepress.vuejs.org/zh/)



## UI框架
- [element-ui](https://element.eleme.cn/#/zh-CN/component/installation)
- [vux](https://doc.vux.li/zh-CN/)
- [vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/guide/)
- [Vuetify](https://vuetifyjs.com/zh-Hans/getting-started/quick-start)
