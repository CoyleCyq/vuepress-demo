# JS 下载文件

## 应用场景： js通过点击按钮或者链接下载文件

PS:本文说的，并非如何用js创建流、创建文件、实现下载功能。

有两个方法：window.open()和通过form表单来提交。

### 方法一：window.open("下载文件的后端接口");

```html
<!--html-->
<button type="button" id="btn1">下载一个zip（方法1）</button>
<button type="button" id="btn2">下载一个zip（方法2）</button>
```

```js
var $eleBtn1 = $("#btn1");
var $eleBtn2 = $("#btn2");

//已知一个下载文件的后端接口：https://codeload.github.com/douban/douban-client/legacy.zip/master
//方法一：window.open()
$eleBtn1.click(function(){
    window.open("https://codeload.github.com/douban/douban-client/legacy.zip/master");
});
```
然而有个问题：浏览器会打开一个新窗口，然后迅速自动关闭，体验非常不好。

```js
//该方法在火狐上没有效果的，在IE浏览器上是可以的
window.open("htpp://127.0.0.1/test.rar");

//该方法火狐有些版本是不支持的
window.location.href="htpp://127.0.0.1/test.rar";

//为了解决火狐有些版本不支持,可以改成这种方式
window.location="htpp://127.0.0.1/test.rar"; 

// 案例
$doc.on('click', '.btn-download', function () {
    var imageType = $(this).data('imagetype');
    var formData = $(this).closest('form').data();
    var me = this;
    if ($(me).hasClass('error')) return true;
    var platformType = $(this).data('platformtype');
    var host = window.location.host;
    window.open('http://' + host + '/Products/DownloadOnlineImage?entityId=' + bundleId + '&platformType=' + platformType + '&imageType=' + imageType);
    return false;
});

// 注意：http不可以少，否则可能不会自动关闭
```

### 方法二：通过form提交（推荐）

由于 `ajax` 函数的返回类型只有 `xml、text、json、html` 等类型，没有“流”类型，所以通过 `ajax` 去请求该接口是无法下载文件的，所以我们创建一个新的 `form` 元素来请求接口。

```js
 $eleBtn2.click(function(){
    var $eleForm = $("<form method='get'></form>");

    $eleForm.attr("action","https://codeload.github.com/douban/douban-client/legacy.zip/master");

    $(document.body).append($eleForm);

    //提交表单，实现下载
    $eleForm.submit();
});


// 案例
// 导出清单
$('.bat-export-list').batAction({
    action: function ($checkboxs) {
        var data = $.getCheckedValue($checkboxs)
        var form = $("<form>"); //创建form标签
        form.attr("style", "display:none");
        form.attr("method", "GET");//设置请求方式
        form.attr("action", "/ShippingBox/ExportShippingOrdersToExcel"); //action属性设置请求路径
        $("body").append(form); //页面添加form标签

        let input1 = $("<input>") //创建input标签
        input1.attr("type", "hidden") //设置隐藏域
        input1.attr("name", "idsStr") //设置发送后台数据的参数名
        input1.attr("value", data);
        form.append(input1);
        form.submit();//表单提交即可下载！
    }
})
```

