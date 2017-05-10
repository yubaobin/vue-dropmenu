# vue-dropmenu

> vue 弹出菜单

## 使用

```bash
# 使用npm安装
npm install vue-dropmenu
```

```javascript
// 引入 
import DropMenu from 'vue-dropmenu';
Vue.use(DropMenu);
```

```html
<!-- 在template使用 -->
<drop-menu ref="dropMenu" target=".sort" class="sortMenu">
  <menu-item index="1">按修改时间排序<icon name="check"></icon></menu-item>
  <menu-item index="2">按名称排序<icon name="check"></icon></menu-item>
  <menu-item index="3">按创建时间排序<icon name="check"></icon></menu-item>
</drop-menu>
```

## API

参数 |  #  
:---:|:---
target | 指定节点显示菜单，如#target, .target
index | menu-item中添加，不添加没有激活效果

###方法
先定义ref属性，使用Vue.$refs获得对应的组件

####open
打开菜单

```javascript
...
methods: {
  open() {
    this.$refs.dropMenu.open()
  }
}
...
```

####close

关闭菜单

```javascript
...
methods: {
  open() {
    this.$refs.dropMenu.close()
  }
}
...
```

###自定义样式
```css
.drop-menu {
  ...
  padding: 10px;
}
..menu-item {
  ...
  padding: 10px;
}
```

