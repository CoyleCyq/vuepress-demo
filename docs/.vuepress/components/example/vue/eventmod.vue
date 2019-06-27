<template>
  <div id="app">
		<fieldset>
			<legend>阻止事件冒泡.stop</legend>
			<p>顺序：{{stop}}</p>
		    <div id="div1" class="stop" @click.stop="event1(1)">
		        <span>div1</span>
		        <div id="div2" @click.stop="event2(2)">
		            <span>div2</span>
		            <div id="div3" @click.stop="event3(3)">
		                <span>div3</span>
		            </div>
		        </div>
		    </div>
		</fieldset>
		<fieldset>
			<legend>使用事件捕获模式.capture</legend>
			<p>顺序：{{capture}}</p>
		    <div id="div4" class="stop" @click.capture="event1(4)">
		        <span>div4</span>
		        <div id="div5" @click.capture="event2(5)">
		            <span>div5</span>
		            <div id="div6" @click.capture="event3(6)">
		                <span>div6</span>
		            </div>
		        </div>
		    </div>			
		</fieldset>
		<fieldset>
			<legend>事件只作用本身.self</legend>
			<p>顺序：{{self}}</p>
		    <div id="div7" class="stop" @click.self="event1(7)">
		        <span>div7</span>
		        <div id="div8" @click.self="event2(8)">
		            <span>div8</span>
		            <div id="div9" @click.self="event3(9)">
		                <span>div9</span>
		            </div>
		        </div>
		    </div>	
		</fieldset>
		<fieldset>
			<legend>阻止浏览器默认行为.prevent</legend>
			<a href="https://github.com/CoyleCyq" target="_blank" @click.prevent="prevent">CoyleCyq's github</a>
		</fieldset>		
		<fieldset>
			<legend>只作用一次.once</legend>
			<a href="https://github.com/CoyleCyq" target="_blank" @click.once="prevent">CoyleCyq's github</a>
		</fieldset>	
		<fieldset>
			<legend>修饰符可以串联.click.prevent.once</legend>
			<a href="https://github.com/CoyleCyq" target="_blank" @click.prevent.once="prevent">CoyleCyq's github</a>
		</fieldset>						
	</div>
</template>


<script>
export default {
  data() {
    return {
      stop: '',
      capture: '',
      self: ''
    }
  },
  methods: {
    randomColor: function() {
      var r = parseInt(Math.random() * 255);
      var g = parseInt(Math.random() * 255);
      var b = parseInt(Math.random() * 255);
      var color = 'rgb(' + r + ',' + g + ', ' + b + ')';
      return color;
    },
    changeBackground: function(id) {
      if(id < 4){
        this.stop += ('div' + id + ' | ');
      } else if(id < 7) {
        this.capture += ('div' + id + ' | ');
      } else {
        this.self += ('div' + id + ' | ');
      }
      document.getElementById('div' + id).style.background = this.randomColor();
    },
    event1: function(id){
      this.changeBackground(id);
    },
    event2: function(id){
      this.changeBackground(id);
    },
    event3: function(id){
      this.changeBackground(id);
    },															
    prevent: function(event){
      event.target.style.color = this.randomColor();
    }
  }
}
</script>
