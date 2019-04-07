# 格式化时间
## 简介
在 `mysql` 数据库中保存的 `datetime` 格式的时间数据，例如创建时间，更新时间等，直接拿出来是UTC时间, 前端或者后端需要有一个人处理 
```js
// 格式化时间
var dateFormat = function(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
    if (!date) return '';
    date = new Date(date); // 没有这一步，UTC时间会报错
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) 
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
```
### 使用
```js
dateFormat("2019-03-05T06:16:08.000Z") // "2019-03-05 14:16:08"
dateFormat('2013-03-01 8:1:0') // "2013-03-01 08:01:00"
dateFormat("2013-03-01 08:01:00", 'yyyy-MM-dd') // "2013-03-01"
```