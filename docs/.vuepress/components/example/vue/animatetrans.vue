<template>
  <div id="app">
		<button @click="show = !show">Toggle render</button>
		<transition enter-active-class="animated jello" leave-active-class="animated bounceOutRight">
			<div v-if="show"><img src="https://cyq0802.xin/img/demoImg/bird.gif" /></div>
		</transition>
	</div>
</template>


<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>


