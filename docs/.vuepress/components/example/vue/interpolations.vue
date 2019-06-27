<template>
  <div>
    <!-- 文本 当对 data.message 发生改变时，对应插值的内容也会自动改变-->
    <fieldset>
      <legend>文本</legend>
      <div>{{message}}</div>
    </fieldset>

    <!-- 纯 HTML {{}} 这种形式最终会被解释成文本，如果要想输入 HTML 结构，使用要用到 v-html="对象"-->
    <fieldset>
      <legend>纯 HTML</legend>
      <div v-html="rawHtml"></div>
    </fieldset>		

    <!-- 属性 元素的任意属性（包含自定义属性）都可以和对象绑定 :属性名(或者 v-bind:属性名)=“对象”-->
    <fieldset>
      <legend>属性</legend>
      <img :src="src" alt="" />
      <img v-bind:src="'https://cyq0802.xin/img/demoImg/red.jpg'" alt="" />
    </fieldset>	

    <!-- js 表达式 {{}} 可以用来解释 js 的表达式-->
    <fieldset>
      <legend>js 表达式</legend>
      <div>{{1 + 1}}</div>
      <div>{{status ? 'YES' : 'NO'}}</div>
      <div>{{message.split('').reverse().join('')}}</div>
    </fieldset>	
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '我是文本',
      rawHtml: '<h1>我是 h1 标签</h1>',
      src: 'https://cyq0802.xin/img/demoImg/green.jpg',
      status: true,
    }
  }
}
</script>


