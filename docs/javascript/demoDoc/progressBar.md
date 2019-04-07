# 进度条效果(定时器)

## 样式
```css
body{margin:0;}
#loading{position:relative;height:5px;width:0;background-color: #f00;}
#percent{position: absolute;left:50%;bottom:-15px;margin-left:-15px;font-size:10px;}
```
## 结构
```html
<div id="loading"><span id="percent"></span></div>
```
## js代码
```js
//延迟代码执行
window.onload = function() {
    //获取页面元素
    var loading = document.getElementById('loading');
    var percent = document.getElementById('percent');

    var width = 0; //宽度从零开始
    //设置定时器
    var timer = setInterval(function() {
        //宽度每次加2
        width += 2;
        //当宽度大于等于浏览器可视区域尺寸时停止定时器
        if(width >= window.innerWidth) {
            // 停止定时器
            clearInterval(timer);
            //令宽度等于浏览器的可视尺寸
            width = window.innerWidth;
        }
        //动态显示百分比
        percent.innerHTML = (width / window.innerWidth * 100).toFixed(1) + '%';
        //宽度
        loading.style.width = width + 'px';

    },20);
}
```

## 效果展示
[进度条效果](https://cyq0802.xin/demo/jsDemo/progressBar.html)