# 二次排序
## 业务场景：
需求上要求先按优先级排序，排序了之后再按名称排序，(名称还是中文的。。。)

## 相关知识点
`localeCompare()`

语法： `stringObject.localeCompare(target)`

## 中文排序
```js
// 
var testData = [
    {name:"佛山",priority:2},
    {name:"广州",priority:1},
    {name:"长沙",priority:5},
    {name:"新加坡",priority:2},
    {name:"北京",priority:2},
    {name:"昆明",priority:5},
    {name:"武汉",priority:1},
    {name:"台北",priority:1},
    {name:"肉末",priority:5},
    {name:"安乡",priority:5},
    {name:"中山",priority:2},
    {name:"披萨",priority:5}
]

testData.sort((a, b)=> b.name.localeCompare(a.name, 'zh')); //z~a 排序
testData.sort((a, b)=> a.name.localeCompare(b.name, 'zh')); //a~z 排序
```

## 两次排序
```js
// js 代码
function chineseSort(array) { // 中文排序： 数字 > 中文 > 英文
    return array.sort(function compareFunction(a, b) {
        return a.name.localeCompare(b.name, "zh");
    });
        
}

// 先按优先级排
testData.sort(function(a, b) { // 倒序
    return b.priority - a.priority
})

var cacheArr = []; // 缓存数组
var sortArr= [];//最终排序好的数组
for (var i = 0, arrLen = testData.length; i < arrLen; i++) {
    if (i < arrLen - 1) {
        var thisVal = testData[i].priority;
        var nextVal = testData[i+1].priority;
        if (thisVal === nextVal) {
            cacheArr.push(testData[i])
        }else{
            cacheArr.push(testData[i])
            //cacheArr本身就是一个数组不能直接push添加，而要apply融合
            sortArr.push.apply(sortArr, chineseSort(cacheArr))
            cacheArr = []; // 清空缓存数组
        }
    } else {
        cacheArr.push(testData[i])
        sortArr.push.apply(sortArr, chineseSort(cacheArr))
    }
}

```