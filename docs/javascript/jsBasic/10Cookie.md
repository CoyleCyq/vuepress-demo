# 10 Cookie
- [网络知识](#网络知识)
    - [通信协议](#通信协议)
    - [TCP/UDP/IP](#TCP/UDP/IP)
    - [http/https](#http/https)
    - [socket](#socket)
- [cookie的概念](#cookie的概念)
    - [cookie的应用场景](#cookie的应用场景)
- [cookie的获取和设置](#cookie的获取和设置)
- [cookie的组成](#cookie的组成)
- [cookie的删除](#cookie的删除)
- [cookie的封装](#cookie的封装)
- [XSS攻击](#XSS攻击)

<src-BackToTop></src-BackToTop>
<src-MetaChange></src-MetaChange>

## 网络知识

### 通信协议
通信规则，设备与设备之间通信时共同遵守的规则

### TCP/UDP/IP
- IP： Internet Protocol（网络之间互连的协议），规定了计算机在因特网上进行通信时应当遵守的规则
    - IP地址：4个字节, 一共32位 ，用来标识设备在网络中的位置
    - 子网掩码: 255.255.255.0 确认两台计算机是否处于同一网段
- TCP：Transmission Control Protocol（传输控制协议）

    TCP面向连接的协议（通信之前必须先建立连接）

    TCP相对可靠，它建立连接的过程称为3次握手

    - 经历3次握手，才能建立连接
    - 所有的消息传送，需要对方确认送达

```
//正常通信
A："土豆，土豆，我是茄子，收到请回答" 
B："茄子，茄子，我是土豆，收到消息，有什么指示？"
A："没事，没事，我以为你挂了呢" 
A："开始传送消息..."   

//如果对方没回应，则不断重复发送当前消息，直至对方收到回应为止。 
A："茄子，茄子，我是土豆，我被人油炸了，现在改名叫薯片，收到请回答"
............ 
A："茄子，茄子，我是土豆，我被人油炸了，现在改名叫薯片，收到请回答，第2遍"
............ 
A："茄子，茄子，我是土豆，我被人油炸了，现在改名叫薯片，收到请回答，第3遍" 
............ 
B："薯片，薯片，我收到消息"
```
> 因此可以确保数据的准确送达 

- UDP
    > UDP面向数据报的协议 (不可靠的协议)，如果TCP比作是打电话，那么UDP就是在发短信

    - 无需建立连接，发送消息也无需对方确认 
    - 无法保证数据的发送顺序，以及准确率 
    - UDP通常用于视频、语音等通信（丢掉了一帧画面是无所谓的）

### http/https
超文本传输协议HyperText Transfer Protocol，基于TCP协议的一种高级协议, 用于客户端和服务器直接的通信

- http的特点是，请求完成后就立即断开与服务器的连接
- 缺点
    - 通信使用明文（不加密），内容可能会被窃听
    - 不适用特定的Web服务器，如：聊天室，消息广播

### socket
是一种通信模式，客户端与服务端一直保持着连接，用于随时传输数据

## cookie的概念
cookie 是客户端与服务器端进行通讯使用的一个能够在浏览器本地化存储的技术
> PS：chrome不支持本地文件的cookie读写

### cookie的应用场景
- 七天免登陆

    7天内访问网站无需输入密码
- 购物车信息

    添加到购物车后，取到购物车页面，商品信息依然存在
- 商品浏览记录

    用户每浏览一个商品就会保留商品的浏览记录

## cookie的获取和设置
```js
//设置
document.cookie = 'name=laoxie';

//获取
var cookies = document.cookie;
```
- 一次只能写入一个cookie
- 获取时得到所有cookie，多个cookie之间用分号+空格（’; ‘）来隔开

## cookie的组成
cookie由键值对形式的文本组成，完整格式如下：
```js
document.cookie = name=value[;expires=date][;path=路径][;domain=域名]
//[]表示该值是可选
```

- name=value: 为你要保存的键值对(必选) 
    - 利用decodeURI解码中文字符
    - 利用json保存多条信息
- expires=date: 表示cookie的失效时间, 默认是浏览器关闭时失效(可选)

```js
// 设置7天内生效的cookie
var date = new Date();  
date.setDate(date.getDate() +7); 
document.cookie = "user=laoxie;expires=" + date;
```
- path=路径: 访问路径, 默认为当前文件所在目录(可选)

    cookie只能在设置的路径及它的子目录下使用
- domain=域名: 访问域名, 限制在该域名下访问(可选)

    没有设置则默认为当前域名

## cookie的删除
利用设置过期时间达到删除的效果。

## cookie的封装
封装cookie的增删改查

## XSS攻击
跨域脚本攻击(Cross Site Scripting)

练习
- 一周内免登陆
    > 用户密码的保存
- 拖拽保存位置效果
- 添加购物车
    > - cookie跟json的配合

- 保存换肤后的样式
- 5分钟后自动退出登录
- 记录商品浏览记录