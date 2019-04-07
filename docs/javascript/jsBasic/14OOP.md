# 14 面向对象
- [了解面向对象](#了解面向对象)
    - [js两种开发模式](#js两种开发模式)
    - [面向对象和面向过程的区别](#面向对象和面向过程的区别)
    - [对象的组成](#对象的组成)
    - [如何描述一个对象](#如何描述一个对象)
- [如何创建对象](#如何创建对象)
- [自定义构造函数](#自定义构造函数)
    - [实例](#实例)
    - [构造函数与普通函数的区别](#构造函数与普通函数的区别)
    - [this](#this)
    - [原型对象](#原型对象)
    - [如何获取原型对象](#如何获取原型对象)
    - [判断](#判断)
    - [实际应用](#实际应用)
- [面向对象其实只做两件事情](#面向对象其实只做两件事情)
- [匿名函数](#匿名函数)
- [ES5对象扩展](#ES5对象扩展)

<src-BackToTop></src-BackToTop>
<src-MetaChange></src-MetaChange>

## 了解面向对象
面向对象是利用对象进行编程的一种思想`（Object-oriented programming,缩写:OOP）`

### javascript两种开发模式
面向过程 

面向对象

### 面向对象和面向过程的区别
- 小狗觅食（闻一闻smell、舔一舔lick、咬一咬bite）
    > 分别采用面向过程和面向对象来分析

    - 面向过程 : 先闻一闻, 然后再舔一舔, 最后再咬一咬 (注重的是步骤) 
    - 面向对象 : 小狗是一个对象, 它可以闻一闻食物, 可以舔一舔食物, 可以咬一咬食物。然后对小狗说：旺财去闻一闻，旺财去舔一舔，旺财去咬一口 (指挥小狗)

### 对象的组成
- 属性(变量)：
    > 对象有什么
- 方法(函数)：
    > 对象能做什么

### 练习如何描述一个对象
描述一个人
描述购物车
QQ聊天窗口

## 如何创建对象
- 直接量

```js
var student = { id:10, name:'小明',age:18 }
```
- new关键字

```js
var student = new Object()
student.id = 10;
student.name = '王铁锤';
student.age = 18;
```
缺点：使用同一个接口创建很多对象，会产生大量的重复代码

- 封装工厂函数
    > 为了减少重复代码，对上述代码进行封装

## 自定义构造函数
```js
function Student(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function(){ alert(this.name); };
}
var s1 = new Student("王铁锤", 18);
```
new调用构造函数时经历以下4步（重要）：
1. 创建一个Object对象
2. 将构造函数的this指向这个对象
3. 执行构造函数中的代码
4. 返回Object对象

### 实例
- 用new关键字生成的对象称为实例
- 实例包含一个内部属性`[[prototype]]`，指向原型对象

### 构造函数与普通函数的区别
> 唯一区别：调用方式不同

- 任何函数，只要通过new操作符来调用，它就可以作为构造函数；
- 而任何构造函数，如果不通过new 操作符来调用，那它跟普通函数无区别。

> 约定：构造函数名首字母大写

### this
函数中的this作为JS的关键字，有特殊的含义，代表了当前对象，而当前对象是谁，由函数执行时所处的环境来决定

> this好比一句话, 出自不同人之口, 代表的人就不一样<br>
如A和B吵架：<br>
A对B说: “老子要弄死你! ” , 这里的老子指A <br>
B对A说: “好怕怕，你吓死老子了 ”, 这里的老子指B

- 用new关键字调用：this指向生成的实例对象
- 普通函数调用：this指向调用函数的对象

### 原型对象
- constructor：指向构造函数
- 原型对象中的属性和方法可以让所有对象实例共享

### 如何获取原型对象
- 通过构造函数：prototype
- 通过实例
    - FF,Chrome：__proto__；
    - ES5方式：`Object.getPrototypeOf(实例)；`
[构造函数、原型对象和实例的关系图]

### 判断
- 判断原型和实例的关系（返回布尔值）
    - constructor: 一般用于判断该实例是否由某一构造函数生成
        > `实例.constructor == Student //true`

    - instanceof: 检测某个对象是不是某一构造函数的实例
    
        ```
        实例 instanceof Student //true
        实例 instanceof Object //true
        ```
    - isPrototypeOf: 判断当前对象是否为实例的原型
        > `原型对象.isPrototypeOf(实例) //true`

### 实际应用
构造函数方法很好用，但是单独使用存在一个浪费内存的问题（所有的属性/方法都写入实例中）。这样既不环保，也缺乏效率。

**解决方案:构造函数+原型对象**

- 构造函数中添加属性
- 原型对象中添加方法
    > 实例中的属性减少了，原型对象中的方法又能被所有的实例共享，最大限度的节省了内存

## 面向对象其实只做两件事情
1. 创建并描述对象
    - 描述属性
    - 描述方法（遵循单一原则：一个方法只做一件事情）
2. 操作对象
    > 指挥对象实现某种效果

## 匿名函数
- 匿名函数与具名函数的区别
- 匿名函数自动执行

```js
(function(){
    alert("abc");
})();
```
使用()将匿名函数包围，然后再调用,这叫做匿名函数的自运行

- 匿名函数传参

[案例]
- 烟花效果
- 弹幕效果
- 采用面相对象改造轮播图
- 面向对象放大镜效果
- 面向对象的弹窗
- 利用面向对象技术封装获取元素的方法（简化版jquery）


## ES5对象扩展
- 属性特性
- `Object.create(prototype)`  以指定的原型创建对象

- `Object.defineProperty(object, propertyname, descriptor)` 对指定的对象的一个属性设置属性特性
    - 值属性
        - configurable 可配置性，控制着其描述的属性的修改，表示能否修改属性的特性
        - enumerable
可枚举性，表示能否通过for-in遍历得到属性
        - writable
可写性，表示能否修改属性的值
        - value
数据属性，表示属性的值。默认值为undefined
    - 访问器属性
        - configurable
        - enumerable
        - get  在读取属性时调用的函数。只指定get则表示属性为只读属性。默认值为undefined
        - set  在写入属性时调用的函数。只指定set则表示属性为只写属性。默认值为undefined
- `Object.defineProperties(object, descriptors)` 对指定的对象的一组属性设置属性特性
- `Object.getOwnPropertyDescriptor(object, propertyname)` 返回属性特性
- `Object.keys(object)` 返回对象所有可枚举属性的名称
- `Object.getOwnPropertyNames(object)` 返回所有属性的名称（哪怕说是不能枚举的属性）