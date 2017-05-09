<template>
  <div id="app">
    <drop-menu ref="dropMenu" target=".container">
      <menu-item @click="itemClick" index="1">1. 编辑</menu-item>
      <menu-item @click="itemClick" index="2">2. 只显示标题</menu-item>
    </drop-menu>
    <button @click="showMenu" class="btn">点击</button>
    <div class="container"></div>
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
  	showMenu() {
  	  this.$refs.dropMenu.open();
  	},
  	itemClick(e) {
      console.log('点击');
  	}
  }
}
</script>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 10%;
  width: 100px;
  height: 100px;
  background-color: #000;
}
</style>
