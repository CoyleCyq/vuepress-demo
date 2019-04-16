# 瀑布流效果

## 结构和样式
```html
<style>
* {padding: 0;margin: 0;}
html {height: 100%;}
body {height: 100%;}
img {border: 0;}
div.wrap {width: 100%;margin: 0 auto;/*overflow: hidden;*/position: relative;background: #DDD;}
div.wrap div {width: 200px;padding: 4px;border: 1px solid #000;float: left;position: absolute;left:0;top:0;background:#fff;}
div.wrap div h3 {line-height: 35px;}
div.wrap div img {width: 200px;}
</style>   
<script src="https://cyq0802.xin/utils/common.js"></script>

<body>
    <div class="wrap" id="wrap"></div>
</body>
```
## 思路
- 瀑布流布局
    - 计算当前容器能容纳多少列
        - 列数 = parseInt(容器宽度/图片宽度)
    - 计算水平间隔
        - 间隔 = 容器宽度%图片宽度/(列数+1)
    - 创建一个数组pos
        - 用来保存第一行每列图片左上角坐标(left,top)
    - 遍历所有图片，往容器里添加图片
        - 遍历数组pos，查找最小top值，然后更新当前top值
            - top = top + vgap + 图片高度

## js代码
```js
let wrap = document.querySelector("#wrap");
// 生成数据
let render = function() {
    let html = ''
    for (let i = 1; i <= 57; i++ ) {
        html += `
            <div>
                <h3>瀑布流</h3>
                <a href="javascript:;"> <img src="https://cyq0802.xin/img/waterfall/${i}.jpg" /></a>
                <p>瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流</p>
                <span>瀑布流瀑布流瀑布流瀑布流瀑布流瀑布流</span>
            </div>
        `
    }
    wrap.innerHTML = html
}

render()

window.onload = function() {
    let items = wrap.children;

    // 图片宽度
    let imgWidth = items[0].offsetWidth;

    // 垂直间距
    let vgap = 15;

    waterfall();
    
    // 窗口改变事件
    window.onresize = function() {
        waterfall();
    }


    function waterfall() {
        let wrapWidth = wrap.offsetWidth - 17;


        // 1）计算当前容器能容纳多少列
        let col = Math.floor(wrapWidth / imgWidth);
        

        // 2）计算水平间隔
        let hgap = wrapWidth % imgWidth / (col + 1); console.log(hgap)


        // 3)创建一个数组pos,用来保存第一行每列图片左上角坐标(left,top)
        let pos = [];

        for (let i = 0; i < col; i++) {
            pos.push({
                left: hgap * (i + 1) + imgWidth * i,
                top: vgap
            });
        }

        // 4）遍历所有图片，往容器里添加图片
        for (let i = 0; i < items.length; i++) {
                // 遍历数组pos，查找最小top值所在索引值，然后更新当前top值
                let minIdx = 0;
                let min = pos[minIdx].top;

                for (let j = 1; j < pos.length; j++) {
                    if (pos[j].top < min) {
                        min = pos[j].top;
                        minIdx = j;
                    }
                }

            // 定位图片
            animate(items[i], {
                left: parseInt(pos[minIdx].left),
                top: parseInt(pos[minIdx].top)
            });


            // 更新top值
            pos[minIdx].top += vgap + items[i].offsetHeight
        }
    }
}
```

## 效果展示
[瀑布流](https://cyq0802.xin/demo/jsDemo/waterfall.html)