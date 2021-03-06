# 01 数据类型
- [历史](#历史)
    - [诞生](#诞生) 
    - [版本](#版本) 
    - [作用](#作用)
- [变量](#变量)
    - [变量命名规则](#变量命名规则)
- [数据类型](#数据类型)
- [运算符](#运算符)

## 历史
### 诞生
诞生于1995年由Netscape(网景公司)的程序员Brendan Eich(布兰登)与Sun公司联手开发一门脚本语言, 最初名字叫做Mocha，1995年9月改为LiveScript。12月，Netscape公司与Sun公司（Java语言的发明者）达成协议，后者允许将这种语言叫做JavaScript。
1996年3月， Netscape公司的浏览器Navigator2.0浏览器正式内置了JavaScript脚本语言. 此后其他主流浏览器逐渐开始支持JavaScript.

### 版本
1997年7月，ECMAScript 1.0发布。

1998年6月，ECMAScript 2.0版发布。

1999年12月，ECMAScript 3.0版发布。

2007年10月，ECMAScript 4.0版草案想要提交ECMA组织, 但由于4.0版的目标过于激进, 改动太大, 并且微软,谷歌等大公司极力反对；一直到2008年7月ECMA开会决定，中止ECMAScript 4.0的开发（即废除了这个版本）

2009年12月，ECMAScript 5.0版正式发布

2011年6月，ECMAscript 5.1版发布

2015年6月，ECMAScript 6正式发布###，并且更名为“ECMAScript 2015”。

### 作用
验证表单数据，页面交互，加强用户体验度
用于开发网站，游戏，移动端app

## 变量
### 变量命名规则
1、变量名可以是数字，字母，下划线"_"，美元符"$"组成，

2、变量名不能以数字开头，

3、变量名尽量见名知意，

4、变量名尽量遵守驼峰原则，

5、变量名不能是关键字或保留字，

6、变量名区分大小写，

## 数据类型

### 数字
数字包括浮点数和整数，例如1，100，3.14

### 字符串
包括任意字符组成的序列，使用单引号或者双引号包裹的内容，例如 "a", "hello" ,'world', '21'

### 布尔值
包括true,false

### undefined
当我们试图访问一个不存在的变量时，就会得到undefined，所有已声明但未赋值的变量都是undefined，undefined类型的值只有一个，就是undefined

### null
null类型的值也只有null一个，null值通常是指没有值或空值

**以上5种数据类型也叫基本数据类型（Number, String, Boolean, undefined, null），基本数据类型都存放在栈内存中**

### 数组
数组就是一组有序的，可以是任意数据类型的集合，例如 [1, 'hello', true, undefined, {key: name, value: 'coyle'}, [2,3,4]]

### 对象 
对象是一组无序属性的集合，例如{name: 'coyle', age: 21}

**以上2中（数组，对象）也叫引用数据类型，其中变量名存放在栈内存中，值存放在堆内存中**

### typeof--查看类型操作符
使用typeof可能返回的值：number, string, boolean, undefined, object, function共6个
```js
// 使用typeof判断特殊值

typeof(undefined)		// Undefined

typeof(null)			// Object

typeof（document）	    // Object

typeof（window）		// Object

typeof（Date）		    // Function

typeof（eval）		    // Function
```

### 指数表示法
一个数字可以表示为1e1,或者1E1,意思是在整数1的后面加一个0，同理2e3的意思是在2的后面加3个0
```js
console.log(1e1) // 10 
console.log(2e3) // 2000
console.log(2e-1) // 0.2
// 2e3也可以理解为将2的小数点向右移3位，2e-1可以理解为将2的小数点向左移1位
```
### Infinity 最大数
在javascript中，有一个叫做Infinity的特殊值，它代表的是超出javascript处理范围的值,javascript能处理的最大值为1.7976931348623157e308,最小值是5e-324
```js
typeof Infinity // number
console.log(Infinity) // Infinity
1e309 // Infinity
1e308 // 1e308
4/0 // Infinity 任何数除以0都等于Infinity

// 最小数的表示方法就是在Infinity前加一个负号
Infinity - Infinity // NAN
-Infinity + Infinity // NAN

// Infinity与任何数运算都等于Infinity
Infinity + 1 // Infinity
```
### NaN  (Not A Number的缩写)
NAN还是数字类型
```js
typeof NaN // number

// 当我们在算术运算中使用了不恰当的操作数，导致运算失败，就会返回NaN
10 * 'gg' // NaN

// NAN具有传染性，任何与NAN运算的结果，都会返回NAN
100 * NaN // NaN  

// NaN不等于任何东西 包括它自己
NaN == NaN // false
```
### undefined和null
当我们在声明一个变量，但不初始化是，javascript会自动使用undefined值来初始化这个变量
```js
var some;
some === undefined // true
typeof(some) // undefined
// 但null就完全是另一回事
var some = null
console.log(some) // null
typeof some // object


var i = 1 + undefined 
console.log(i) // NaN

var i = 1 + null
console.log(i) // 1


// 转换为数字
var i = 1 * undefined
console.log(i) // NaN

var i = 1 * null
console.log(i) // 0


// 转换为布尔值
!!undefined // false
!!null      // false


// 转换为字符串
console.log('value: '+ undefined) // 'value: undefined'
console.log('value: '+ null) // 'value: null'
```

### 数据类型转换
| 值 | 转换为    | 字符串      | 数字 | 布尔值 |
|:--:|:---------:|:-----------:|:----:|:------:|
|undefined | ==> | 'undefined' | NAN  | false  |
|null      | ==> | 'null'      | 0    | false  |
|true      | ==> | 'true'      | 1    | --     |
|false     | ==> | 'false'     | 0    | --     |
|''        | ==> | --          | 0    | false  |
|'1.2'     | ==> | --          | 1.2  | true   |
|'one'     | ==> | --          | NAN  | true   |
|0或-0     | ==> | '0'         | --   | false  |
|NAN       | ==> | 'NAN'       | --   | false  |
|Infinity  | ==> | 'Infinity'  | --   | true   |
|-Infinity | ==> | '-Infinity' | --   | true   |

从上表格可以看出有六个值转换为布尔类型返回false，其他的转布尔都返回true
这六个值为
```js
'', // 空字符串
null
undefined
false
0或-0
NaN
// 这6个值被我们称为falsy,而其他值被称为truthy
```

## 运算符
### 算术运算符
| 运算符 | 名称 |
|:------:|:----:|
|+       | 加法运算 |
|-       | 减法运算 |
|*       | 乘法运算 |
|/       | 除法运算 |
|%       | 求余运算 |

### 复合运算符
| 运算符 | 案例 |
|:------:|:----:|
|+=       | a += 3 相当于 a = a + 3 |
|-=       | a -= 3 相当于 a = a - 3 |
|*=       | a *= 3 相当于 a = a * 3 |
|/=       | a /= 3 相当于 a = a / 3 |
|%=       | a %= 3 相当于 a = a % 3 |

### 单目运算符

| 运算符 | 名称 |
|:------:|:----:|
|++      | 自增运算 |
|--      | 自减运算 |

```js
// 后置自增，后置自减 ==》 先返回再运算
var a = 3
var b = a++
console.log(a) // 4
console.log(b) // 3

// 前置自增，前置自减 ==》 先运算再返回
var a = 3
var b = ++a
console.log(a) // 4
console.log(b) // 4

// 非数字类型自增自减
var s1 = "2"  s1++;     //值变成3
var s2= "z"    s2++;	//值变成NAN
var s3 = false; s3++;   //值变成1（先转成0在加1）
var s4 = 1.1; s4++;	    //值变成2.1
var s5 = {valueOf:function(){return -1}}	s5++ //值变成0
```
### 逻辑运算
| 运算符 | 名称 |
|:------:|:----:|
|&&      | 逻辑与 |
| \|\|   | 逻辑或 |
|！      | 逻辑非 |

### 操作符优先级


| 运算符   | 描述 |
|:------:  |:----:|
|`., [], () `| 对象成员存取，数组下标，函数调用 ，分组等|
|`++，--，！，delete, new, typeof, void `| 一元运算符 |
|`*, /, %`| 乘法，除法，取模|
|`+，-`| 加，减，字符串拼接|
|`<, <=, >, >=, instanceof`| 关系比较，检测类实例|
|`==，!=, ===, !==`| 等于，全等|
|`&&`| 逻辑与|
|`||`| 逻辑或|
|`?, :`| 三元运算|
|`=，+=，-=，*=, /= %=`| 赋值，运算赋值|
|`，`| 多重赋值，数组元素|

### 关键字
|break|do|instanceof|typeof|case|
|-|-|-|-|-|
|else|new|var|catch|finally|
|return|void|continue|for|switch|
|while|debugger|function|this|with|
|default|if|throw|delete|in|
|try|
### 保留字
|class|enum|extends|super|
|-|-|-|-|
const| export| import

### 惰性求值
如果在一个连续的逻辑操作中，操作结果在最后一个操作之前就已经明确的话，那么这个操作已经没有继续下去的必要了
```js
// 例如
true || false || true || false
// 最后返回true，所有或运算符的优先级是相同的，也就是说只要有true，返回就一定是true，不管后面多长，都没有必要继续运算下去

// 我们可以做个实验
var b = 5
true || (b = 6)  // true
console.log(b)   // 5
true && (b = 3)  // 3
console.log(b)   // 3

// javascript在一个逻辑表达式中遇到一个非布尔类型的操作数，那么该操作数的值就会成为该表达式的结果
true || 'some' // true
true && 'some' // 'some'
```
