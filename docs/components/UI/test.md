# 测试使用

<src-DemoCode>
  <example-test></example-test>
  <highlight-code slot="codeText" lang="vue">
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
  </highlight-code>
</src-DemoCode>

<br>

<src-MdInput value="" icon="search" name="title" placeholder="输入标题">标题</src-MdInput>
<br/>
<src-MetaChange descript="vue组件测试使用"></src-MetaChange>
<br/>
<src-MallKi class-name="mallki-text" text="test"/>
<br>
<example-test></example-test>
<br>
<src-Test>
  <input type="text" name="name" autocomplete="off" placeholder="说点什么吧" /> 
</src-Test>

<el-pagination
  small
  layout="prev, pager, next"
  :total="100">
</el-pagination>
