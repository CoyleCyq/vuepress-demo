# tab标签切换(js控制)

## 样式
```css
.tab{width:600px;margin:0 auto;border:1px solid #ddd;}
.tab header{border-bottom:2px solid #ddd;overflow:hidden;}
.tab header span{float:left;padding:0 15px;line-height:2;border-right:1px solid #ddd;}
.tab header span.active{background-color:#fc0;}
.tab .content{padding:15px;min-height:100px;}
```
## 结构
```html
<div class="tab">
    <header>
        <span>Tab1</span>
        <span>Tab2</span>
        <span>Tab3</span>
    </header>
    <div class="content">
        <div>内容1</div>
        <div>内容2</div>
        <div>内容3</div>
    </div>
</div>
```
## js代码
```js
window.onload = function() {
    var tab = document.getElementsByClassName('tab')[0];
    //IE8-: getElementsByTagName('*')=》遍历查找包含active的class属性

    var title = tab.children[0].children;
    var content = tab.children[1].children;


    // 给第一个tab添加高亮
    title[0].className = 'active';

    
    for (var i = 0; i < title.length; i++) {
        // 隐藏除第一个以外的内容
        if (i > 0) {
            content[i].style.display = 'none';
        }

        // 传递idx值（关键）:在循环过程中把i值存入dom节点
        title[i].idx = i;

        // 给个span添加点击事件
        title[i].onclick = function() {
            // var idx = this.getAttribute('idx');
            var idx = this.idx;

            for(var i = 0; i < title.length; i++) {

                // 清除其他高亮(把所有高亮清除)
                title[i].className = '';

                // 隐藏所有内容
                content[i].style.display = 'none';
            }

            // 给当前tab添加高亮
            this.className = 'active';
            content[idx].style.display = 'block';
        }
    }
}
```
## 效果展示
[tab切换](https://cyq0802.xin/demo/jsDemo/tabChange.html)