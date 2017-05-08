# vue-bottom-nav

> vue 底部导航组件

## 使用

```bash
# 使用npm安装
npm install vue-bottom-nav
```

```javascript
// 引入 
import BottomNav from 'vue-bottom-nav' 
Vue.use(BottomNav)
```

```html
<!-- 在template使用 -->
<bottom-nav active="1">
  <item-nav @click="note" index="1"><p>笔记</p></item-nav>
  <item-nav @click="person" index="2"><p>我的</p></item-nav>
</bottom-nav>
```

## API

参数 |  #  
:---:|:---
active | bottom-nav中添加,确定哪个是激活
index | item-nav中添加，不添加没有激活效果


