# 基于jQuery封装放大镜插件
## css
```css
.coyleZoom{position:relative;width:300px;overflow:hidden;}
.coyleZoom img{display:block;}
.coyleZoom .minzoom{display:none;position: absolute;width:30px;height:30px;border:1px solid #fc0;background-color:#ff0;background-color: rgba(255,255,0,.3);filter:alpha(Opacity=30);}
.coyleBigzoom{display:none;position: absolute;width:400px;height:300px;overflow:hidden;}
.coyleBigzoom img{position: absolute;left:0;right:0;}
```

## js
```js
; (function($) {
	$.fn.coyleZoom = function(options) {
		var defaults = {
			width: 400, //大图宽度，高度
			height: 300,
			position: 'right',//大图显示位置：left,bottom,top,right
			gap: 15//大图与小图的间距
		}

		// 扩展默认参数
		var opt = $.extend({}, defaults, options);

		this.each(function() {
			// 给$small添加特定样式
			var $small = $(this).addClass('coyleZoom');

			var $smallImg = $small.children('img');


			// 生成放大镜
			var $minzoom = $('<span/>').addClass('minzoom');
			$minzoom.appendTo($small);


			// 生成大图
			var $big = $('<div/>').addClass('coyleBigzoom');

			var $bigImg = $('<img/>').attr('src',$smallImg.data('big'));
			$bigImg.appendTo($big);

			// 设置大图定位
			var btop, bleft;
			if (opt.position === 'right') {
				btop = $small.offset().top;
				bleft = $small.offset().left + $small.outerWidth() + opt.gap;
			} else if (opt.position === 'bottom') {
				btop = $small.offset().top + $small.outerHeight() + opt.gap;
				bleft = $small.offset().left;
			} else if (opt.position === 'left') {
				btop = $small.offset().top;
				bleft = $small.offset().left - opt.width - opt.gap;
			} else if (opt.position === 'top') {
				btop = $small.offset().top - opt.height - opt.gap;
				bleft = $small.offset().left;
			}
			$big.css({
				top:btop,
				left:bleft,
				width:opt.width,
				height:opt.height
			});

			// 把大图写入页面
			$big.appendTo('body');

			//大图与小图的比例
			var ratio;

			// 2、鼠标移入显示大图和放大镜
			$small.on('mouseenter', function() {
				$minzoom.show();
				$big.show();
				ratio = $bigImg.outerWidth() / $small.outerWidth();

				// 改变放大镜的大小
				// 与大图成比例
				$minzoom.css({
					width:opt.width/ratio,
					height:opt.height/ratio
				});
			}).on('mousemove', function(e) {
				var left = e.pageX - $small.offset().left - $minzoom.outerWidth() / 2;
				var top = e.pageY - $small.offset().top - $minzoom.outerHeight() / 2;

				// 限制top,left值
				if (left < 0) {
					left = 0;
				} else if (left > $smallImg.outerWidth() - $minzoom.outerWidth()) {
					left = $smallImg.outerWidth() - $minzoom.outerWidth()
				}

				if (top < 0) {
					top = 0;
				} else if (top > $smallImg.outerHeight() - $minzoom.outerHeight()) {
					top = $smallImg.outerHeight() - $minzoom.outerHeight()
				}

				// 定位放大镜位置
				$minzoom.css({ top: top, left: left });

				// 定位大图位置
				$bigImg.css({
					left: -left * ratio,
					top: -top * ratio
				})
			}).on('mouseleave', function() {
				$minzoom.hide();
				$big.hide();
			})
		});
		return this;
	}
})(jQuery);
```