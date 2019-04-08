<template>
    
</template>

<script>
export default {
  name: 'MetaChange',
  props: {
    descript: {
      type: String,
      default: 'coyle的博客'
    },
    keyword: {
      type: String,
      default: ''
    }
  },
  mounted() {
    const descriptDom = document.querySelector('meta[name="description"]')
    setTimeout(()=> {
      descriptDom.setAttribute('content', this.descript)
    }, 50)
    
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>
