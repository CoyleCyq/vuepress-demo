# Vuex
在介绍 Vuex 之前，我先抛出一个问题,主要描述的结构是：

- 组件A
    - 组件B
        + 组件B1
            * 事件：Event1
            * 事件：Event2
            * 事件：Event3
        + 组件B2
            * 事件：Event1
            * 事件：Event2
            * 事件：Event3
    - 组件C
        + 组件C1
            * 事件：Event1
            * 事件：Event2
            * 事件：Event3
        + 组件C2
            * 事件：Event1
            * 事件：Event2
            * 事件：Event3
            
现在的问题要解决是组件C1或者C2要和组件B1或B2通信，前面有详细讲过 Vue 本身组件之间通信的方法，最简单的就是 `$parent` 和 `$children`，如果不知道如何使用的请回到上面看 [组件通信](https://github.com/CoyleCyq/Learning-notes/tree/master/Vue/VueBasic/Communication)

现在用 `$parent` 和 `$children` 来上面的问题：组件C1调用组件B2的方法
```js
this.$parent.$parent.$children[0].$children[1].Event1()
```
代码写到这问题解决了，但是如果再多几层的组件嵌套关系，又或者组件层级关系因需求发生了改变，那上面的代码又得重新改变。

为了解决这样的问题，有人想到了把为何不把所有组件的方法统一到一个公共对象，因为对象是一个无序属性集合，而且还是引用类型，然后把这个对象放到最外层，这样不管组件嵌套多少级，都能调用到对应的方法。

那上面的案例就可以生成如下面这种结构的对象了
```js
    var obj = {
        A: {},
        B: {},
        B1: {
            Event1: function(){},
            Event2: function(){},
            Event3: function(){}
        },
        B2: {
            Event1: function(){},
            Event2: function(){},
            Event3: function(){}
        },        
        C: {},
        C1: {
            Event1: function(){},
            Event2: function(){},
            Event3: function(){}
        },
        C2: {
            Event1: function(){},
            Event2: function(){},
            Event3: function(){}
        },         
    }
```


## 跨组件通信之——公共对象
场景：在组件 home 里面使用组件 counter，在 home 组件中实现计数，在组件 counter 同步显示当前计数。
#### common.js
```js
export default {
    state: {
        count: 0
    }
}
```

#### countercomponent
```html
<template>
    <div>
        <h3>count-{{common.state.count}}</h3>
    </div>
</template>

<script>
    import common from '../../common/common.js'
    export default {
        data(){
            return {
                common
            }
        }
    }
</script>
```

#### homecomponent
```html
<template>
    <div>
        <fieldset>
            <legend><h3>home</h3></legend>
            <div>
                <input type="button" value="increment" @click="increment"/>
                <span>{{common.state.count}}</span>
            </div>
        </fieldset>
        <fieldset>
            <legend><h3>counter</h3></legend>
            <counter></counter>
        </fieldset>
        
    </div>
</template>

<script>
    import common from '../../common/common.js'
    import counter from '../counter/counter.vue'

    export default {
        data(){
            return {
                common
            }
        },
        components: {
            datagrid,
            counter
        },
        methods: {
            increment(){
                this.common.state.count += 1;
            }
        }
    }
</script>
```

上面的案例是通过公共对象解决了简单的跨组件通信的问题，但如果组件 counter 也想能可以实现计数，那最简单的实现方法就是在组件 counter 当中也写一个事件 increment，但这样一来，事件就重复了。

封装实现就是把事件 increment 也放到 common.js 对象中去，然后组件都调用这个公共的方法。
```js
let state = {
    count: 0
}

let mutations = {
    increment(){
        state.count += 1;
    }
}
export default {
    state,
    mutations
};
```

看似解决了问题，但是如果场景更复杂，组件层级更深，组件间要通信的信息更多，组件间存在同名属性同名方法但不同逻辑等，目前这种方法就解决不了，需要进行更深层次的封装。

Vuex 就是上面这种解决方案的更深层次的实现。

## 跨组件通信之——Vuex
#### store.js
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
    count: 0
}

let mutations = {
    increment(){
        state.count += 1;
    },
    decrement(){
        state.count -= 1;
    }
}

const store = new Vuex.Store({
    state,
    mutations
})

export default store
```

#### app.js
```js
import Vue from 'vue'
import store from './vuex/store'

import homeComponent from './components/home/home.vue'

new Vue({
    el: '#app',
    store,
    render:h => h(homeComponent)
})
```

#### homecomponent

```html
<input type="button" value="increment" @click="increment"/>
<span>{{$store.state.count}}</span>
<script type="text/javascript">
    methods: {
        increment() {
            this.$store.commit('increment');
        }
    }    
</script>
```

#### countercomponent
```html
<span>{{$store.state.count}}</span>
```

#### 小结
- Vuex 实例 store，添加到 Vue 实例化当中去，然后整个 Vue 实例都能通过 $store 获取到公共对象 store。
- 用 `this.$store.commit('increment');` 触发 mutations 的 increment 方法
- state 是通过 mutations 来改变
- 用`$store.state.count`获取 store 的 state。

### Vuex——state访问
#### 方法一、直接获取
```html
<span>{{$store.state.count}}</span>
```

#### 方法二、通过 computed 的计算属性直接赋值
```html
<span>{{count}}</span>
<script type="text/javascript">
    computed: {
        count(){
            return this.$store.state.count
        }
    } 
</script>
```

#### 方法三、通过 mapState 的计算属性直接赋值
```html
<span>{{count}}</span>
<script type="text/javascript">
    import {mapState} from 'vuex';
    computed: mapState({
        count: state => state.count
    })
</script>
```

#### 方法四、通过 mapState 的数组来赋值
```html
<span>{{count}}</span>
<script type="text/javascript">
    import {mapState} from 'vuex';
    computed: mapState(['count'])
</script>
```

#### 方法五、对象展开运算符
```html
<span>{{count}}</span>
<script type="text/javascript">
    import {mapState} from 'vuex';
    computed: {
        ...mapState({
            count: state => state.count
        })
    }
</script>
```

### Vuex——Mutation
更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件，每个 mutation 的方法都会有一个 state 的参数在 commit 的时候当回调形参传过来，该形参就是 store.state

```js
let mutations = {
    increment(_state){
        _state.count += 1;
    },
}
```

#### Mutation 传参数——提交载荷（Payload）
可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）：
```js
let mutations = {
    increment(_state){
        _state.count += 1;
    },
}

this.$store.commit('increment', 10);
```

大多数情况下要传多个参数，但是 mutation 的方法最多只有两个参数，一个是 state，另一个是 payload，所以参数可以用对象的方式去传。

#### Mutation 触发之 mapMutations 篇
```html
<input type="button" value="increment" @click="increment(10)"/>
<script type="text/javascript">
    import {mapMutations} from 'vuex';
    methods: mapMutations(['increment'])
</script>
```

#### Mutation 触发之 mapMutations 别名篇
```html
<input type="button" value="increment" @click="add(10)"/>
<script type="text/javascript">
    import {mapMutations} from 'vuex';
    methods: mapMutations({
        add: 'increment'
    })
</script>
```

#### Mutation 触发之对象展开运算符篇
```html
<input type="button" value="increment" @click="increment(10)"/>
<script type="text/javascript">
    import {mapMutations} from 'vuex';
    methods: {
        ...mapMutations(['increment']),
    }
</script>
```

#### Mutation 触发之对象展开运算符别名篇
```html
<input type="button" value="increment" @click="add(10)"/>
<script type="text/javascript">
    import {mapMutations} from 'vuex';
    methods: {
        ...mapMutations({
            add: 'increment'
        }),
    }
</script>
```

#### 小结
官方文档说 mutation 必须是同步函数，于个人而言，这个观点不成立。在 mutation 中同步只是为了能用 devtools 追踪状态变化。

当然对于开发者来说，用别人的框架，遵守别人的框架规则最起码是没有问题的。

### getter
getters 可以理解为 vuex 中的 computed，和 vue 中的 computed 类似，都是用来计算 state 然后生成新的数据 ( 状态 ) 的。

在上面的案例当中，如果想得到的 state 最终为一个带了币种的金额，只要给一个统一的出口，返回统一的数据模式。

#### 简单实现
##### store.js
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
    count: 0
}

let getters = {
    total: state => {
        return '$' + state.count;
    }
}

let mutations = {
    increment(_state, n){
        _state.count += n || 1;
    },
    decrement(){
        state.count -= 1;
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations
})

export default store
```

#### getter 通过属性访问
```html
<h3>count-{{$store.getters.total}}</h3>
```

#### getter 通过方法访问
如果上面的方法想改变货币符号，那就要通过传参方式来解决
```js
let getters = {
    total: (state) => (symbol) => {
        return (symbol || '$') + state.count;
    }
}
```
```html
<h3>count-{{$store.getters.total('￥')}}</h3>
```

#### mapGetters 辅助函数
```html
<template>
    <div>
        <h3>count-{{total('￥')}}</h3>
    </div>
</template>

<script>
    import common from '../../common/common.js'
    import {mapState, mapMutations, mapGetters} from 'vuex';
    export default {
        computed: {
            ...mapGetters([
                'total'
            ])
        }
    }
</script>
```

#### mapGetters 辅助函数之别名
```html
<template>
    <div>
        <h3>count-{{amount('￥')}}</h3>
    </div>
</template>

<script>
    import common from '../../common/common.js'
    import {mapState, mapMutations, mapGetters} from 'vuex';
    export default {
        computed: {
            ...mapGetters({
                amount: 'total'
            })
        }
    }
</script>
```

### Action
先引用官方文档的说法

Action 类似于 mutation，不同在于：
- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。

实现上是没问题，action 调用 mutation，但关于异步要放到 action 的说法，个人观点是没有这个必要，在 mutation 的小结中有说到过，mutation 只做同步也不是制性的

在使用 Action 前先与 Mutation 做个小结
- action 并不是必须的，项目中完全可以不需要 action
- 异步操作可放 mutation 和 action，只要开发时方便，都没有影响
- 关于官方说 action 异步，mutation 同步的说法只是为了能用 devtools 追踪状态变化。
- action 中的方法和 mutation 一样，最多只有两个形参，第一个为 context，可以理解为 store，第二个为手动传的参数
- action 用 commit() 来触发 mutation
- view 层通过 store.dispath 来分发 action

#### 简单使用
在 action 
##### store.js
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
    count: 0
}

let getters = {
    total: (state) => (symbol) => {
        return (symbol || '$') + state.count;
    }
}

let mutations = {
    increment(_state, n){
        console.log(arguments)
        _state.count += n || 1;
    },
    decrement(){
        state.count -= 1;
    }
}

let actions = {
    increment(context, n){
        context.commit('increment', n)
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store
```

##### 分发 action
```html
<input type="button" value="increment" @click="$store.dispatch('increment', 5)"/>
```

##### mapActions
和 mutation 的使用方法基本一样
```js
methods: {
    ...mapActions(['increment']),
    ...mapActions({add: 'increment'})
}
```
### module
由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter。

#### store.js
```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
    state: {
        countA: 0
    },
    getters: {
        totalA: (state) => (symbol) => {
            return (symbol || '$') + state.countA
        }
    },
    mutations: {
        incrementA(state, payload){
            state.countA += (payload || 1);
        }
    }
}

const moduleB = {
    state: {
        countB: 0
    },
    getters: {
        totalB: (state) => (symbol) => {
            return (symbol || '$') + state.count
        }
    },
    mutations: {
        incrementB(state, payload){
            state.countB += (payload || 1);
        }
    }
}
const store = new Vuex.Store({
    modules: {
        moduleA,
        moduleB
    }
})

export default store
```

#### component
```html
<input type="button" value="increment" @click="add()"/>
<span>{{countA}}</span>
<script>
    import {mapState, mapMutations, mapActions} from 'vuex';

    export default {
        methods: {
            ...mapMutations(['incrementA']),
            ...mapMutations({add: 'incrementA'})
        },
        computed: {
            ...mapState({
                countA: state => state.moduleA.countA
            })
        }
    }
</script>
```

#### 小结
- 每个模块中的 state、mutation、action、getter 都是独立的作用域
- 不同模块间的 state、getter 的属性存在同级同名的情况下会报错
- mutation、action 等方法同名的话会所有模块一起触
- 解决以上问题，需要给每个模块再做一层作用域分离——命名空间

#### 命名空间
##### store.js
```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
    namespaced: true,
    state: {
        count: 0
    },
    getters: {
        total: (state) => (symbol) => {
            return (symbol || '$') + state.count
        }
    },
    mutations: {
        increment(state, payload){
            state.count += (payload || 1);
        }
    }
}

const moduleB = {
    namespaced: true,
    state: {
        count: 0
    },
    getters: {
        total: (state) => (symbol) => {
            return (symbol || '$') + state.count
        }
    },
    mutations: {
        increment(state, payload){
            state.count += (payload || 1);
        }
    }
}
const store = new Vuex.Store({
    modules: {
        moduleA,
        moduleB
    }
})

export default store
```

##### 带命名空间的绑定函数
```js
methods: {
    ...mapMutations(['moduleA/increment']),
    ...mapMutations({add: 'moduleA/increment'})
},
computed: {
    ...mapState({
        countA: state => state.moduleA.count
    })
}
```
