# 基于jQuery封装轮播图插件

## css
```css
/* coyleCarousel.css */
.coyleCarousel{position:relative;margin:0 auto;width:810px;height:320px;overflow:hidden;}
.coyleCarousel ul{position:relative;left:0;top:0;}
.coyleCarousel li{overflow:hidden;}
.coyleCarousel .horizontal{overflow:hidden;}
.coyleCarousel .horizontal li{float:left;}
.coyleCarousel li img{display:block;}
.coyleCarousel .page{position: absolute;right:15px;bottom:15px;}
.coyleCarousel .page span{display:inline-block;margin:0 5px;width:30px;height:30px;line-height:30px;text-align:center;background-color:#efefef;border-radius:50%;}
.coyleCarousel .page span.active{background-color:#f60;color:#fff;}
.coyleCarousel .prev,.next{position: absolute;width:30px;height:50px;line-height:50px;background-color:#f60;color:#fff;text-align:center;}
.coyleCarousel .prev{left:0;top:0;bottom:0;margin:auto 0;}
.coyleCarousel .next{right:0;top:50%;margin-top:-25px;}
```

## js代码
```js
; (function($) {
	$.fn.coyleCarousel = function(options) {

		// 默认参数
		var defaults = {
			width: 810,//ok
			height: 320,//ok
			autoPlay: true,//ok
			small: false,
			buttons: true,//ok
			page: true,//ok
			duration: 3000,//ok
			index: 0,//ok
			type: 'vertical',//vertical,horizontal,fade,show
			seamless: false
		}

		// var opt = Object.assign({},defaults,options);
		var opt = $.extend({}, defaults, options);


		return this.each(function(idx, ele) {
			var $self = $(ele);

			var len = opt.imgs.length;

			// 添加特定类名
			$self.addClass('coyleCarousel');

			// 定义宽高
			$self.css({
				width:opt.width,
				height:opt.height
			})

			// 生成大图
			var $ul = $('<ul/>');

			$.each(opt.imgs, function(idx,url) {
				$('<li/>').css({ height: opt.height,width:opt.width }).html(`<img src="${url}">`).appendTo($ul);
			});

			$ul.appendTo($self);

			// 水平排列
			if (opt.type == 'horizontal') {
				$ul.width(opt.width * len);
				$ul.addClass('horizontal');
			}

			// 默认显示图片
			var index = opt.index;
			
			// 生成分页
			if (opt.page) {
				var $page = $('<div/>').addClass('page');
				for (var i = 1; i <= len; i++) {
					var $span = $('<span/>').text(i);

					// 给第一个span添加高亮
					if (i == index + 1) {
						$span.addClass('active');
					}
					$span.appendTo($page);
				}
				$page.appendTo($self);
			}
			
			// 前后按钮
			if(opt.buttons) {
				$('<div/>').addClass('prev').html('&lt;').appendTo($self);
				$('<div/>').addClass('next').html('&gt;').appendTo($self);
			}
			
			var timer;

			// 上一页下一页
			$self.on('click', '.prev', function() {
				index--;
				showPic();
			}).on('click', '.next', function() {
				index++;
				showPic();
			})

			// 移入移出
			.on('mouseenter', function() {
				clearInterval(timer);
			}).on('mouseleave', function() {
				timer = setInterval(autoPlay, opt.duration);
			})

			// 点击页码
			.on('click','.page span', function() {
				index = $(this).index();
				showPic();
			})

			// 自动轮播
			if(opt.autoPlay) {
				$self.trigger('mouseleave');
			}

			function autoPlay() {
				index++;
				showPic();
			}

			function showPic() {
				// 到达最后一张时，重新回到第一张
				if (index > len-1) {
					index = 0;
				} else if (index < 0) {
					index = len - 1;
				}

				// 滚动显示每一张图片
				var obj;

				if (opt.type === 'horizontal'){
					obj = { left: -index * opt.width };
				} else {
					obj = { top: -index * opt.height };
				}

				$ul.stop().animate(obj);

				// 高亮分页
				if (opt.page) {

					$page.children().eq(index).addClass('active').siblings().removeClass();
				}
			}
		});
        return this
	}
})(jQuery);

```

## 使用
```html 
<link rel="stylesheet" href="https://cyq0802.xin/lib/jquery-coyle/carousel.css">
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cyq0802.xin/lib/jquery-coyle/coyle.js"></script>

<body>
	<div id="lbt"></div>
	<div class="content"></div>
</body>
```

```js
jQuery(function($){
	$('#lbt').coyleCarousel({
		imgs:['img/001.jpg','img/002.jpg','img/003.jpg','img/004.jpg'],
		page:false,
		autoPlay:false
	});


	$('.content').coyleCarousel({
		imgs:['img/g1.jpg','img/g2.jpg','img/g3.jpg','img/g4.jpg'],
		width:247,height:274,
		type:'horizontal',
		page:false
	}).css('border','1px solid #ddd')
});
```