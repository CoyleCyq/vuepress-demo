<template>
    
</template>

<script>
export default {
  name: 'MetaChange',
  props: {
    descript: {
      type: String,
      default: 'javascript, vue, node, linux, vuepress'
    }
  },
  mounted() {
    const descriptDom = document.querySelector('meta[name="description"]')
    const pageInfo = this.$page
    let description = ''
    if (pageInfo.headers) {
      let descriptArr = []
      for (let value of pageInfo.headers) {
        descriptArr.push(value.title)
      }
      description = descriptArr.join(',')
    } else if (pageInfo.title) {
      description = pageInfo.title
    } else {
      description = ''
    }
    console.log(description)
    setTimeout(()=> {
      descriptDom.setAttribute('content', this.descript + ', ' + description)
    }, 1000)
    
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>
