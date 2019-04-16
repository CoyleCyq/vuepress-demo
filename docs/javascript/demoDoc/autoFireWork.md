# 烟花效果(面向对象)

## 结构和样式
```html
<style type="text/css">
	html,body{overflow:hidden;height:100%;}
	body,div,p{margin:0;padding:0;}
	body{background:#000;font:12px/1.5 arial;color:#7A7A7A;}
	a{text-decoration:none;outline:none;}
	#tips,#copyright{position:absolute;width:100%;height:50px;text-align:center;background:#171717;border:2px solid #484848;}
	#tips{top:0;border-width:0 0 2px;}
	#tips a{font:14px/30px arial;color:#FFF;background:#F06;display:inline-block;margin:10px 5px 0;padding:0 15px;border-radius:15px;}
	#tips a.active{background:#FE0000;}
	#copyright{bottom:0;line-height:50px;border-width:2px 0 0;}
	#copyright a{color:#FFF;background:#7A7A7A;padding:2px 5px;border-radius:10px;}
	#copyright a:hover{background:#F90;}
	p{position:absolute;top:55px;width:100%;text-align:center;}
	.fire {width: 3px;height: 30px;background: white;position: absolute;top:100%;} 
	.spark {position: absolute;width: 10px;height: 10px;border-radius: 50%;}
</style>
<script src="https://cyq0802.xin/utils/common.js"></script>
<body>
	<div id="tips"><a id="auto" href="javascript:;" class="">自动放烟花</a></div>
</body>
```

## js代码
```js
document.addEventListener('DOMContentLoaded',function(){
    /*
        1、创建对象并描述
            * 属性（这个对象有什么）
            * 方法（这个对象能做什么）
        */
    
    // 页面对象
    var page = {
        // 属性
        button:document.querySelector('#auto'),
        container:document.body,

        // 方法
        // * 生成html结构
        // * 绑定事件
        init:function(){
            // 绑定点击事件，飞出烟花
            document.onclick = function(e){
                e = e || window.event;
                var x = e.clientX;
                var y = e.clientY;
                // 链式调用
                new Fireworks(x,y).init().move();
            }

            // 自动放烟花
            this.button.onclick = function() {
                if (this.innerText === '自动放烟花') {
                    page.button.innerText = '停止放烟花'
                    page.button.timer = setInterval(function() {
                        var x = randomNum(50, window.innerWidth - 50);
                        var y = randomNum(50, window.innerHeight - 50);
                        new Fireworks(x,y).init().move();
                    }, 500)
                
                } else {
                    page.button.innerText = '自动放烟花';
                    clearInterval(page.button.timer)
                }
            }
        }
    }
    page.init();

    // 烟花对象
    function Fireworks(x,y){
        // 属性
        this.left = x;
        this.top = y;

    }
    // 方法
    // 单一原则
    Fireworks.prototype.init = function(){
        // this指向实例
        var fire = document.createElement('div');
        fire.className = 'fire';

        // 定位
        fire.style.left = this.left + 'px';

        // 把生成的节点写入页面
        page.container.appendChild(fire);

        this.ele = fire;

        return this;
    }
    Fireworks.prototype.move = function(){
        animate(this.ele,{top:this.top,height:3},function(){
            this.remove();

            // 烟花爆炸
            this.boom();
        }.bind(this));
        
        return this;
    }
    Fireworks.prototype.remove = function(){
        this.ele.parentNode.removeChild(this.ele);
        return this;
    }
    Fireworks.prototype.boom = function(){
        var qty = randomNum(10,20);

        var r = randomNum(20,100);
        for(var i=0;i<qty;i++){
            var deg = 360/qty*i;

            new Spark(this.left,this.top,deg,r);
        }

        return this;
    }


    // 烟火对象
    function Spark(x,y,deg,r){
        // 随机颜色
        this.color = randomColor();

        // 位置
        this.left = x;
        this.top = y;

        // 孤度
        this.rad = deg*Math.PI/180;

        // 半径
        this.r = r;

        this.init().move();
    }

    Spark.prototype.init = function(){
        var spark = document.createElement('div');
        spark.className = 'spark';

        // 定位
        spark.style.left = this.left + 'px';
        spark.style.top = this.top + 'px';

        // 随机颜色
        spark.style.backgroundColor = this.color;

        // 写入页面
        page.container.appendChild(spark);

        this.ele = spark;

        return this;
    }
    // 烟火的移动
    Spark.prototype.move = function(){
        var targetTop = parseInt(this.top + this.r*Math.sin(this.rad));
        var targetLeft = parseInt(this.left + this.r*Math.cos(this.rad));
        animate(this.ele,{left:targetLeft,top:targetTop,opacity:0.5},function(){
            this.remove();
        }.bind(this));

        return this;
    }
    Spark.prototype.remove = function(){
        this.ele.parentNode.removeChild(this.ele);
        return this;
    }
})
```

## 效果展示
[放烟花效果](https://cyq0802.xin/demo/jsDemo/autoFireWork.html)