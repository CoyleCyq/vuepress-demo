# 测试接口，脚本的运行时间

## 相关知识点
`javascript` 提供`console.time()` 和`consle.timeEnd()` 两个方法

- `console.time`方法是开始计算时间
- `console.timeEnd`是停止计时，输出脚本执行的时间。

## 使用
以接口为例：
```js
// 例如在jquery的ajax全局配置中
$.ajaxSetup({
    global: true, 
    type: 'POST', 
    dataType: 'json', 
    contentType: 'application/json',
    timeout: 1800000,
    error: function() {
        
    },
    beforeSend: function() { // 在请求前使用console.time()
        console.time(this.url);
    },
    complete: function() { // 请求结束后使用console.timeEnd()
        console.timeEnd(this.url);
    }
})

// 注意console.time(), console.timeEnd() 需要接收相同的字符串， 表示同一组
```