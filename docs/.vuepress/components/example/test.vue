<template>
  <div class="demo-button">
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buttonWrap'
}
</script>

<style lang="scss" scoped>
.demo-button{
  width: 100%;
  text-align: center;
  div {
    margin: 10px 0;
  }
}
</style>