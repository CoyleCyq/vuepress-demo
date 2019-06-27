<template>
  <div>
    <fieldset>
      <legend>简单的事件处理</legend>
        <input type="button" @click="count += 1" value="监听事件">
        <span>{{count}}</span>			
    </fieldset>
    <fieldset>
      <legend>方法事件处理器</legend>
        <input type="button" @click="counter" value="方法事件处理器">
        <span>{{count}}</span>
    </fieldset>	
    <fieldset>
      <legend>event 对象</legend>
      <!--默认会传 $event 对象过去 $event 对象是 Vue 对事件的 event 对象的继承实现 -->
        <input type="button" @click="eventer" count="1" value="event 对象">
        <span>{{count}}</span>
    </fieldset>	
    <fieldset>
      <legend>传参数</legend>
        <input type="button" @click="parameter(10, $event)" value="事件传参数">
        <span>{{count}}</span>
    </fieldset>		
  </div>
</template>

<script>
export default {
  data(){
    return {
      count: 0
    }
  },
  methods: {
    counter: function(){
      this.count += 1;
    },
    eventer: function(event){
      var _count = event.target.getAttribute('count') * 1;
      this.count += _count;
      event.target.setAttribute('count', _count);
    },
    parameter: function(n, event){
      this.count += n;
      event.target.setAttribute('disabled', true);
    }
  }
}
</script>



