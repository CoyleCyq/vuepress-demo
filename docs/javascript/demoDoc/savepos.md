# 利用cookie保存拖拽位置
## 样式
```css
img{position:absolute;left:0;top:0;width:250px; cursor: move}
```

## 结构
```html
<img src="https://raw.githubusercontent.com/CoyleCyq/img/master/myWeb/car_min.png" alt="demo图片">
```

## js代码
```js
/**
 * [设置cookie函数]
 * @param {String} name    [cookie名]
 * @param {String} val     [cookie值]
 * @param {[Date]} expires [有效期]
 * @param {[String]} path    [路径]
 */
var setCookie = function(name, val, expires, path) {
	// cookie名/值（必填）
	var str_cookie = name + '=' + val;

	// cookie有效期
	if (expires) {
		str_cookie += ';expires=' + expires.toUTCString();
	}

	// cookie路径
	if (path) {
		str_cookie += ';path=' + path;
	}

	document.cookie = str_cookie;
}


/**
 * [获取cookie]
 * @param  {String} name [cookie名]
 * @return {String}      [返回值]
 */
var getCookie = function(name) {
	// 获取所有cookie并拆分成数组
	var cookies = document.cookie;
	var arr_cookie = cookies.split('; ');

	// 存放cookie值
	var res = '';

	// 遍历数组，找到所需的cookie，并返回
	for(var i= 0; i < arr_cookie.length; i++) {
		var arr = arr_cookie[i].split('=');
		if(arr[0] === name) {
			res = arr[1];
		}
	}

	return res;
}

window.onload = function() {
    var img = document.images[0];
    var moveHandler;

    img.addEventListener('mousedown',function(e) {
        e = e || window.event;
        moveHandler = function(evt) {
            img.style.left = evt.clientX - e.offsetX + 'px';
            img.style.top = evt.clientY - e.offsetY + 'px';
            evt.preventDefault();
        }

        document.addEventListener('mousemove', moveHandler, false);

        e.preventDefault();
    }, false);

    // 弹起移除mousemove事件
    document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', moveHandler, false);

        // 拖动结束，保存位置
        var pos = { left: img.offsetLeft, top: img.offsetTop };

        setCookie('pos',JSON.stringify(pos));
    },false);

    // 保持拖拽位置
    // 页面刷新时，获取上次保存的cookie
    // 重新赋值top,left属性
    var pos = getCookie('pos');
    if(pos.length > 0) {
        pos = JSON.parse(pos);

        img.style.left = pos.left + 'px';
        img.style.top = pos.top + 'px';
    }
}

```
## 效果展示
[利用cookie保存拖拽位置](https://cyq0802.xin/demo/jsDemo/savepos.html)