# 评分效果

## 样式和结构
```html
<style type="text/css">
#star {padding: 0;margin: 0;list-style: none;width: 300px;height: 28px;}
#star li {float: left;background: url(https://cyq0802.xin/img/demoImg/star.gif) no-repeat 0 0;width: 27px;height: 28px;}
#star .active{background-position:0 -29px;}
</style>

<body>
    <ul id="star">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <div id="info"></div>
</body>
```

## js代码
```js
document.addEventListener('DOMContentLoaded',function(){
    var star = document.querySelector('#star');
    var info = document.querySelector('#info');
    var lis = star.children;

    var score = 1;
    var msg = ['差评','一般','推荐','值得推荐','强烈推荐'];

    // 给ul绑定事件
    star.onmouseover = function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;

        if(target.tagName.toLowerCase() === 'li') {
            /*
                * 先获取target所在索引
                * 小于等于索引添加active
                * 大于索引移出active
                */
            // this => star
            var currentIdx;

            // 先获取target所在索引
            for (var i = 0; i < lis.length; i++){
                if (lis[i] === target) {
                    currentIdx = i;
                }
            }

            // 小于等于索引添加active
            // 大于索引移出active
            for (var i = 0; i < lis.length; i++) {
                if (i <= currentIdx) {
                    lis[i].className = 'active';
                } else {
                    lis[i].className = '';
                }
            }
        }
    }

    // 点击评分
    star.onclick = function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;

        if (target.tagName.toLowerCase() === 'li') {
            // 获取点击所在索引值
            var currentIdx;
            for (var i= 0; i < lis.length; i++) {
                if (lis[i] === target) {
                    currentIdx = i;

                    // 设定分数
                    score = i + 1;

                    // 写入信息
                    info.innerText = msg[i];
                }
            }
        }
    }

    // 鼠标移开保留分数
    star.onmouseleave = function() {
        for (var i = 0; i < lis.length; i++) {
            if (i <= score - 1) {
                lis[i].className = 'active';
            } else {
                lis[i].className = '';
            }
        }
    }
});
```

## 效果展示
[评分效果](https://cyq0802.xin/demo/jsDemo/star.html)