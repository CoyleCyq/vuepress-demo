# 自定义右键菜单
## 样式
```css
ul{list-style: none;padding:0;margin:0;}
.contextMenu{display:none;position:absolute;top:0;left:0;padding:2px;width:220px;border:1px solid #ddd;}
.contextMenu li{position:relative;padding-left:10px;border-bottom:1px dotted #ddd;line-height:2.2;}
.contextMenu li:hover{background-color:#efefef;}
.contextMenu li:last-child{border:none;}
.contextMenu li span{position:absolute;right:5px;top:0;color:#999;}
```

## 结构
```html
<div class="contextMenu">
    <ul>
        <li>复制<span>Ctrl+C</span></li>
        <li>粘贴<span>Ctrl+V</span></li>
        <li>剪切<span>Ctrl+X</span></li>
        <li>删除<span>Del</span></li>
        <li>保存<span>Ctrl+S</span></li>
    </ul>
</div>
```

## js代码
```js
window.onload = function(){
    var contextMenu = document.getElementsByClassName('contextMenu')[0];
    // oncontextmenu
    document.oncontextmenu = function(e) {
        e = e || window.event;
        contextMenu.style.display = 'block';

        if(!e.pageX) {
            e.pageX = e.clientX + window.scrollX;
        }

        if(!e.pageY){
            e.pageY = e.clientY + window.scrollY;
        }

        contextMenu.style.left = e.pageX + 'px';
        contextMenu.style.top = e.pageY + 'px';

        // 阻止右键菜单
        e.preventDefault();
    }

    // 点击任意空白地方隐藏
    document.onmouseup = function() {
        contextMenu.style.display = 'none';
    }

    // 点击菜单不隐藏
    // 停止事件冒泡
    contextMenu.onmouseup = function(e) {
        e = e || window.event;
        e.stopPropagation();
    }
}
```
## 效果展示
[自定义右键菜单](https://cyq0802.xin/demo/jsDemo/rightMenu.html)