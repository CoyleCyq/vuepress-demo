# 根据对象的某个字段分组数据
经常会碰到这种需求，后端返回的没经过处理的全部数据，而需求上又需要根据某个字段分组显示

## 预期效果
```js
// 希望的是将下面的数组对象
[
    {"id":"1001","name":"值1","value":"111"},
    {"id":"1001","name":"值1","value":"11111"},
    {"id":"1002","name":"值2","value":"25462"},
    {"id":"1002","name":"值2","value":"23131"},
    {"id":"1002","name":"值2","value":"2315432"},
    {"id":"1003","name":"值3","value":"333333"}
]

// 根据相同id字段分组
[
    {
        "id": "1001",
        "name": "值1",
        "data": [
            {"id": "1001", "name": "值1", "value": "111"},
            { "id": "1001", "name": "值1", "value": "11111"}
        ]
    },
    {
        "id": "1002",
        "name": "值2",
        "data": [
            { "id": "1002",  "name": "值2", "value": "25462" },
            { "id": "1002", "name": "值2", "value": "23131"},
            {"id": "1002", "name": "值2","value": "2315432" }
        ]
    },
    {
        "id": "1003",
        "name": "值3",
        "data": [
            {"id": "1003", "name": "值3", "value": "333333" }
        ]
    }
]
```
## js for循环实现
```js
// js for循环做法
var arr = [
    {"id":"1001","name":"值1","value":"111"},
    {"id":"1001","name":"值1","value":"11111"},
    {"id":"1002","name":"值2","value":"25462"},
    {"id":"1002","name":"值2","value":"23131"},
    {"id":"1002","name":"值2","value":"2315432"},
    {"id":"1003","name":"值3","value":"333333"}
];

var map = {},
    dest = [];
for(var i = 0; i < arr.length; i++){
    var ai = arr[i];
    if(!map[ai.id]){
        dest.push({
            id: ai.id,
            name: ai.name,
            data: [ai]
        });
        map[ai.id] = ai;
    }else{
        for(var j = 0; j < dest.length; j++){
            var dj = dest[j];
            if(dj.id == ai.id){
                dj.data.push(ai);
                break;
            }
        }
    }
}

console.log(dest);
```

## jquery 实现
```js
// jquery 做法
var map = {}; // 临时对象
var dest = []; // 最终结果
$.each(arr, function(i, item) {
	if (!map[item.id]) {
		dest.push({
            id: item.id,
            name: item.name,
            data: [item]
        });
        map[item.id] = item;
	} else {
		$.each(dest, function(j, val) {
			if (item.id === val.id) {
				val.data.push(item);
				return false
			}
		})
	}
})
console.log(dest)
```