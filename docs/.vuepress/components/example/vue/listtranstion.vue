<template>
  <div id="app">
		<p>
			<input type="button" value="AddItem" @click="addItem">
			<input type="button" value="RemoveItem" @click="removeItem">
		</p>
		<transition-group tag="ul" name="list">
			<li v-for="(item, index) in items" :key="item">Item {{index}}</li>
		</transition-group>
	</div>
</template>

<script>
export default {
  data() {
    return {
      items: [1,2,3]
    }
  },
  methods: {
    randomIndex: function(){
      return  parseInt(this.items.length * Math.random());
    },
    addItem: function(){
      this.items.splice(this.randomIndex(), 0, this.items.length + 1);
    },
    removeItem: function(){
      this.items.splice(this.randomIndex(), 1);
    }
  }
}
</script>

<style lang="scss" scoped>
*{list-style: none;}
li{width: 300px; margin-bottom: 5px; padding: 10px 20px; background-color: #ccc;}
.list-enter{opacity: 0; transform: translateX(300px);}
.list-enter-active{transition: all .5s;}
.list-leave-active{transition: all .5s; opacity: 0; transform: translateX(-300px);}
</style>


