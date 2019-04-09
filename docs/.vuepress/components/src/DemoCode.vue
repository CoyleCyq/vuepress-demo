<template>
  <div class="code">
    <div class="code--demo">
      <div class="code--content">
        <slot></slot>
      </div>
    </div>
    <el-collapse-transition>
      <div v-show="isShow" class="code--segment">
        <slot name="codeText"></slot>
      </div>
    </el-collapse-transition>
    <div v-if="$slots.codeText" class="code--button" @click="handleToggleShow">{{ codeTextBtn }}</div>
  </div>
</template>

<script>
export default {
  name: 'DemoPage',
  data() {
    return {
      isShow: false,
      codeTextBtn: '显示代码'
    }
  },
  mounted() {

  },
  methods: {
    handleToggleShow() {
      this.isShow = !this.isShow
      this.codeTextBtn = this.isShow ? '隐藏代码' : '显示代码'
    }
  }
}
</script>

<style lang="scss" scoped>
.code {
  .code--demo {
    border: 1px solid #ebebeb;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    .code--content {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 4%;
    }
  }
  .code--button {
    border: 1px solid #ebebeb;
    color: #409eff;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    border-radius: 0 0 4px 4px;
    cursor: pointer;
    &:hover {
      font-size: 17px;
    }
  }
  & + .code {
    margin-top: 40px;
  }
  &:not(:first-child) {
    margin-top: 40px;
  }
}
</style>
