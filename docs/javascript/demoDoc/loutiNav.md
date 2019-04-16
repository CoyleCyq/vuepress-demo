# 楼梯导航
## 结构和样式
```html
<style>
* {margin: 0;padding: 0;}
#LoutiNav {width: 32px;position: fixed;top: 150px;left: 50px;border: 1px solid #ddd;display: none;}
#LoutiNav ul li {width: 32px;height: 32px;border-bottom: 1px dotted #DDDDDD;list-style: none;font-size: 12px;color: #666;text-align: center;line-height: 32px;position: relative;cursor: pointer;}
#LoutiNav ul li span {width: 32px;height: 32px;position: absolute;top: 0;left: 0;}
#LoutiNav ul li span {display: none;}
#LoutiNav ul li.last {background: #C00;color: #fff;border-bottom: 1px solid #ddd;}
#LoutiNav ul li.hover span {background: #c00;color: #fff;display: block;}
#LoutiNav ul li.hover span.active {background: #c00;color: #fff;display: block;}
#LoutiNav ul li span.active {background: #fff;color: #c00;display: block;}
#header {width: 1000px;height: 1000px;background: #cc6633;margin: 0 auto;}
#main {width: 1000px;background: #66ff66;margin: 0 auto;}
#main .Louti {height: 600px;width: 1000px;font-size: 50px;color: #fff;font-weight: bold;text-align: center;line-height: 600px;}
#footer {width: 1000px;height: 400px;background: red;margin: 0 auto;}
</style>   

<body>
    <div id="LoutiNav">
        <ul>
            <li class="hover">1F <span>服饰</span> </li>
            <li>2F <span>美妆</span> </li>
            <li>3F <span>手机</span> </li>
            <li>4F <span>家电</span> </li>
            <li>5F <span>数码</span> </li>
            <li>6F <span>运动</span> </li>
            <li>7F <span>居家</span> </li>
            <li>8F <span>母婴</span> </li>
            <li>9F <span>食品</span> </li>
            <li>10F <span>图书</span> </li>
            <li>11F <span>服务</span> </li>
            <li class="last">Top</li>
        </ul>
    </div>

    <!--楼层内容开始-->

    <div id="header">

    </div>
    <div id="main">
        <div class="Louti" style="background: #cc0033;">
            服饰
        </div>
        <div class="Louti" style="background: #999933;">
            美妆
        </div>
        <div class="Louti" style="background: #ccff33;">
            手机
        </div>
        <div class="Louti" style="background: #006633;">
            家电
        </div>
        <div class="Louti" style="background: #6666cc;">
            数码
        </div>
        <div class="Louti" style="background: #ff6600;">
            运动
        </div>
        <div class="Louti" style="background: #ffff00;">
            居家
        </div>
        <div class="Louti" style="background: #3333ff;">
            母婴
        </div>
        <div class="Louti" style="background: #ff00cc;">
            食品
        </div>
        <div class="Louti" style="background: #669900;">
            图书
        </div>
        <div class="Louti" style="background: #ff66cc;">
            服务
        </div>

    </div>
    <div id="footer">

    </div>
    <!--楼层内容结束-->
</body>
```

## js
```js
jQuery(function($){
    /*
    1、滚动距离大于800时时显示导航，否则隐藏
    2、滚动高亮显示对应导航
    3、点击滚动到对应楼层
    4、返回顶部
    */
    var $nav = $('#LoutiNav');
    var $main = $('#main');
    var $floor = $main.children('.Louti');

    // 1、滚动距离大于1000时时显示导航，否则隐藏
    $(window).on('scroll', scrollHandler);

    function scrollHandler() {
        // 获取滚动条滚动过的距离
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= 800){
            // $nav.show();
            $nav.fadeIn();
        } else {
            // $nav.hide();
            $nav.fadeOut();
        }


        // 2、滚动高亮显示对应导航
        // *找出当前显示楼层的索引值
        $floor.each(function(idx, ele) {
            // 0-10
            // if(scrollTop >= ele.offsetTop - ele.offsetHeight/2){
            if (scrollTop < ele.offsetTop && scrollTop >= ele.offsetTop - ele.offsetHeight / 3) {
                $nav.find('li').eq(idx).addClass('hover').siblings().removeClass('hover');

                // 退出循环，避免多余的遍历
                return false;
            }
        });
    }

    // 3、点击滚动到对应楼层
    $nav.on('click', 'li', function() {
        // 避免点击时进入scroll事件
        $(window).off('scroll');

        var idx = $(this).index();

        $(this).addClass('hover').siblings().removeClass('hover');

        var scrollTop;

        // 返回顶部
        if ($(this).hasClass('last')) {
            scrollTop = 0;
        } else {
            scrollTop = $floor.eq(idx).offset().top;
        }


        $('html,body').animate({'scrollTop': scrollTop}, function() {
            $(window).on('scroll',scrollHandler);
        });
    })
});
```

## 效果展示
[楼梯效果](https://cyq0802.xin/demo/jqDemo/loutiNav.html)