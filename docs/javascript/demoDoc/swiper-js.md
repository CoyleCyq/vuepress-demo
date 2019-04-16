# 轮播图纯js实现

## 样式和结构
```html
<style>
    body{margin:50px;}
    ul{padding:0;margin:0;list-style:none;}
    #lbt{position:relative;margin:0 auto;width:320px;height:320px;overflow:hidden;}
    #lbt ul{position:absolute;left:0;top:0;overflow:hidden;}
    #lbt ul li{float:left;width:320px;height:320px;overflow:hidden;}
    .page{position: absolute;right:60px;bottom:15px;}
    .page span{display:inline-block;margin:0 5px;width:30px;height:30px;line-height:30px;text-align:center;background-color:#efefef;border-radius:50%;cursor:pointer; }
    .page span.active{background-color:#f60;color:#fff;}
    .prev,.next{position: absolute;width:30px;height:50px;line-height:50px;background-color:#f60;color:#fff;text-align:center; cursor:pointer;}
    .prev{left:0;top:0;bottom:0;margin:auto 0;}
    .next{right:0;top:50%;margin-top:-25px;}
</style>

<body>
    <div id="lbt">
		<ul>
			<li><img src="https://cyq0802.xin/img/demoImg/mv1.jpg"></li>
			<li><img src="https://cyq0802.xin/img/demoImg/mv2.jpg"></li>
			<li><img src="https://cyq0802.xin/img/demoImg/mv3.jpg"></li>
            <li><img src="https://cyq0802.xin/img/demoImg/mv4.jpg"></li>
            <li><img src="https://cyq0802.xin/img/demoImg/mv5.jpg"></li>
		</ul>
		<div class="page"><span class="active">1</span><span>2</span><span>3</span><span>4</span><span>5</span></div>
		<div class="prev">&lt;</div>
		<div class="next">&gt;</div>
	</div>
</body>
```

## js代码
```js
document.addEventListener('DOMContentLoaded', function() {
    /*
        改变ul的left值
        index	left
        0		0
        1		-320
        2		-640
        3		-960
        0		0
        推导公式：left = -index*320

        无缝滚动思路：
        1）复制第一张到最后
        2）当滚动到复制图片时，瞬间回到初始状态
            * index改成1
    */
    
    var lbt = document.querySelector('#lbt');
    var pic = lbt.children[0];
    var page = lbt.children[1];
    var btnNext = lbt.querySelector('.next');
    var btnPrev = lbt.querySelector('.prev');

    // 初始索引值
    var index = 0;

    // 无缝滚动关键1：复制第一张到最后
    var copyLi = pic.children[0].cloneNode(true);
    pic.appendChild(copyLi);

    var len = pic.children.length;

    // 给父级元素设定宽度，才能让所有li水平排列
    pic.style.width = len * 320 + 'px';



    // 1）每隔3s切换一张图片
    var timer = setInterval(autoPlay, 3000);


    // 3）鼠标移入移出
    lbt.onmouseenter = function() {
        clearInterval(timer);
    }

    lbt.onmouseleave = function() {
        timer = setInterval(autoPlay, 3000);
    }


    // 4）点击页码切换
    page.onclick = e => {
        var tagName = e.target.tagName.toLowerCase();
        if(tagName === 'span') {
            index = e.target.innerText - 1;

            showPic();
        }
    }

    // 5）上一张下一张
    btnNext.onclick = () => {
        index++;
        showPic();
    }
    btnPrev.onclick = () => {
        index--;
        showPic();
    }


    function autoPlay() {
        index++;
        showPic();
    }

    function showPic() {
        // 无缝滚动关键2：当滚动到复制图片时（最后一张），瞬间回到初始状态
        if (index > len - 1) {
            pic.style.left = 0;
            index = 1;
        } else if (index < 0) {
            index = len-1;
        }

        // 滚动显示每一张图片
        var target = -index * 320;

        clearInterval(pic.timer);
        pic.timer = setInterval(function() {
            // 获取当前值
            var current = pic.offsetLeft;

            // 跟据当前值与目标值计算速度
            // 速度可能是正数或者负数
            var speed = (target - current) / 10;

            // 0.1=>1,-0.1=>-1
            // 避免未到达目标值时速度为0
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);


            // 清除定时器
            if(current === target || speed === 0) {
                clearInterval(pic.timer);

                // 保证最终到达目标值
                current = target - speed;
            }

            pic.style.left = current + speed + 'px';
        },20);


        // 高亮显示页码
        for (var p of page.children) {
            p.className = '';
        }

        // 无缝滚动关键3：处理高亮
        if (index === len-1) {
            page.children[0].classList.add('active');
        } else {
            page.children[index].classList.add('active');
        }

    }
});
```

## 效果预览
[轮播图](https://cyq0802.xin/demo/jsDemo/swiper-js.html)