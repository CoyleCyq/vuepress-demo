<template>
  <div id="app">
    F12打开控制台查看
		<fieldset>
			<legend>ASCII = 13 时触发</legend>
			<p></p>
			<input @keyup.13="submit">	
		</fieldset>
		<fieldset>
			<legend>按回车键时触发</legend>
			<p></p>
			<input @keyup.enter="submit">
		</fieldset>	
		<fieldset>
			<legend>Vue.config.keyCodes.f2 = 49</legend>
			<input @keyup.f2="submit" />		
		</fieldset>	
	</div>
</template>

<script>
import Vue from 'vue'

Vue.config.keyCodes.number1 = 49;
Vue.config.keyCodes.f2 = 113;
Vue.config.keyCodes.a = 13;

export default {
  data() {
    return {
      counter: 0,
      attr: 0
    }
  },
  methods: {
    submit: function(event){
      console.log(event);
    }
  }
}
</script>

