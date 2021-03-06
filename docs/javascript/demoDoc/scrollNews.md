# 滚动显示新闻消息

## 样式
```css
#newslist{line-height:2;}
```

## 结构
```html
<input type="text" id="news"><button id="btnAdd">添加</button>
<h1>滚动新闻案例</h1>
<ul id="newslist"></ul>
```
## 思路
- 新建一个包含新闻的数组
- 把新闻显示到页面
    - for循环
- 添加新闻
    - 给按钮绑定点击事件，往新闻列表数组添加元素
- 定时滚动新闻列表
    - setInterval
    - 把最后一条新闻放到最前面
        - 先删除最后一条新闻，然后把他放到最前面

## js代码
```js
window.onload = function() {
    var oNews = document.getElementById('news');
    var btnAdd = document.getElementById('btnAdd');
    var newslist = document.getElementById('newslist');

    var news = ['小明由于调戏女老师再次被滚粗教室','iPhone10发布,屏幕高度亮瞎了所有小伙伴','为增加收视率，《跑男》第十季决定邀请香港四大天王参加，但由于年龄太大实在跑不动','为了弘扬乐于助人的精神，中国人大开会决定授予老王“中国好邻居”称号'];

    // 把新闻显示到页面
    function show() {
        var new_html = '';
        for(var i = 0;i < news.length; i++) {
            new_html += '<li><a href="#">' + news[i] + '</a></li>'
        }
        newslist.innerHTML = new_html;
    }
    show();

    // 添加新闻
    btnAdd.onclick = function() {
        news.unshift(oNews.value);
        show();
    }

    // 定时滚动
    setInterval(function(){
        // 把删除的最后一条信息放到最前面
        // pop/shift：返回删除的元素
        // push/unshift：返回新数组的长度
        news.unshift(news.pop());
        show();
    },2000);
}
```
## 效果展示
[滚动新闻效果](https://cyq0802.xin/demo/jsDemo/scrollNews.html)