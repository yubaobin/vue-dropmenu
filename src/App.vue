<template>
  <div id="app">
    <button class="btn b1" @click="openMenu" data-index="1">显示菜单</button>
    <button class="btn b2" @click="openMenu" data-index="2">显示菜单</button>
    <button class="btn b3" @click="openMenu" data-index="3">显示菜单</button>
    <button class="btn b4" @click="openMenu" data-index="4">显示菜单</button>
    <drop-menu ref="dropMenu1" target=".b1">
      <menu-item @click="showTitle" index="1">1. 编辑</menu-item>
      <menu-item @click="showTitle" index="2">2. 只显示标题</menu-item>
      <menu-item @click="showTitle" index="3">3. 只显示标题</menu-item>
    </drop-menu>
    <drop-menu ref="dropMenu2" target=".b2">
      <menu-item @click="showTitle" index="1">1. 编辑</menu-item>
      <menu-item @click="showTitle" index="2">2. 只显示标题</menu-item>
      <menu-item @click="showTitle" index="3">3. 只显示标题</menu-item>
    </drop-menu>
    <drop-menu ref="dropMenu3" target=".b3">
      <menu-item @click="showTitle" index="1">1. 编辑</menu-item>
      <menu-item @click="showTitle" index="2">2. 只显示标题</menu-item>
      <menu-item @click="showTitle" index="3">3. 只显示标题</menu-item>
    </drop-menu>
    <drop-menu ref="dropMenu4" target=".b4">
      <menu-item @click="showTitle" index="1">1. 编辑</menu-item>
      <menu-item @click="showTitle" index="2">2. 只显示标题</menu-item>
      <menu-item @click="showTitle" index="3">3. 只显示标题</menu-item>
    </drop-menu>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      show: false,
    }	
  },
  methods: {
  	showTitle() {
      console.log('点击');
  	},
    openMenu(e) {
      const index = e.target.dataset.index;
      this.$refs['dropMenu'+index].open();
    }
  }
}
</script>

<style scoped>
.btn {
  border: 1px solid #FFF;
  background: transparent;
  border: 1px solid rgba(181, 181, 181, 0.63);
  position: absolute;
  margin: 20px;
}
.btn:nth-of-type(1) {
  left: 0;
  top: 0;
}
.btn:nth-of-type(2) {
  right: 0;
  top: 0;
}
.btn:nth-of-type(3) {
  left: 0;
  bottom: 0;
}
.btn:nth-of-type(4) {
  right: 0;
  bottom: 0;
}
</style>
