# 拖拽轨迹回放
## 样式
```css
html,body {overflow: hidden;}
body,div,h2,p {margin: 0;padding: 0;}
body {color: #fff;background: #000;font: 12px/2 Arial;}
p {padding: 0 10px;margin-top: 10px;}
span {color: #ff0;padding-left: 5px;}
#box {position: absolute;left:100px;top:100px;width: 300px;height: 150px;background: #333;border: 2px solid #ccc;}
#box h2 {height: 25px;cursor: move;background: #222;border-bottom: 2px solid #ccc;text-align: right;padding: 0 10px;}
#box h2 a {color: #fff;font: 12px/25px Arial;text-decoration: none;outline: none;}
```

## 结构
```html
<div id="box">
    <h2><a href="#">点击回放拖动轨迹</a></h2>
    <p><strong>Drag:</strong><span>false</span></p>
    <p><strong>offsetTop:</strong><span>231</span></p>
    <p><strong>offsetLeft:</strong><span>533</span></p>
</div>
```

## js代码
```js
window.onload = function() {
    var box = document.getElementById('box');
    var title = box.children[0];
    var btnBack = title.children[0];

    var drag = box.children[1].children[1];
    var top = box.children[2].children[1];
    var left = box.children[3].children[1];

    // 用于记录#box移动过的位置
    var arrPos = [];

    // 拖拽效果 
    title.onmousedown = function(e) {
        e = e || window.event;

        // 记录按下时光标位置距#box左上角的距离
        var oWidth = e.clientX - box.offsetLeft;
        var oHeight = e.clientY - box.offsetTop;

        document.onmousemove = function(evt) {
            evt = evt || window.event;

            var _left = evt.clientX - oWidth
            var _top = evt.clientY - oHeight

            box.style.left = _left + 'px';
            box.style.top = _top + 'px';

            // 把位置信息写入arrPos
            arrPos.push({ left:_left, top:_top });

            evt.preventDefault();
        }
    }

    document.onmouseup = function() {
        document.onmousemove = null;
        console.log(arrPos)
    }


    // 回放效果
    btnBack.onclick = function(){
        var idx = arrPos.length - 1;
        var timer = setInterval(function() {
            idx--;
            var pos = arrPos[idx];

            if(idx <= 0) {
                clearInterval(timer);

                // 每次回放完成清空数组
                arrPos = [];
            }

            box.style.left = pos.left + 'px';
            box.style.top = pos.top + 'px';
        }, 20);
    }
}
```
## 效果展示
[拖拽轨迹回放](https://cyq0802.xin/demo/jsDemo/dragBack.html)