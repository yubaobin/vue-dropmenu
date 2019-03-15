<template>
  <div id="app" @click="hide">
    <button class="btn b1" @click.stop="openMenu1">显示菜单</button>
    <button class="btn b2" @click.stop="openMenu2">显示菜单</button>
    <button class="btn b3" @click.stop="openMenu3">显示菜单</button>
    <button class="btn b4" @click.stop="openMenu4">显示菜单</button>
    <drop-menu ref="dropMenu1" :show="show1"target=".b1" bgColor="rgba(0,0,0, .6)" :list="list" @click="clickItem"></drop-menu>
    <drop-menu ref="dropMenu2" :show="show2"target=".b2" activeColor="#e26f6f" :list="list" @click="clickItem"></drop-menu>
    <drop-menu ref="dropMenu3" :show="show3"target=".b3" padding="15px" :list="list" @click="clickItem"></drop-menu>
    <drop-menu ref="dropMenu4" :autoWidth="false" :show="show4"target=".b4" :list="list" @click="clickItem"></drop-menu>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      list: [{ name:'1. 编辑' }, { name:'2. 只显示标题' }, { name:'3. 只显示标题' }]
    }
  },
  methods: {
    clickItem(e, item) {
      console.log(item)
  	},
    openMenu1() {
      this.show1 = !this.show1;
    },
    openMenu2() {
      this.show2 = !this.show2;
    },
    openMenu3() {
      this.show3 = !this.show3;
    },
    openMenu4() {
      this.show4 = !this.show4;
    },
    hide() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
    }
  }
}
</script>

<style>
  html, body, #app {
    position: relative;
    width: 100%;
    height: 100%;
  }
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
