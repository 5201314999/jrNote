# 前端细节优化积累

## 后台管理系统优化

### 1 写样式时考虑不同屏幕大小的呈现

    多用max-width,min-width / 百分比 /flex

### 2 图片增加合适的预加载图,error 图片

    vue 是使用 vue-lazyload 组件 ，指令使用。

### 3 页面适当增加 loading 提高用户体验

### 4 表格图片

```
.ivu-table .table-img-wrapper {
  width: 80px;
  height: 80px;
  margin:10px 0;
  display: flex;
  align-items: center;
  .table-img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 4px;
    cursor: pointer;
  }
}
```

注意： 图片的百分比是
