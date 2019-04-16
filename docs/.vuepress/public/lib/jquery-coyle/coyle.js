; (function($) {
    // 轮播图
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
    }

    // 放大镜
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