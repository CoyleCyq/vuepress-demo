# 简单的自动回复机器人

## 样式
```css
ul{list-style: none;padding:0;margin:0;}
.msg-list{width:600px;margin:0 auto;}
.msg-list ul{padding:10px;height:300px;overflow:auto;border:1px solid #ddd;}
.msg-list li{float:left;clear:both;margin:10px 0;padding:5px;line-height:2;border-radius:5px;background-color:#efefef;}
.msg-list li.active{float:right;background-color:#fc0;color:#fff;}
.msg-list textarea{display:block;min-height:50px;margin:10px 0;width:100%;box-sizing: border-box;}
```
## 结构
```html
<div id="autoApply" class="msg-list">
    <ul>
    </ul>
    <textarea></textarea>
    <button>提交</button>
</div>
```
## 思路
1. 创建一一对应的消息
2. 发送消息
    * 给按钮绑定事件
    * 根据输入的信息生成li，并把li写入ul
3. 自动应答
    * 根据输入的信息，查找对应的回复
    * 如果有对应的回复，把回复信息生成li并写入ul
    * 如果没有对应的回复，统一回复“你说什么？风太大，我听不见”

## js代码
```js
window.onload = function() {
    // 获取页面元素
    var autoApply = document.getElementById('autoApply');
    var msglist = autoApply.children[0];
    var msg = autoApply.children[1];
    var btn = autoApply.children[2];

    // 1）创建一一对应的消息
    var q = ['你好','在吗','约吗','10年的感情说没就没'];
    var a = ['他好我也好','心若在梦就在','不闲聊，直接约','十年之前，我不认识你，你也不属于我'];

    // 2）发送消息
    btn.onclick = function(){
        var _msg = msg.value;

        var li = document.createElement('li');
        li.className = 'active';
        li.innerHTML = _msg;

        msglist.appendChild(li);

        // 清空并获取焦点
        msg.value = '';
        msg.focus();


        // 自动回复
        var aLi = document.createElement('li');

        // 判断发送的消息是否存在与q数组中
        var idx = q.indexOf(_msg);
        if (idx != -1){
            aLi.innerHTML = a[idx];
        } else {
            aLi.innerHTML = '你说什么？风太大，我听不见!';
        }


        // 延迟0.5s回复
        setTimeout(function(){
            msglist.appendChild(aLi);

            // 滚动到可视区域
            // scrollIntoView()
            // msglist.scrollTop = 10000;
            msglist.scrollTop = msglist.scrollHeight;
            // aLi.scrollIntoView();
            
            console.log(msglist.scrollHeight)
        },1000);
    }
}

```
## 效果展示
[自动回复](https://cyq0802.xin/demo/jsDemo/autoResponse.html)