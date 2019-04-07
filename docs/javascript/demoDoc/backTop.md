# 返回顶部效果

## 样式
```css
#btnTop{display:none;position: fixed;bottom:5px;right:5px;padding:10px;background-color: #f60;color:#fff;}
```

## 结构
```html
<span id="btnTop">返回顶部</span>
```

## js代码
```js
for (var i = 1; i <= 1000; i++) {
    document.write('<p>我叫' + i + '声逗比你敢答应吗？</p>');
}

window.onload = function(){
    var btnTop = document.getElementById('btnTop');

    // 给按钮绑定时间，实现返回顶部效果
    btnTop.onclick = function() {
        // 先获取滚动过的距离
        
        var timer = setInterval(function() {
            var scrollTop = window.scrollY; // 10000

            // 计算一个速度(可变速度)
            var speed = Math.ceil(scrollTop/10);

            scrollTop -= speed;

            // 滚动到顶部后停止定时器
            if(scrollTop <= 0 || speed === 0){
                clearInterval(timer);
                scrollTop = 0;
            }
            window.scrollTo(0, scrollTop);
        }, 20);
    }

    // window滚动事件scroll
    // 滚动条滚动时触发
    window.onscroll = function() {
        // 当滚动条滚动到600时显示返回顶部按钮
        var scrollTop = window.scrollY;


        if(scrollTop >= 600){
            btnTop.style.display = 'block';
        }else{
            btnTop.style.display = 'none';
        }
    }
}		
```

## 效果展示
[返回顶部效果](https://cyq0802.xin/demo/jsDemo/backTop.html)