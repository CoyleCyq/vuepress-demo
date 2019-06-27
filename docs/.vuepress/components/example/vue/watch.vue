<template>
  <div id="div1">
		<fieldset>
			<legend>直接监听</legend>
			<input type="text" v-model="a">
			<p>旧值：{{aOldVal}}</p>
			<p>新值：{{aNewVal}}</p>
		</fieldset>
		<fieldset>
			<legend>调用方法实现监听</legend>
			<input type="text" v-model="b">
			<p>旧值：{{bOldVal}}</p>
			<p>新值：{{bNewVal}}</p>
		</fieldset>	
		<fieldset>
			<legend>watch 和 computed 同时作用一个属性，watch 无效</legend>
			<input type="text" v-model="c">
		</fieldset>				
	</div>
</template>

<script>
export default {
  data() {
    return {
      a: 1,
      aOldVal: '',
      aNewVal: '',
      b: 2,
      bOldVal: '',
      bNewVal: '',
      changeB: function(val, oldVal){
        this.bOldVal = oldVal;
        this.bNewVal = val;					
        console.log('new: %s, old: %s', val, oldVal)
      }
    }
  },
  computed: {
    c: {
      get: function(){
        return '';
      },
      set: function(newVal){
        console.log('set val %s', newVal);
      }
    }				 
  },
  watch: {
    a: function (newVal, oldVal) {
      this.aOldVal = oldVal;
      this.aNewVal = newVal;
        console.log('new: %s, old: %s', newVal, oldVal)
    },
    // 方法名
    b: 'changeB',
    c: function(){
      //不起效
      console.log('watch')
    }
  }
}
</script>

