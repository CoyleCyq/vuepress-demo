# 08 DOM
- [什么是DOM](#什么是DOM)
- [节点类型](#节点类型)
- [节点获取](#节点获取)
    - [获取元素节点方法](#获取元素节点方法)
- [节点操作](#节点操作)
    - [节点属性](#节点属性)
    - [节点方法](#节点方法)
    - [利用节点关系获取其他节点](#利用节点关系获取其他节点)
- [元素节点的操作](#元素节点的操作)
    - [常用属性](#常用属性)
    - [盒模型相关](#盒模型相关)
    - [元素方法](#元素方法)
    - [根据元素关系获取其他元素](#根据元素关系获取其他元素)
    - [获取css样式](#获取css样式)
- [table对象](#table对象)
    - [table属性方法](属性方法) 
    - [tr属性方法](tr属性方法)
    - [td属性方法](#td属性方法)


## 什么是DOM
`DOM`是`Document Object Model`（文档对象模型）的缩写，是针对`HTML`和`XML`文档的一个`API`。`DOM`描绘了一个层次化的节点树，通过`DOM`，我们可以访问所有的`HTML`元素，连同它们所包含的文本和属性。可以对其中的内容进行修改和删除，同时也可以创建新的元素
。
![DOM树](https://github.com/CoyleCyq/img/blob/master/docImg/dom_tree.png?raw=true)

## 节点类型
- 每个节点都有一个nodeType属性，用于表明节点的类型。
- 常用节点类型与对应nodeType值：
    > 用于判断获取到的元素属于什么类型节点

    - 元素节点 &lt;==&gt; 1
    - 文本节点 &lt;==&gt; 3
    - 属性节点 &lt;==&gt; 2
```html
<!--找出所有节点-->
<div class="content" title="属性节点">测试Div</div>
```

## 节点获取
### 获取元素节点方法
- `document.getElementById(id)`
  - 通过 ID获取元素的节点（速度最快）
  - 必须通过document调用
  - 返回DOM节点对象，如果id不存在返回null
- `getElementsByTagName(tagname)`
  - 通过标签名获取元素节点列表
  - 返回类数组，如果tagname不存在返回空数组[]
- `getElementsByClassName()`
  - 通过class类名获取节点列表
  - 返回类数组，如果tagname不存在返回空数组[]
- `document.getElementsByName()`
  - 通过name属性获取元素节点列表
  - 必须通过document调用
  - 返回类数组，如果tagname不存在返回空数组[] 

> 注意: 如果确认元素存在, 但是返回null或[]，一定是代码执行顺序的问题

## 节点操作
### 节点属性
- nodeName&nbsp;   返回节点的名称，根据其类型。
- nodeType&nbsp;   返回节点的类型。
- nodeValue   返回节点的值（元素节点的nodeValue为null）

### 节点方法
- 创建
  - `document.createElement()`  创建一个元素节点
  - `document.createTextNode()` 创建一个文本节点
- 插入
  - `parent.appendChild()` 向节点的子节点列表的结尾添加新的子节点
  - `parent.insertBefore(new,node)` 在指定的子节点node前插入新的子节点new。
    > 对页面已存在节点的处理
- 复制&amp;替换
  - `cloneNode(boolean)`  复制节点，为true是深复制。
  - `parent.replaceChild(new,old)`将old节点替换为new节点
- 删除
  - `parent.removeChild(ele)` 删除（并返回）当前节点parent的指定子节点ele。
- 判断
  - `parent.hasChildNodes()` 判断当前节点是否拥有子节点,返回布尔值
  - `ele.hasAttribute(attr)`  判断当前元素是否拥有attr属性，返回布尔值
    > 以上parent表示父级元素


### 利用节点关系获取其他节点
- 获取父级节点
    - `ele.parentNode`  得到ele元素的父节点
- 获取子节点 
    - `ele.childNodes ` 得到ele元素的全部子节点列表（类数组）
    - `ele.firstChild`  获得ele元素的第一个子节点
    - `ele.lastChild`   获得ele元素的最后一个子节点
- 获取兄弟节点
    - `ele.nextSibling` 获得ele元素的下一个兄弟节点
    - `ele.previousSibling` 得到ele元素的上一个兄弟节点


## 元素节点的操作
### 常用属性
> 可以通过点语法或方括号访问

- `tagName` 获取元素元素的标签名
- `id` 设置/获取元素id属性
- `name` 设置/获取元素id属性
- `style` 设置/获取元素的内联样式
- `className` 设置/获取元素的class属性
- `innerHTML` 设置/获取元素的内容 (包含html代码)
- `outerHTML` 设置或获取元素及其内容 (包含html代码)
- `innerText` 设置或获取位于元素标签内的文本
- `outerText` 设置(包括标签)或获取(不包括标签)元素的文本

### 盒模型相关
- `offsetTop`: 当前元素离&lt;定位父级&gt;元素顶部的距离。
- `offsetLeft`: 当前元素离&lt;定位父级&gt;元素左边的距离。
> 以上两个属性如果没定位的父级，则相对于根元素html的距离

- `offsetWidth`: 当前元素的宽度（border + padding + content）
- `offsetHeight`: 当前元素的高度（border + padding + content）

### 元素方法
- `ele.getAttribute(attr)` 获取元素的属性值（自定义属性获取）
- `ele.setAttribute(attr,val)`; 设置元素的属性
- `ele.removeAttribute(attr)` 删除属性attr
- `ele.hasAttribute(attr)` 判断是否存在属性attr

### 根据元素关系获取其他元素
- `parentElement`  获取父级节点元素
- `children` 获取元素的全部子元素节点
- `firstElementChild` 获取第一个子节点元素
- `lastElementChild` 获取最后一个子节点元素
- `previousElementSibling` 获取前一个节点元素
- `nextElementSibling` 获取下一个节点元素


### 获取css样式
> 得到当前元素计算后的所有样式

- `getComputedStyle(ele,pseudo)` （标准）
    - `ele`:要获取样式的元素
    - `pseudo`:伪元素样式字符(可选)，可获取伪元素样式
- `ele.currentStyle` （IE8-）

## table对象
### table属性方法
- `rows` 返回包含表格中所有行的一个数组
- `tBodies` 返回包含表格中所有 tbody 的一个数组
- `insertRow(index)` 在表格中插入一个新行
- `deleteRow(index)` 从表格删除一行

### tr属性方法
- `cells` 返回包含表格中所有单元格的一个数组
- `rowIndex` 返回该行在表中的位置
- `sectionRowIndex` 返回在 `tBody 、tHead` 或 `tFoot `中行的位置。
- `insertCell(index)` 在一行中的指定位置插入一个空的列
- `deleteCell(index)` 删除行中的指定的单元格

### td属性方法
- `cellIndex` 返回单元格在表格行的单元格集合中的位置。
