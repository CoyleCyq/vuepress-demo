# 导读
Node.js是一门开源的，为Web而生的语言，具有高并发，异步等特点，并且拥有一个十分活跃的开发者社区，与Ruby, Python等语言相比，Nodejs更年轻，更易于没有经验的人上手使用

Node.js® 是一个基于 Chrome V8 引擎 的 JavaScript runtime。

## Node的诞生历程
- 2009年3月 Ryan Dahl 在其微博上宣布准备基于 V8 创建一个轻量级的 Web 服务器并提供一套库
- 2009年5月 Ryan Dahl 在 GitHub 上发布了最初的版本。
- 2009年12月和2010年4月两届 JsConf 大会都安排了 Node 讲座
- 2010年年底，Node 获得硅谷云计算服务商 Joyent 的资助， 其创始人Ryan Dahl 加入Joyent 公司全职负责 Node 的发展
- 2011年7月，Node 在微软的支持下发布了Windows版本

## 为什么选用JavaScript
Ryan Dahl 是一名资深的C/C++ 程序员，在创作Node 之前，他的工作都是围绕高性能Web服务器进行的，经历过一些尝试和失败后，他找到了设计高性能，web服务器的几个要点，事件驱动，非阻塞I/O.

写作Node的时候， Ryan Dahl 曾经评估过C, Lua, Haskell, Ruby 等语言作为备选实现，结论为C的开发门槛高，可以预见不会有太多开发者能将它用于日常开发，所以舍弃它， Ryan Dahl觉得自己不足够玩转Haskell，所以舍弃，Lua 自身已经有很多阻塞I/O库，为其构建非阻塞I/O也不能改变人们继续使用阻塞I/O库的习惯，而Ruby的虚拟机由于性能不好而落选

相比之下，JavaScript 比C 的开发门槛低，比Lua 历史包裹要少，另外JavaScript在浏览器中有广泛的事件驱动方面的应用，暗合Ryan Dahl 的喜好，而且当时第二次浏览器世界大战渐渐分出高下，Chrome浏览器的Javascript引擎 V8 摘的性能第一的桂冠，而且器基于新BSD 许可证发布，JavaScript成为了Node的实现语言