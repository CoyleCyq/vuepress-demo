# 05 字符串
- [了解字符串](#了解字符串)
- [字符串的属性和方法](#字符串的属性和方法)
  - [属性](#属性)
  - [字符串的获取方法](#字符串的获取方法)
  - [字符串的查找方法](#字符串的查找方法)
  - [字符串的截取方法](#字符串的截取方法)
  - [字符串分割](#字符串分割)
  - [字符串大小写转换](#字符串大小写转换)
- [ECMAscript5新增](#ECMAscript5新增)
- [ASCII码和字符集](#ASCII码和字符集)

<src-MetaChange></src-MetaChange>

## 了解字符串
字符串就是一串字符，由双（单）引号括起来。

```js
//方式一：字面量（推荐）
var str = '城市套路深，我想回农村';

//方式二：构造函数
//PS：用new产生的变量都是引用类型的变量，也叫对象
var str = new String('我不是黄蓉，我不会武功');
```
## 字符串的属性和方法
### 属性
length: 表示字符串的长度，只读（只能读取）

### 字符串的获取方法
`charAt(i)` //获取下标为i的字符
```js
var str = 'hello';
str.charAt(0) // 'h'
str.charAt(1) // 'e'
```
### 字符串的查找方法
- indexOf(“abc”) 从开头向后查找字符串第一次出现的位置,如果没找到返回-1
- lastIndexOf('abc') 从尾部向前查找字符串第一次出现的位置，如果没找到返回-1
- search(`str|regExp`) 查找字符串第一次出现的位置
- match(`str|regExp`) 匹配字符串，返回一个数组
- index:匹配字符所在的索引
- input:表示整个字符串的引用
- replace(`str|rgExp`, '') 替换字符串 
    > 这里的替换只能执行一次，不能够进行全局匹配，如果需要全局匹配，则应使用正则表达式

### 字符串的截取方法
- substring(`start[,end]`)：不包括end所在字符，end省略表示截取到最后
- substr(`start[,len]`)：支持负数，len为截取的数量
- slice(`start,end`) ：截取start到end(不包括end)的字符串，支持负数

```js
var str = 'javascript'
str.substring(0) // 'javascript'
str.substr(0)    // 'javascript'
str.slice(0)     // 'javascript'


str.substring(4, 8) // 'scri'
str.substr(4, 4)    // 'scri'
str.substr(-6, 4)   // 'scri'
str.slice(4, 8)     // 'scri'
str.slice(-6, 8)    // 'scri'
str.slice(-6, -2)   // 'scri'
```
### 字符串分割
- split(分割符)：根据分割字符，把字符串拆分成数组

```js
var str = 'hello world coyle';
str.split(' '); // ['hello', 'world', 'coyle']

// 匹配多个分割 例如：中英文逗号分割
var str = '111,222，333，444,555'
str.split(/[,，]/) // ['111','222','333','444','555']
```

### 字符串大小写转换
- toLowerCase()：转换成小写
- toUpperCase()：转换成大写

```js
var str = 'JavaScript'
str.toLowerCase(); // 'javascript'
str.toUpperCase(); // 'JAVASCRIPT'
```

## ECMAscript5新增
- str[i] : 通过下标获取
- trim() ：删除前后所有空格，返回新的字符串

```js
var str1 = 'javascript';
str1[0]  // 'j'
str1[-1] // undefined

var str2 = ' hello world ';
str2.trim(); // 'hello world'
```

## ASCII码和字符集
- `harCodeAt(i)` //获取下标为i的字符的ASCII(American Standard Code for * Information Interchange) == > unicode编码
- `String.fromCharCode(94)` //编码转换成字符

```js
var str = 'javascript';
str.harCodeAt(3) // 97
String.fromCharCode(97)  // a
String.fromCharCode(94)  // ^
String.fromCharCode(49)  // 1
```
