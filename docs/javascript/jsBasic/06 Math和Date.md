# 06 Math & Date
- [Math对象](#Math对象)
  - [属性](#属性)
  - [方法](#方法)
  - [相关数学知识](#相关数学知识)
- [Date对象](#Date对象)
  - [了解时间](#了解时间)
  - [创建日期时间](#创建日期时间)
  - [获取/设置时间](#获取/设置时间)
  - [日期处理](#日期处理)
  - [延迟与定时器](#延迟与定时器)

<src-BackToTop></src-BackToTop>

## Math对象
一个保存数学公式和信息的对象，一般用于执行数学任务

### 属性
- Math.PI // 3.1415926

### 方法
- `Math.round(3.6)` //四舍五入取整
- `Math.ceil(11.3)` //12 向上取整
- `Math.floor(11.8)` //11 向下取整
- `Math.random()` //返回0-1之间的随机数（不包括1）
- `Math.max(num1, num2)` //返回较大的数
- `Math.min(num1, num2)` //返回较小的数
- `Math.abs(num)` //绝对值
- `Math.pow(x,y)` //x的y次方
- `Math.sqrt(num)` //开平方根

```js
// 2的8次方
Math.pow(2, 8) // 256

//9的平方根
Math.sqrt(9) // 3

// 获得指定范围的随机数
Math.floor(Math.random() * (max-min) + min)

// 在一个表单中输入一个合法的月份值
Math.min(Math.max(1, input), 12)
```

### 相关数学知识
三角函数复习
- sin(radian)
- cos(radian)
- tan(radian)

角度与弧度的转换
- 弧度=角度*Math.PI/180

勾股定理复习
- 在直角三角形中，斜边的平方等于直角边的平方和

曲线方程复习(一元二次方程)

<hr/>

## Date对象

### 了解时间
- GMT：格林尼治标准时，“天文学时间”
- UTC：协调世界时，“原子物理时间”，它更加精确,基本不会产生误差
- 时区：为了克服时间上的混乱，1884年在华盛顿召开的一次国际经度会议（又称国际子午线会议[1]）上，规定将全球划分为24个时区（东、西各12个时区）。规定英国（格林尼治天文台旧址）为中时区（零时区）、东1-12区，西1-12区。每个时区横跨经度15度，时间正好是1小时
- 闰年：四年一闰，百年不闰，四百年再闰
- 纪元时间(UNIX TIME)：1970-1-1零时

### 创建日期时间
```js
//1）创建当前时间的日期和时间
var d = new Date(); // 得到的是代码执行时的时间（本地时间）

//2）创建指定日期的时间和日期
var d = new Date("2015/08/22");
var d = new Date(56521211021);//参数为距1970-1-1零时的毫秒数
```

### 获取/设置时间
- 获取年月日
    - `getFullYear()/setFullYear(2014)`
    - `getMonth()/setMonth(8)`注意：获取月份是从0开始的
    - `getDate()/setDate(25)`
- 获取星期
    - `getDay()` 0-6:星期天-星期六
- 获取时分秒
    - `getHours()/setHours()`
    - `getMinutes()/setMinutes()`
    - `getSeconds()/setSeconds()`

### 日期处理
- `getTime()/setTime()`：获取/修改某个日期自1970年1月1日0时以来的毫秒数
- `toLocaleDateString()`; 以特定地区格式显示年、月、日

ES5新增日期处理方法

- `Date.parse('2015-08-24')` // 返回指定日期距1970-1-1零时的毫秒数
    > PS：转换格式默认支持2015-08-24或2015/08/24
- `Date.now()`; // 返回执行这行代码时距1970-1-1零时的毫秒数

### 延迟与定时器
- `setTimeout(fn,200)`：两百毫秒后执行fn这个函数（只执行一次）,返回一个id标识
- `clearTimeout(timeoutID)`：清除指定id标识的延迟操作
- `setInterval(fn,30)`：每隔30毫秒执行一次fn这个函数,返回一个id标识
- `clearInterval(intervalID)`：清除指定id标识的定时器操作

```js
var timer = setTimeout(function () {
    //2s后执行这里的代码
},2000);

//清除
clearTimeout(timer);
```
> 延迟定时器的执行是异步的

