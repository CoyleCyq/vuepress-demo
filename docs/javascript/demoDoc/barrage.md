# 面向对象实现简单弹幕效果

## 样式
```css
.container{width:800px;margin:50px auto;padding-bottom:10px;background-color:#dfdfdf;}
#barrage{position:relative;height:600px;margin-bottom:10px;background-color:#000;overflow:hidden;}
#barrage .bar-item{position:absolute;left:100%;white-space:nowrap;}
#msg{margin-left:10px;width:400px;height:30px;border:1px solid #999;border-right:none;box-sizing:border-box;vertical-align:middle; text-indent: 10px;}
#msg+button{padding:0 10px;height:30px;vertical-align:middle;}
```

## 结构
```html
<div class="container">
    <div id="barrage"></div>
    <input type="text" id="msg"><button class="sendBtn">发送</button>
</div>
```

## 思路
- 预期效果
    - 1) 随机速度, 位置, 字体大小, 颜色
    - 2) 从左往右移动 
- 思路
    - 弹幕信息作为对象
        - 1) 属性： 字体大小, 颜色, 速度, 位置  
        - 2) 方法： move, remove
    - 弹幕区域作为对象
        - 1) 属性：弹幕信息，弹幕区域, 输入框, 发送按钮
        - 2) 方法：发送弹幕 

## js 代码
```js
/**
* [随机生成一个rgb颜色]
* @return {String} [返回一个颜色：rgb(255,205,205)]
*/
var randomColor = function() {
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);
    var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    return rgb;
}

// 封装一个获取特定范围内随机数的方法
var randomNum = function(min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min;
}

document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.container');
    // 页面弹幕区域
    var page = {
        ele: document.querySelector('#barrage'),
        msgInput: document.querySelector('#msg'),
        btn: container.querySelector('.sendBtn'),
        // inint一般用来绑定事件，生成DOM节点
        init: function() {
            // 绑定事件
            this.btn.onclick = function() {
                var msg = this.msgInput.value
                this.sendMsg(msg)
            }.bind(this)
            this.msgInput.onkeyup = function(e) {
                if (e.keyCode === 13) {
                    var msg = this.msgInput.value
                    this.sendMsg(msg)
                }
            }.bind(this)
        },
        sendMsg: function(msg) {
            this.msgInput.value = '';
            this.msgInput.focus();
            var b = new Barrage(msg);
            b.init();
            b.move();
        } 
    }

    page.init();

    // 弹幕对象
    var Barrage = function(msg) {
        this.msg = msg, // 弹幕信息
        this.speed = randomNum(-10, -5), // 速度
        this.color = randomColor(), // 颜色
        this.fontSize = randomNum(12, 32), // 字体大小
        this.pos = randomNum(10, page.ele.offsetHeight - this.fontSize - 10 ) // 位置
    }

    Barrage.prototype.init = function() {
        // 生成DOM节点
        var item = document.createElement('span');
        item.className = 'bar-item';
        item.innerText = this.msg;

        // 定义样式
        item.style.color = this.color;
        item.style.fontSize = this.fontSize + 'px';
        item.style.top = this.pos + 'px';

        // 写入页面
        page.ele.appendChild(item);

        // 指向实例
        this.ele = item;
    }

    // 消息移动
    Barrage.prototype.move = function() {
        var item = this.ele;
        item.timer = setInterval(function() {
            var currentLeft = item.offsetLeft;
            if (currentLeft < -item.offsetWidth) {
                // 清除定时器
                clearInterval(item.timer);

                // 移除节点
                this.remove();
            }
            item.style.left = currentLeft + this.speed + 'px';
        }.bind(this), 30)
    }

    // 移出消息
    Barrage.prototype.remove = function() {
        this.ele.parentNode.removeChild(this.ele);
    }
})
```

## 效果展示
[简单弹幕效果](https://cyq0802.xin/demo/jsDemo/barrage.html)