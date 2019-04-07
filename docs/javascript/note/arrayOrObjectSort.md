# 数组对象排序

## 知识点
```
数组方法中的 sort()
语法：arr.sort(fun())
sort 函数默认不传参数是以ASCII码排序
参数：可以接收一个参数，这个参数可以是函数，即排序逻辑
```

## 排序逻辑
```js
// compare函数 (重点在排序逻辑)
var compare = function (prop) {
    return function (obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];
        if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
            val1 = Number(val1);
            val2 = Number(val2);
        }
        if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0
        }
    }
}
// 使用
arr.sort(compare('要比较的字段'))
```

## 案例
```js
// 完整案例
var dataList = [
    { age: 20, enName: 'Jack' },
    { age: 30, enName: 'Alice' },
    { age: 18, enName: 'Tom' },
    { age: 25, enName: 'Coyle' },
    { age: 60, enName: 'Cyle' }
] 

var compare = function (prop) {
    return function (obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];
        if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
            val1 = Number(val1);
            val2 = Number(val2);
        }
        if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0
        }
    }
}
dataList.sort(compare('age')) // 按年龄排序
dataList.sort(compare('enName')) // 按英文名排序
```