# 04 数组对象
- [数组](#数组)
  - [什么叫数组](#什么叫数组)
  - [数组创建方式](#数组创建方式)
  - [数组操作](#数组操作)
  - [数组方法](#数组方法)
  - [值类型与引用类型的区别](#值类型与引用类型的区别)
  - [数组复制与传输](#数组复制与传输)
  - [数组排序](#数组排序)
  - [ES5数组新增](#ES5数组新增)
- [对象](#对象)
  - [新建对象](#新建对象)
  - [读取属性值](#读取属性值)
  - [给对象添加属性](#给对象添加属性)
  - [循环遍历](#循环遍历)
  - [数组中的对象](#数组中的对象)
  - [修改属性和方法](#修改属性和方法)
  - [对象中的this](#对象中的this)
  - [构造函数创建对象](#构造函数创建对象)
  - [对象比较](#对象比较)
  - [内建对象](#内建对象)
  - [apply和call](#apply和call)

<src-MetaChange></src-MetaChange>

## 数组
### 什么叫数组
一系列数据的集合，每一项可以保存任何类型的数据，称为数组的元素，每个元素之间用逗号隔开
```js
// 数组格式：
[1,2,3]
```

### 数组的创建方式
```js
//1)字面量（直接量）(推荐)
var arr = [1,2,3];

//2)使用构造函数创建
var arr = new Array();//创建一个空数组
var arr = new Array(7);//创建一个长度为7的数组（数组项都为undefined）
var arr = new Array('王大锤',18 ,'普通青年','广州');//创建数组并同时写入数据
```

### 数组操作
###### 数组访问与写入
```js
// 索引（下标）：从0开始
var arr = ['html5','css3','javascript'];

// 访问
arr[0]; // 'html5'
arr[2]; // 'javascript'

// 写入
arr[3] = 'web前端';
// length：表示数组的长度
arr.length; // 3
```
###### 数组遍历
```js
// for循环
// 格式：for(变量初始化;判断条件;变量更新){执行语句}
var arr = ['html5','css3','javascript'];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// 'html5'
// 'css3'
// 'javascript'
```
###### 多维数组
```js
var arr = [1, 2, 'html5', [3, 4, 'css3'], [5, 6, 'javascript']]
arr[3][2];  // 'css3'
```
### 数组方法
- push： 往数组尾部添加一个或多个元素，返回数组新的长度
- pop：删除数组最后一个元素，返回删除的元素
- unshift：往数组开头添加一个或多个元素，返回数组新的长度
- shift：删除数组第一个元素，返回删除的元素
- sort：将数组中的元素排序，并返回排序后的数组
    -   > 默认以字符串的排列方式（转换成ASCII码进行对比）

- reverse：将数组中的元素颠倒顺序，返回逆序后的数组
- slice(start[,end])：返回数组的片段或子数组，从start开始到end(不包括end所对应的元素)
    - > 如果省略end参数，则截取到数组的最后一项

- splice(start,deleteNum,…items)：在数组中插入、删除、替换的通用方法
    - start：起始索引位置
    - deleteNum：要删除的数量
    - items：插入的元素（可以是多个）
- join(separator) 返回字符串值，其中包含了连接到一起的数组的所有元素
    - separator为分隔符，默认为逗号
- concat() 返回一个新数组，这个新数组是由调用这个方法的数组和参数组成
  - > 参数可以是多个

### 值类型与引用类型的区别
|--      |   值类型  |  引用类型  |
|:------:|:---------:|:----------:|
|存储方式|直接存储数据本身|储存的是数据的引用，数据存储在堆内存中|
|内存分配|分配在栈中的    |分配在堆中                            |
|效率    |效率高，不需要地址转换| 效率较低，需要进行地址转换     |
|内存回收|使用完后立即回收|使用完后不立即回收，而是交给GC处理回收|
|赋值操作|创建一个新对象  | 创建一个引用                         |

### 数组复制与传输
- 如何复制数组
- 把数组作为函数的参数

### 数组排序
冒泡排序法

原理：
1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
3. 针对所有的元素重复以上的步骤，除了最后一个。
4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

```js
// 冒泡排序
var arr = [3,4,1,2,6,5,7,9,8]
for(var i = 0;i < arr.length;i++) {
    for(var j = 0;j < arr.length;i++){
        if(arr[j] > arr[j+1]){ //两两对比，每次把最大的值往后排
            var temp = arr[j]   //创建临时变量存放数据
            arr[j] = arr[j+1]    //交换位置
            arr[j+1] = temp    
        }
    }
    console.log(arr)    //打印出来
}
```
选择排序法
```js
// 选择排序
function SelectionSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        var min = arr[i] //假定范围内第一个为最小值
        var idx = i      //记录最小值的坐标
        for(var j = i + 1; j < arr.length; i++) {
            if(arr[j] < min) {  //如果第二个数小于最小值
                min = arr[j]    //把第二个数赋值给最小值
                idx = j         //记录下标
            }
        }
        if(idx != i) {        //把范围内的最小值交换到范围内的第一个
            var temp = arr[i]
            arr[i] = arr[idx]
            arr[idx] = temp
        }
        console.log(arr)
    }
    return arr
}
var arr = [1,10,100,90,65,5,4,10,2,4]
var res = SelectionSort(arr)
console.log(res)
```


### ES5数组新增
`Array.isArray()` 判断是否为数组  
```js
// 案例
Array.isArray([1, 2, 3]) // true
Array.isArray(1)         // false
```
`indexOf/lastIndexOf(keyword [,startIndex])` 索引方法
- keyword: 要查找的项，
- startIndex：查找起点位置的索引，该参数可选

```js
// 案例
[1, 2, 3].indexOf(1)   // 0
[1, 2, 3].indexOf(2)   // 1
[1, 2, 3].indexOf(4)   // -1
[1, 2, 3].indexOf(1,1) // -1
[1, 2, 3].lastIndexOf(1) // 0 
// lastIndexOf() 返回的结果相同，不同的是从右往左索引
```
`forEach(fn), map(fn), filter(fn),every(fn), some(fn)` 遍历数组

以上方法都对数组中的每一项运行给定函数fn,，函数中有三个形参分别为
- item：数组中的每一项,
- index：遍历过程中对应的索引值,
- array：对数组的引用

`reduce(fn,initVal)和reduceRight(fn,initVal)` 归并方法
- `fn(prev, cur, index, array)`: fn是每一项调用的函数，函数接受4个参数分别是
    - prev：前一次返回值，
    - cur：当前值，
    - index：索引值，
    - array：当前数组，
    - >函数需要返回一个值，这个值会在下一次迭代中作为prev的值
- initVal: 迭代初始值（可选），如果缺省，prev的值为数组第一项


<hr/>

## 对象Object

### 新建对象
```js
// 直接量（推荐）：
var obj = {name:'小明',age:18}

// 构造函数：
var obj = new Object();
```

### 读取属性值
可以通过中括号或者点语法读取
```js
var obj = {name: '小明', age: 18}
console.log(obj.name)   // 小明
console.log(obj['age']) // 18
```

### 给对象添加属性
也可以通过中括号，和点语法添加
```js
obj.sex = '男';
obj.marry = false;
obj['weight'] = 60
```

### 循环遍历
- for 循环
- for...in


### 数组中的对象
```js
[{
    name:'iphone7 plugs',
    price:5899.00,
    color:'土豪金',
    imgurl:'img/ip7.jpg'
},{
    name:'Note7',
    price:3899.00,
    color:'黑色',
    imgurl:'img/note7.jpg'
},{
    name:'荣耀7',
    price:1999.00,
    color:'白色',
    imgurl:'img/honor7.jpg'
}];
```

### 调用对象方法
```js
var hero = {
    breed: 'Turtle',
    occupation: 'Ninja',
    say: function() {
        return 'I am ' + hero.occupation;
    }
}

hero.say();   // 'I am Ninja'
hero['say']() // 'I am Ninja'
// 尽量别使用引号，除非别无它法
```

### 修改属性方法
```js
// 创建一个对象
var hero = {};

// 给对象添加一些属性和方法
hero.breed = 'turtle'；
hero.name  = 'coyle';
hero.sayName = function() {
    return hero.name
}

// 调用方法
hero.sayName() // 'coyle'

// 我们可以删除一个属性
delete hero.breed;
console.log(hero.breed) // undefined

// 修改对象的属性
hero.name = 'lucky'
console.log(hero.name) // 'lucky'
```

### 对象的this
```js
var hero = {
    breed: 'Turtle',
    occupation: 'Ninja',
    say: function() {
        return 'I am ' + this.occupation;
    }
}

hero.say() // 'I am Ninja'
```
### 构造函数创建对象
```js
function Hero () {
    this.occupation = 'Ninja'
} 

var h1 = new Hero()
h1.occupation = 'Ninja'
h1.constructor // function Hero () {...}  
// 使用构造函数的好处之一就是可以在创建对象的时候接收一些参数，按照惯例，我们应将构造函数首字母大写，以便显著区分其他函数

// 但是如果调用构造函数是忽略了new 操作符
var h2 = Hero()
typeof h2 // undefined
typeof h2.occupation // 'TypeError: Cannot read property occupation of undefined'
```

### instanceof操作符
通过instanceof操作符，我们可以测试一个对象是不是由某个构造函数创建的
```js
function Hero (name) {
    this.name = name
}
h1 = new Hero('coyle')

h1 instanceof Hero // true
```
### 对象比较
```js
var obj1 = {breed: 'dog'};
var obj2 = {breed: 'dog'};
obj1 === obj2 // false

var mydog = obj1
// mydog 和 obj1 所指向的对象是相同的
mydog === obj1 // true
mydog === obj2 // false
```

### 内建对象
###### Object
Object 是 JavaScript 中所有对象的父级对象，
```js
var o = {}
var o = new Object()
// 上面这两行代码的执行结果是等价的

o.constructor // 返回构造函数的引用 
// function Object() {native code}

o.toString()  // 返回对象的描述字符串
// [object object]

o.valueOf()   // 返回对象的单值描述信息，通常返回的就是对象本身
// {}
o.valueOf === o // true
```
###### Array
同上, Array 是 JavaScript 中所有数组的父级对象
```js
var arr = [];
var arr = new Array();
// 上面也是等价的

arr.constructor // function Array () { [native code] }
arr.toString()  // ''
arr.valueOf()   // []
// 既然数组也是由构造器生成，那个这也意味着数组实际上也是一个对象
typeof arr // object
```
数组与对象的区别
- 数组的属性名是从0开始递增，并自动生成数值
- 数组拥有一个记录元素数量的属性
- 数组在父级对象的基础上扩展了更多额外的内建方法

```js
// 我们来验证一下数组于对象的区别
var a = [], o = {};
a.length // 0
o.length // undefined
```
###### Function
函数的构造器是Function(), 也就是说 Function 是所有的函数的父级对象

与其他内建对象一样，函数对象中也有constructor的属性，其引用的就是 Function() 这个构造函数
```js
function fun1(a) {
    return a
}

fun1.constructor // function Function() { [native code] }
fun1.toString() 
// ' function fun1(a) { return a } '
// 但我们如果想用这个方法查看内建函数的源码的话 就会的到一个毫无用处的字符串[native code]
parseInt.toString() // function parseInt() { [native code] }

fun1.length // 1
// 另外函数也有length属性，用于记录实参的数量
```
`prototype` 属性是 JavaScript 中使用最广泛的函数属性

- 每个函数的 prototype 属性都指向了一个对象
- 它只有在该函数是构造函数时才发挥作用
- 该函数创建的所有对象都会持有一个该 prototype 属性的引用，并可以将其做自身的属性来使用

```js
// 我们来演示一下 prototype 属性的使用
var ninja = {
    name: 'Ninja',
    say: function() {
        return 'I am a ' + this.name
    }
}

function F() {}
typeof F.prototype // object

// 我们将F.prototype进行修改
F.prototype = ninja;
var baby_ninja = new F()
console.log(baby_ninja.name) // 'Ninja'
baby_ninja.say() // I am a Ninja
```

arguments对象

arguments看上去像一个数组，但他实际是一个类似数组的对象，他和数组类型是应为其中也包含了**索引元素和length属性**，但相似之处也就到此为止了，arguments不提供像sort(),push等方法
```js
function f () {
    return arguments
}

f(1,2,3) // [1, 2, 3]

// 我们可以使用call()实现
function f() {
    var args = [].slice.call(arguments);
    return args.reverse()
}
```

数据类型判断
```js
Object.prototype.toString.call('s')   // [object String]
Object.prototype.toString.call(1)     // [object Number]
Object.prototype.toString.call([1,2]) // [object Array]

var toStr = Object.prototype.toString

(function() {
    return toStr.call(arguments)
})() // [object Arguments]

toStr.call(document.body) // [object HTMLBodyElement]
```
### apply和call
在 JavaScript 中每个函数都有 apply() 和 call() 两个方法，你可以用它们来触发函数，并指定相关的调用参数

**此外，这两个方法还有另外一个功能，他可以让一个对象去借用另一个对象的方法，并为己所用。这也是一种非常简单的代码重用**

```js
var some_obj = {
    name: 'Ninja',
    say: function(who) {
        return 'Haya ' + who + 'I am a ' + this.name 
    }
}

some_obj.say('coyle') // Haya coyle I am a Ninja
var my_obj = {name: 'ducky'};
some_obj.say.call(my.obj, 'coyle') // Haya coyle I am a ducky
//
```
 由于我们在调用say()函数的对象方法call()时传递了两个参数，对象my_obj,和字符串'coyle',这样一来，当say()被调用时，**其中的this被设置成my_obj的引用。所以，我们看到，this.name返回的不再是Ninja，而是my_obj的name**
 
 另外，如果我们没有将对象传递给call()的首参数，或者传递的是null,它的调用对象会被默认为全局对象
 
 apply 和 call 的工作方式基本相同，唯一的不同是参数传递形式，apply接受的是数组
 ```js
 // 例如
 some_obj.someMethod.apply(my_obj, ['a', 'b', 'c'])
 some_obj.someMethod.call(my_obj, 'a', 'b', 'c')
 ```
 
 
 
 