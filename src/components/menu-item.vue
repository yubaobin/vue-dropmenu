<template>
<li class="menu-item" :class="{ active: active }" @click="handleClick">
  <slot></slot>
</li>
</template>
<script>
export default {
  name: 'menu-item',
  data() {
  	return {
      activeIndex: 0,
   }
  },
  props: {
    index: {
      type: String,
      defalut: -1,
    }
  },
  methods: {
    handleClick(e) {
      this.$parent.$emit('handleItemClick', this);
      this.$parent.close();
      this.$emit('click', e);
    }
  },
  computed: {
    active() {
      return this.activeIndex === this.index;
    }
  }
}
</script>
<style scoped>
.menu-item {
  font-size: 16px;
  color: #E8E8E8;
  padding: 6px 15px 6px 6px;
  border-bottom: 1px solid #888888;
}
.menu-item.active {
  color: #20A0FF;
}
.menu-item:last-child {
  border-bottom: none;
}
html[data-dpr='2'] .menu-item {
  font-size: 32px;
  padding: 12px 30px 12px 12px;
}
html[data-dpr='3'] .menu-item {
  font-size: 48px;
  padding: 18px 45px 18px 18px;
}
</style>