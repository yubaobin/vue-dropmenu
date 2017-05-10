<template>
  <div id="app">
    <drop-menu ref="dropMenu" target=".container">
      <menu-item @click="showTitle" index="1">1. 编辑</menu-item>
      <menu-item @click="showTitle" index="2">2. 只显示标题</menu-item>
      <menu-item @click="showTitle" index="3">3. 只显示标题</menu-item>
    </drop-menu>
    <button @click="showMenu" class="btn container">点击</button>
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
  	showTitle() {
      console.log('点击');
  	}
  }
}
</script>

<style scoped>
.container {
  position: absolute;
  bottom: 0%;
  left: 0%;
  background-color: #000;
}
</style>
