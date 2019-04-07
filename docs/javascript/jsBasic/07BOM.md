# 07 BOM
- [BOM的概念](#BOM的概念)
- [window对象](#window对象)
- [全局作用域](#全局作用域)
- [window对象下的属性](#window对象下的属性)
    - [常用属性](#常用属性)
    - [常用方法](#常用方法)
    - [属性对象](#属性对象)
- [window对象常用事件](#window对象常用事件)

<src-BackToTop></src-BackToTop>
<src-MetaChange></src-MetaChange>

## BOM的概念
`BOM`是`Browser Object Model`（浏览器对象模型）的缩写，提供与浏览器窗口进行交互的对象。`JavaScript`语法的标准化组织是E`CMA`，`DOM`的标准化组织是`W3C`, 而`BOM`缺乏标准。这也是各种浏览器不兼容的根源所在
## window对象
window对象是BOM的核心, 是最顶层的对象，所有对象都是通过它延伸出来的，如图:

### 全局作用域
- 定义在全局环境下的变量都会成为window对象的属性
- 把变量定义在函数体里，可以有效减少全局环境下的变量冲突，避免污染全局环境
- 通过var在全局作用域下声明的变量用delete无法删除

```js
var obj = {name:'xxx'}

// 删除对象的属性用delete：
delete obj.name;
```
- 在函数内部不用var声明的变量会成为全局变量，即window对象的属性
- window对象可以在代码中省略，如window.alert()可以写成alert();

## window对象下的属性
### 常用属性
- 浏览器窗口尺寸
    - `innerWidth/innerHeight` 表示浏览器窗口”可视区域”尺寸
    - `outerWidth/outerHeight` 表示整个浏览器窗口的尺寸
- 滚动相关
    - `scrollX/scrollY` 获取浏览器窗口滚动条滚动过的距离
    - `scrollTo(x,y)`   设置浏览器滚动距离
    - `scrollBy(xnum,ynum)` 设置基于当前位置滚动的距离，可以为负数

### 常用方法
- 系统对话框
    - `alert(msg)` 弹出对话框
    - `confirm(msg)` 弹出警告框，返回布尔值
    - `prompt(msg,default)` 弹出输入框，返回消息或`null`
    - > 上面三个方法都是中断代码的执行
    
    - `open(url,name,[options])` : 打开一个新窗口并返回新 `window` 对象
        - `name` : 不命名会每次打开新窗口，命名的第一次打开新窗口,之后在这个窗口中加载
        - `options` 为字符串：`'width=400,height=400,top=200,left=200'`
        - `opener`父窗口对象，通过open方法打开的窗口才有opener对象
    - `close()`: 关闭窗口
    - `print()`: 调出打印对话框


### 属性对象
- `document`(核心): 文档对象，让我们可以在js脚本中直接访问页面元素(DOM)
- > 在DOM章节详细讲解

- `history` (重要): 历史对象,包含窗口的浏览历史，可以实现后退
    - 属性:
        - `length` 返回浏览器历史列表中的 URL 数量。
    - 方法：
        - `back()` 加载 history 列表中的前一个 URL。
        - `forward()` 加载 history 列表中的下一个 URL。
        - `go()` 加载 history 列表中的某个具体页面，支持负数。
        ```js
        history.go(2) // 向前两个页面；
        history.go(-2) // 后退两个页面
        ```
- `location` (重要): location是BOM最有用的对象之一，保存着当前窗口中加载文档的相关信息，还提供一些导航功能，它是个很特别的对象，既是window的属性，也是document的属性  
    - 属性：    
        - `hash` 设置或返回从井号 (#) 开始的 URL（锚）==&gt;哈希值。
        - `href` 设置或返回完整的 URL。
        - `search` 设置或返回从问号 (?) 开始的 URL（查询部分）。
        
        > PS：修改以上属性(hash除外)都会刷新当前页面，并生成历史纪录
        
    - 方法：
        - `reload()`  重新加载当前文档，带参数true表示不使用缓存刷新页面。

- `navigator` : 导航对象, 包含所有有关访问者浏览器的信息，通常用于检测浏览器类型
    - `appName` 浏览器名称
    - `appVersion` 浏览器版本
    - `platform` 操作系统
    - `userAgent` 用户代理信息，通过该属性可以获取浏览器及操作系统信息
    - `geolacation` 获取地理位置信息


## window对象常用事件
- `onload` 页面资源全部加载完成后触发这个事件
- `onbeforeunload` 页面关闭时触发这个事件
- `onscroll` 滚动窗口滚动条时触发
    - `document.documentElement` 表示html元素
    - `document.body` 表示body元素
    - `document.documentElement.scrollTop` 表垂直的滚动条，向下滚动的距离（FF、Opera和IE）
    - `document.body.scrollTop` 代表垂直的滚动条，向下滚动的距离（chrome和IE的quirks mode兼容模式）
- `onresize` 窗口大小改变时触发 
