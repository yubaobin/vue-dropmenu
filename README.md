# vue-dropmenu

> vue 弹出菜单

# Demo
Demo [https://yubaobin.github.io/vue-dropmenu](https://yubaobin.github.io/vue-dropmenu)
## 使用

```bash
# 使用npm安装
npm install vue-awsome-dropmenu
```

```javascript
// 引入
import DropMenu from 'vue-dropmenu';
Vue.use(DropMenu);

data() {
  list: [{ name: 1}, { name:2 }]
}
```

```html
<!-- 在template使用 与target同一个父节点 -->
<drop-menu ref="dropMenu" :list="list" target=".sort" class="sortMenu">

</drop-menu>
```

## API

参数 |  #
:---:|:---
target | 指定节点显示菜单，如#target, .target
activeIndex | 默认激活项下标，从0开始
bgColor | 背景色
activeColor | 激活的颜色
size | 文字大小
fontColor | 文字颜色
align | 对其方式: 'center', 'left', 'right'
borderColor | 列表分割线颜色
radius | 圆角
list | 列表数据数组对象, 对象必须有name
show | 显示/隐藏

###方法
先定义ref属性，使用Vue.$refs获得对应的组件


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

