# 13 动画
- [运动原理](#运动原理)
- [运动分类](#运动分类)
    - [匀速运动](#匀速运动) 
    - [加速运动](#加速运动)
    - [减速运动](#减速运动)
    - [抛物线运动](#抛物线运动)
    - [缓冲运动](#缓冲运动)
    - [圆周运动](#圆周运动)
- [盒模型](#盒模型)
- [链式运动](#链式运动)
- [无缝滚动](#无缝滚动)

<src-MetaChange></src-MetaChange>

## 运动原理
不断改变对象的属性产生动画的效果
## 运动分类
### 匀速运动
速度保持不变的运动

```html
<!-- 匀速运动案例 -->
<!-- html -->
<style>
    .bird{position: absolute;left:0;top:0;}
</style>

<img src="img/bird.gif" class="bird">
```

<br>

```js
// js
document.addEventListener('DOMContentLoaded',() => {
    let bird = document.querySelector('.bird');
    // 匀速运动
    // * 从左往右
    // * 不断改变bird的left值
    // * 定时器
    let speed = 5;
    let timer = setInterval(() => {
        // 获取当前left值
        // let currentLeft = parseFloat(getComputedStyle(bird).left);
        let currentLeft = bird.offsetLeft;

        // 停止动画
        // 清除定时器
        if (currentLeft >= window.innerWidth-bird.offsetWidth) {
            clearInterval(timer);


            currentLeft = window.innerWidth - bird.offsetWidth - speed;
        }

        bird.style.left = currentLeft + speed + 'px';
    }, 30);
});
```
### 加速运动
速度不断增加的运动

```js
// 加速运动案例
document.addEventListener('DOMContentLoaded',()=>{
    /*
        加速运动：
        篮球自由落体
        */
    let basketball = document.querySelector('.basketball');

    // 
    let speed = 0;
    let timer = setInterval(() => {
        speed += 5;

        let top = basketball.offsetTop;

        // 到达地面停止
        if (top >= window.innerHeight-basketball.offsetHeight) {
            clearInterval(timer);

            top = window.innerHeight - basketball.offsetHeight - speed;
        }

        basketball.style.top = top + speed + 'px';
    }, 30);
});
```
### 减速运动
速度不断减小的运动
```js
document.addEventListener('DOMContentLoaded',()=>{
    /*
        减速运动：
        刹车效果
        */
    let car = document.querySelector('.car');

    // 初始速度
    let speed = 100;
    let timer = setInterval(() => {
        speed -= 5;

        let left = car.offsetLeft;

        if (speed <= 0) {
            clearInterval(timer);
            left = left - speed;

            // 停止音乐播放
            // ...
        }

        car.style.left = left + speed + 'px';
    }, 30);

    // 播放刹车声音
    // ...
});
```

### 抛物线运动
水平方向速度不断减小，垂直方向速度不断增加

```js
document.addEventListener('DOMContentLoaded',()=>{
    /*
        抛物线运动：
        */
    let basketball = document.querySelector('.basketball');

    // 水平速度：匀速
    let xspeed = 30;

    // 垂直速度：加速
    let yspeed = 0;
    let timer = setInterval(() => {
        yspeed += 5;

        let top = basketball.offsetTop;
        let left = basketball.offsetLeft;

        // 到达地面停止
        if (top >= window.innerHeight - basketball.offsetHeight) {
            clearInterval(timer);

            top = window.innerHeight - basketball.offsetHeight - speed;
        }

        basketball.style.top = top + yspeed + 'px';
        basketball.style.left = left + xspeed + 'px';
    }, 30);
});
```


[案例]

- 飞翔的小鸟（匀速）
- 自由落体效果（加速）
- 火箭升空（减速）
- 图片的淡入淡出
- 抛物线的重力回弹
- 竖排导航


### 缓冲运动
一开始速度很快，然后慢下来，直到停止

- 多属性缓冲运动函数封装

### 圆周运动
具体在以某点为圆心半径为r的圆周上的运动叫“圆周运动”

```js
document.addEventListener('DOMContentLoaded',()=>{
    let circle = document.querySelector('.circle');
    let ball = document.querySelector('.ball');

    // 大圆半径
    let r = 200;

    // 小圆半径
    let mr = 15;

    // 大圆圆心
    let center = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    // 把大圆定位到页面中心
    circle.style.left = (window.innerWidth - circle.offsetWidth) / 2 + 'px';
    circle.style.top = (window.innerHeight - circle.offsetHeight) / 2 + 'px';

    // 小圆初始位置（角度）
    let deg = 0;

    let timer = setInterval(() => {
        // 小圆每次走动的角度
        deg += 2;

        // 计算弧度
        let rad = deg * Math.PI / 180;

        let a = center.x + r * Math.cos(rad);
        let b = center.y + r * Math.sin(rad);

        ball.style.left = a - mr + 'px';
        ball.style.top = b - mr + 'px';
    }, 30)
});
```

[圆周运动效果](https://cyq0802.xin/demo/jsDemo/circle.html)

## 盒模型
- `offset`
    - `offsetTop`: 当前元素离&lt;定位父级&gt;元素顶部的距离。
    - `offsetLeft`: 当前元素离&lt;定位父级&gt;元素左边的距离。
    - > 以上两个属性如果没定位的父级，则相对于根元素html的距离
    - `offsetWidth`: 当前元素的宽度（border + padding + content）
    - `offsetHeight`: 当前元素的高度（border + padding + content）
- `client` 
    - `clientTop`: 当前元素上边框的宽度（border-top）
    - `clientLeft`: 当前元素左边框的宽度（border-left）
    - `clientWidth`: 当前元素宽度（padding + content，不包括border）
    - `clientHeight`: 当前元素高度（padding + content，不包括border）
- `scroll`
    - `scrollTop`: 当前元素&lt;垂直滚动条&gt;滚动过的距离
    - `scrollLeft`: 当前元素&lt;水平滚动条&gt;滚动过的距离
    - `scrollWidth`: 当前元素滚动宽度（不包括边框）
    - `scrollHeight`: 当前元素滚动高度（不包括边框）
    - > `scrollWidth,scrollHeight`浏览器有兼容性问题


[案例]
- 滚动动轮播图（缓冲运动）
- 地球公转（圆周运动）
- 文字向上滑动效果
- 缓冲运动函数的封装
    - 支持多属性同时运动
    - 支持回调函数



## 链式运动
动画的排队效果，上一个动画完成后才执行下一个动画效果
## 无缝滚动
- 复制初始状态下可见区域内的图片并放到最后
    - > 可见区域有几张就复制几张

- 当复制的图片都滚动到可见区域时，立即把图片定位到初始状态


[案例]
- 折叠菜单栏
- 简单幻灯片切换
- 无缝滚动
- 无缝幻灯片切换
- 淡入淡出幻灯片
- 购物车添加商品(抛物线)
- 评分特效
- 放大镜效果
- 固定列数的瀑布流
- 自适应瀑布流
