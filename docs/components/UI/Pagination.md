# 分页
## 简介
此组件是基于`element-ui`的`Pagination`组件封装

<src-BackToTop></src-BackToTop>
<src-MetaChange descript="测试使用"></src-MetaChange>

## 使用示例
```html
<!-- 分页 -->
<pg-pagination
  slot="pagination"
  :current-page="pageIndex"
  :page-size="pageSize"
  :total="total"
  @size-change="sizeChange"
  @current-change="currentChange">
</pg-pagination>
```

## 参数
参数 | 类型 | 说明 |默认值 |
---|---|---|---|
`current-page` | `Number`| 当前页  | 1|
`page-size` | `Number` | 一页多少条数据    | 20 |
`total`| `Number` | 总数据条数 | 0 |
`autoScroll`| `Boolean` | 是否自动滚动|true |
`isEditPage`| `Boolean` | 是否编辑页面|false |
`positionData`| `Object` | 侧边栏状态的数据 |见代码 |

其他参数 看 element-UI 框架 Pagination 组件

## 方法
事件 | 说明 |返回值 |
---|---|---|
`size-change` | pageSize 改变时会触发  | 每页条数|
`current-change`  | currentPage 改变时会触发 | 当前页 |