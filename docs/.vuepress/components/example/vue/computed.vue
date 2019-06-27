<template>
  <div id="app">
		<fieldset>
			<legend>正常文本 message</legend>
			<p>{{message}}</p>
		</fieldset>
		<fieldset>
			<legend>通过反转 message 计算的结果</legend>
			<p>{{reversedMessage}}</p>
		</fieldset>
		<fieldset>
			<legend>computed getter</legend>
			<p>{{fullName}}</p>
		</fieldset>	
		<fieldset>
			<legend>computed setter</legend>
			<p>{{fullName}}</p>
			<input type="text"  v-model="newName">
			<input type="button" value="changeName" @click="changeName(1)">			
			<input type="button" value="changeName" @click="changeName(1)">
			<input type="button" value="changeName" @click="changeName(1)">
		</fieldset>			
	</div>
</template>

<script>
export default {
  data() {
    return {
      message: 'ABC',
      firstName:'coyle',
      lastName: 'cyq',
      newName: ''
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    },
    fullName:{
      get: function(){
        return this.firstName + '.' + this.lastName
      },set: function(newValue){
        this.firstName = newValue
      }
    }
  },
  methods: {
    changeName: function(){
      this.fullName = this.newName;
    }
  }
}
</script>

