# 弹框居中(JS控制)

## 样式
```css
.pop{
    position:absolute;width:300px;height:200px;border:1px solid #ddd;
}
.pop h4{margin:0;border-bottom:1px solid #ddd;padding:5px 10px;}
.pop .content{padding:15px;}
```

## 结构
```html
<div class="pop" id="pop">
    <h4>弹窗</h4>
    <div class="content">
        内容
    </div>
</div>
```

## js代码
```js
window.onload = function(){
    var pop = document.getElementById('pop');

    pop.style.left = (window.innerWidth - 300)/2 + 'px';
    pop.style.top = (window.innerHeight - 200)/2 + 'px';


    // 窗口大小改变事件
    // resize
    window.onresize = function(){
        pop.style.left = (window.innerWidth - 300)/2 + 'px';
        pop.style.top = (window.innerHeight - 200)/2 + 'px';
    }
}
```

## 效果展示
[居中弹框](https://cyq0802.xin/demo/jsDemo/dialogCenter.html)