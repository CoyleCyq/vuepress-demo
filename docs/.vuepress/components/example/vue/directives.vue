<template>
  <div>
    <fieldset>
        <legend>v-text</legend>
        <span title='v-text="mess"' v-text="mess"></span>
        <!--效果等同于-->
        <span title='双花括号渲染'>{{mess}}</span>                
    </fieldset>
    <fieldset>
        <legend>v-html</legend>
        <div title='v-html="html"' v-html="html"></div>               
    </fieldset>
    <fieldset>
        <legend>v-show</legend>
        <div title='v-show="show"' v-show="show">{{mess}}</div>              
    </fieldset>
    <fieldset>
        <legend>v-if && v-else-if && v-else</legend>
        <div title='v-if="flag == 1"' v-if="flag == 1">1</div>
        <div title='v-else-if="flag == 2"' v-else-if="flag == 2">2</div>
        <div title='v-else' v-else>3</div>
    </fieldset>
    <fieldset>
        <legend>v-for data: 3</legend>
        <!--
            结果会生成 3 个 div，
            value 的值分类为 1, 2, 3 
            index(下标) 的值分别为 0, 1, 2
        -->
        <div v-for="(value, index) in data1">
            <span v-text="'Value：' + value"></span>
            <span>{{'   Index：' + index}}</span>
        </div>
        <!--也可以这样写-->
        <div v-for="value in data1">
            <span v-text="'Value：' + value"></span>
        </div>
    </fieldset>
    <fieldset>
        <legend>v-for data: 'abc'</legend>
        <!--
            结果会生成 data.length 个 div，
            value 的值分类为 a, b, c 
            index(下标) 的值分别为 0, 1, 2
        -->
        <div v-for="(value, index) in data2">
            <span v-text="'Value：' + value"></span>
            <span>{{'   Index：' + index}}</span>
        </div>
        <!--也可以这样写-->
        <div v-for="value in data2">
            <span v-text="'Value：' + value"></span>
        </div>
    </fieldset>
    <fieldset>
        <legend>v-for data: {name: 'coyle', age: 18}</legend>
        <!--
            结果会生成 data 属性个数个 div，
            value 的值分类为 coyle, 18 
            key 的值分别为 name, age
        -->
        <div v-for="(value, key) in data3">
            <span v-text="'Value：' + value"></span>
            <span >{{'   Key：' + key}}</span>
        </div>
        <!--也可以这样写-->
        <div v-for="value in data3">
            <span  v-text="'Value：' + value"></span>
        </div>
    </fieldset>
    <fieldset>
        <legend>v-for data: [{name: 'coyle1', age: 18}, {name: 'coyle2', age: 20}]</legend>
        <!--
            结果会生成 data.length 个 div，
            obj 的值分类为 data[0], data[1] 
            index 的值分别为 0, 1
        -->
        <div v-for="(obj, index) in data4">
            <span v-text="'Value：' + JSON.stringify(obj)"></span>
            <span>{{'   Index：' + index}}</span>
        </div>
        <!--也可以这样写-->
        <div v-for="obj in data4">
            <span v-text="'Value：' + JSON.stringify(obj)"></span>
        </div>
    </fieldset>
    <fieldset>
        <legend>v-on</legend>
        <div>{{mess}}</div>
        <!--click事件直接绑定一个方法-->
        <button title='v-on:click="say1"'  v-on:click="say1">say1</button>
        <!--click事件使用内联语句-->
        <button title='缩写' @click="say2('调用了 say2')">say2</button>
    </fieldset>
    <fieldset>
        <legend>v-bind</legend>
        <img v-bind:src="'https://cyq0802.xin/img/demoImg/red.jpg'" />
        <!--缩写方式-->
        <img :src="'https://cyq0802.xin/img/demoImg/green.jpg'" />
    </fieldset>
    <fieldset>
        <legend>v-model</legend>
        <!--仅限于表单元素-->
        <input type="text" v-model="mess"/>
    </fieldset>    
    <fieldset>
        <legend>v-pre</legend>
        <!--把 {{}} 当字符串输出-->
        <span v-pre>{{mess}}</span>
    </fieldset> 
    <fieldset>
        <legend>v-cloak</legend>
        <!--
          mess = 'abc'
          span 还没被 vue 解析的时候会显示 {{mess}}
          解析后会显示 123
          用于解决这两个转换的过程不友好的显示
          尤其是在页面加载过慢的情况很容易出现这种情况
        -->
        <span v-cloak>{{mess}}</span>
    </fieldset>   
    <fieldset>
        <legend>v-once</legend>
        <!--内容只解释一次，当改变 mess 时不会再次映射到 span-->
        <span v-once>{{mess}}</span>
    </fieldset>                                                                     
  </div>
</template>

<script>
export default {
  data() {
    return {
      mess: "我是文本",
      html: '<h2>我是 HTML 元素</h2>',
      show: true,
      flag: 1,
      data1: 3,
      data2: 'abc',
      data3: {name: 'coyle', age: 18},
      data4: [{name: 'coyle1', age: 18}, {name: 'coyle2', age: 20}]
    }
  },
  methods: {
    say1: function() {
      this.mess = "调用了 say1"
    },
    say2: function(arg) {
      this.mess = '直接绑定一个方法'
    }
  }
}
</script>

