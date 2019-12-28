# 03 函数
- [了解函数](#了解函数)
- [函数的声明](#函数的声明)
- [函数的执行](#函数的执行)
    - [常见事件触发函数](#常见事件触发函数)
- [作用域](#作用域)
- [变量声明提前](#变量声明提前)
- [函数的参数](#函数的参数)
- [return](#return)
- [内建函数](#内建函数)
- [递归函数](#递归函数)
- [回调函数](#回调函数)
- [即时执行函数](#即时执行函数)


## 了解函数
函数就是把特定功能的代码抽取出来并进行封装，用来重复执行一些功能，并起个名字（函数名）。函数对任何语言来说都是一个核心的概念。通过函数可以封装任意多条语句，而且可以在任何地方、任何时候调用执行

- 使用函数的好处
    - 函数可以在同一个程序或其他程序中多次重复使用（通过函数名调用）
    - 使程序变得更简短而清晰
    - 有利于程序维护

## 函数声明

##### 声明式
```js
// 语法
function test () {
    
}
```
> 函数的声明会提前 ==> 解析器会率先读取函数声明，并使其在执行任何代码之前可用（可以访问）;

###### 赋值式
```js
// 语法
var test = function () {
    
}
```
###### 构造函数(不推荐)
```js
// 语法
var test = new Function('num1', 'num2', 'return num1 + num2')
```
###### 匿名函数
没有名字的函数就叫匿名函数

## 函数的执行
###### 手动调用
```js
test();
```
###### 事件驱动
```js
// 语法： 元素.事件 = 函数名
button.onclick = test;
```
### 常见事件触发函数
- onclick    : 点击事件
- ondblclick : 双击事件
- onmouseover: 鼠标移入事件
- onmouseout : 鼠标一开事件
- onchange   : 内容改变事件（一般用于表单元素） 
- onkeyup    : 键盘按键弹起事件

## 作用域
- 俗称使用范围，分为**全局作用域和局部作用域**
- 在全局作用域下的变量称**全局变量**,在局部作用域下的变量称**局部变量**
    - 全局变量：声明在函数外的，可以在任意一个函数中使用，作用范围比较大，我们称为全局变量
    - 局部变量：在函数内声明的变量，只在函数中可以使用，作用范围较小，我们称之为局部变量
- 函数内部能访问函数外部的变量
    - **就近原则**（如查找变量a）：
        - 使用变量a时先从当前函数查找，如果当前函数有变量a则使用;
        - 如果当前函数无变量a,则往父级函数查找，如果找到则使用，并停止查找;
        - 如果在父级函数还是无法找到，则继续往上一层函数查找，以此类推，直到最顶层(全局作用域)，如果还是没找到，则报not defined错误;
    - **作用域链**：每个函数在定义时就形成了局部作用域，如果存在多个函数嵌套，他们之间就会建立起某种联系，直到全局作用域，这种联系称之为作用域链。当函数访问变量时，根据就近原则在这个作用域链中从内到外查询变量。

## 变量声明提前
> 没有赋值的变量默认为undefined

```js
var a = 10;
function test(){
    alert(a);
    var a = 20;
}
test() // 思考：会得到什么信息？
```
执行test函数后，会弹窗提示undefined

> 思考：为什么是undefined？ 为什么不是10？， 为什么不是20？

## 函数的参数
- 参数就是局部变量
- 形参与实参的区别
    - 形参：声明函数时圆括号内定义的变量
    - 实参：函数执行时传入的参数
    > 形参和实参的数量可以不同
- arguments

  函数内部隐藏的对象（是一个类数组）保存着实参的信息
    - length: 实参的数量
    - callee: 对函数本身的引用
- 引用数据类型与基本数据类型的传参（引用传递与值传递）
    - 函数作为参数传递

## return
1. **终止函数的执行,return后的代码不会执行**
2. return后如果有值，则把这个值返回到函数执行的地方
    > 如果函数没有return,执行完后返回undefined

## 内建函数
JavaScript引擎中有一组可供随时调用的内建函数

`parseInt()` 将参数转成整数类型，转换失败返回NaN,在遇到第一个异常字符时就会放弃
```js
// 案例
parseInt('123')       // 123
parseInt('abc123')    // NaN
parseInt('1abc123')   // 1
parseInt('123abc123') // 123
// parseInt还可以传入第二个参数 基数，
parseInt('FF', 10) // NaN
parseInt('FF', 16) // 255
parseInt('0377', 10) // 377
parseInt('0377', 8)  // 255
```
`parseFloat()` 和parseInt相同
```js
parseFloat('123')       // 123
parseFloat('1.23')      // 1.23
parseFloat('a123')      // NaN
parseFloat('123abc123') // 123
```
`isNaN()`
```js
isNaN(NaN) // true
isNaN(123) // false
// isNaN也会将参数转换成数字
isNaN('123')   // false
isNaN('a1.23') // true
```
`isFinite()` 可以用来检查输入的是否是一个即非Infinity也非NaN的数字
```js
isFinite(Infinity) // false
isFinite(12) //true
isFinite(1e308) // true
isFinite(1e309) // false
```
`encodeURI()`和`decodeURI()`，`encodeURIComponent()`和`decodeURIComponent()` 编码与反编码

`eval()` 会将输入的字符串当做JavaScript代码来执行
```js
eval('var li = 15')
// eval()不推荐使用
// 安全性方面--JavaScript拥有的功能很强大，但这也意味着有很大的不确定性
// 性能方面--它是一种由函数执行的'动态' 代码，所以要比直接执行脚本要慢
```
`alert()` alert函数会阻塞当前浏览器线程，也就是说在alert()窗口关闭之前，当前的代码都会暂停执行
## 递归函数
函数可以自己调用自己, 成为函数的递归调用

递归调用的过程:
1. 首先去找临界值，即无需计算，获得的值(一般是返回该值)。
2. 找这一次和上一次的关系(一般从后往前找)
3. 假设当前函数已经可以使用，调用自身计算上一次的运行结果，再写出这次的运行结果

```js
// 递归案例
/*
	使用递归写一个算法
	输入[1,2,[3,4],5,[6,7,8,9],10]
	返回[1,2,3,4,5,6,7,8,9,10]
	思路：先遍历数组，判断数组每一项是不是数组
	是数组就合并到新数组，
	不是数组就push到新数组里面
	知识点：函数递归		
*/
var flattenArrays = function(arr) {
    var newArr = [ ];
    for (var i = 0 ; i < arr.length ; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flattenArrays(arr[i]))
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(flattenArrays([1,2,[3,4],5,[6,7,8,9],10])) // [1,2,3,4,..,10]
```


## 回调函数
回调函数就是将函数作为参数，传递给另一个函数
```js
// 案例
function multiplyByTwo (a, b, c, callback) {
    var i, arr = [];
    for(i = 0; i < 3; i++) {
        arr[i] = callback(arguments[i] * 2)
    }
    return arr;
} 

multiplyByTwo(1, 2, 3, function(a) {
    return a + 2
})
// [4, 6, 8]
```
## 即时执行函数（IIFE）
`immediately-invoked function expression`

函数定义后立即调用
```js
// 语法
(function () {
    // 逻辑
})()

// 向匿名函数传参
(function($) {
    // 可以使用jquery
})(JQuery)
```

 