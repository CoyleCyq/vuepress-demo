# 02 语句
- [分支语句](#分支语句)
    - [if语句](#`if`语句)
    - [switch语句](#`switch`语句)
- [循环语句](#循环语句)
    - [while语句](#`while`语句)
    - [dow...while语句](#`do...while`语句)
    - [for语句](#for语句)

<src-BackToTop></src-BackToTop>
<src-MetaChange></src-MetaChange>

## 分支语句
### `if`语句
`if` 单分支语句语法：
```js
if (condition) {
    // 满足条件执行这里
} else {
    // 不满足条件执行这里
}
```
单分支语句可以用三元运算表示：
```js
// 语法： 条件 ? 条件成立代码 : 条件不成立代码
// 例如
a > b ? a : b // 该语句表示：如果a大于b则返回a,否则返回b
```
`if` 多分支语句语法：
```js
if (condition1) {
    // 满足条件1，执行这里的代码
} else if (condition2) {
    // 满足条件2，执行这里的代码
} else if (condition3) {
    // 满足条件3，执行这里的代码
} else {
    // 如果都不满足，执行这里的代码
}
```
### `switch`语句
```js
// switch语法
switch (condition) {
    case value1:
    // 条件恒等于value1，执行这里的代码
    break;
    case value2:
    // 条件恒等于value2，执行这里的代码
    break;
    default:
    // 如果都不满足，执行这里的代码
}
```


## 循环语句

### `while`语句
```js
// while 循环语句
while (condition) {
    // 条件成立，不断执行这里的代码，直到条件不成立，这里一般包含条件更新语句
}
// while循环语句可能永远不会被执行
```
### `do...while`语句
```js
// do...while循环语句
do {
    // 不管满不满足条件，先执行这里的语句，再判断是否满足条件，是，继续执行，否，跳出循环，这里一般也包含条件更新
} while (condition)
// do...while循环语句常用于至少要被执行一次的情形
```

### `for`语句
```js
for (变量初始化; 条件; 变量更新) {
    // 执行这里的代码
}
```

### 循环跳出
```js
break // 跳出当前循环
continue // 跳出本次循环，继续下一次循环，不推荐使用，我们可以通过修改循环体，达到相同的效果
label // 给循环代码添加标识
```
### 循环语句的使用场景
固定次数的循环用`for`语句，不固定次数的循环使用`while`语句或者`do...while`语句

### `ES5, ES6，JQuery`的 循环语句，方法
#### `Array.forEach(function (value, index, array) {})`
`forEach()`方法是`ES5`新增的数组方法，只能遍历数组，而且不能被终止（`break`无效）
```js
[1,2,3].forEach(function(value, index, array) {
    console.log(value, index, array) 
})
// 1 0 [1,2,3]
// 2 1 [1,2,3]
// 3 2 [1,2,3]
```
#### `$.each([], function (index, value, array) {})`
`$.each()`是`jquery`的遍历方法，能够遍历数组，对象，参数和`forEach()`相反
```js
$.each([1,2,3], function(index, value, array) {
    console.log(index, value, array)
})
// 0 1 [1,2,3]
// 1 2 [1,2,3]
// 2 3 [1,2,3]

// 此循环用于循环DOM节点
$(selector).each(function(index, value, array) {
    console.log(index, value, array)
})
```
#### `for...in` 遍历 `(ES5)`
能够遍历数组，对象，但是不推荐遍历数组，`for...in`循环出的是`key`, 而且原型链上的属性也会被遍历到，因此一般常用来遍历非数组的对象并且使用`hasOwnProperty()`方法去过滤掉原型链上的属性
```js
var myArry =[1,2,3,4];
myArry.desc ='four';
for (var value in myArry) { //循环key
    console.log(value)
}
// 0
// 1
// 2
// 3
// 'desc'

// 结论：所以一般使用for in 循环对象
```

#### `for...of` 遍历 `(ES6)`
`for...of`循环出的是`value`, 适合遍历数组，

这个方法是最简洁的,并且修复了`for-in`循环的所有缺点,**与`forEach()`不同的是,它可以正确的响应`break,contine,return`语句**

不仅如此,`for-of`还可以支持大部分的类数组对象 **注意:`for-of`循环不支持普通对象,但是如果你想迭代一个对象的属性,可以使用`for-in`循环(这也是它的本职工作)或者内建的`Object.keys()`方法**
```js
var a = ["a", "b", "c"];
for (var value of a) { // 循环的是value
  console.log("for of:" + value);
}
// for of:a
// for of:b
// for of:c
```