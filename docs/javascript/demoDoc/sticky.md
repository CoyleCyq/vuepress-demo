# 吸顶菜单

## 样式
```css
body{margin:0;}
.top{height:250px;background-color: #efefef;}
.search{padding:10px;background-color: #f60;}
.container{height:1000px;background-color: #ffc;}
.fixed{position: fixed;top:0;left:0;right:0;}
```

## 结构
```html
<div class="top"></div>
<div class="search" id="search">
    <input type="search"><button>搜索</button>
</div>
<div class="container"></div>
```

## js代码
```js
window.onload = function() {
    var search = document.getElementById('search');

    window.onscroll = function() {
        var scrollTop = window.scrollY;

        // 判断滚动过的高度
        if (scrollTop >= 250) {
            // 获取/设置元素的类
            search.className += ' fixed';
        } else {
            search.className = 'search';
        }
    }
}
```

## 效果展示
[吸顶菜单](https://cyq0802.xin/demo/jsDemo/sticky.html)