<template>
  <div id="app">
		<!-- 在 "change" 而不是 "input" 事件中更新 -->
		<input v-model.lazy="counter">	

		<input v-model="counter" >
		<!-- 自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值） -->
		<input v-model.number="counter" type="number">			
		<!-- 自动过滤用户输入的首尾空格 -->
		<input v-model.trim="counter">	
	</div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      age: 0
    }
  }
}
</script>

