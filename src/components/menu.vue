<template>
  <transition name="fade">
    <ul class="drop-menu" :class="[h, v]" v-show="show" :style="cssStyle">
	  <slot></slot>	
    </ul>
  </transition>
</template>
<script>
import createBodyClickListener from '../body-click-listener'

export default {
  name: 'drop-menu',
  data() {
    return {
      h: 'drop-menu-left',
      v: 'drop-menu-top',
      maxW: 120,
      maxH: 120,
      winW: 0,
      winH: 0,
      elmTop: 0,
      elmLeft: 0,
      elmH: 0,
      elmW: 0,
      w: 0,
      show: false,
      bodyClickListener: createBodyClickListener((e) => {
        if(!this.$el.contains(e.target)) {
          this.show = false;
        }
      }),
    }
  },
  created() {
    this.$on('handleItemClick', this.handleItemClick);
  },
  props: {
    target: {
      type: String,
    }
  },
  watch: {
    show(newValue, oldValue) {
      if(newValue) {
        this.bodyClickListener.start();
      }else {
        this.bodyClickListener.stop();
      }
    }
  },
  mounted() {
    if (!this.target) {
      throw new Error('Please setup the target attr !');
    }else {
      this.winW = window.innerWidth;
      this.winH = window.innerHeight;
      const elm = document.querySelector(this.target);
      if (elm) {
        this.elmTop = elm.offsetTop;
        this.elmLeft = elm.offsetLeft;
        this.elmH = elm.offsetHeight;
        this.elmW = elm.offsetWidth;
      }else {
        throw new Error('target not found!');
      }
    }
  },
  methods: {
  	handleItemClick(child) {
      for (const item of this.$children) {
        item.$data.activeIndex = child.index
      }
  	},
    open(e) {
      this.show = true;
    },
    close(e) {
      this.show = false;
    }
  },
  computed: {
  	cssStyle() {
  	  let top = `${this.elmTop + this.elmH + 8}px`;
      let vertical = {};
  	  let horizontal = {};
      if (this.elmLeft + this.maxW < this.winW) {
        this.h = 'drop-menu-left';
      	horizontal = { left: `${this.elmLeft + (this.elmW / 2 - 20) }px`}
      }else {
      	this.h = 'drop-menu-right';
        horizontal = { right: `${this.winW - this.elmLeft - (this.elmW / 2) - 20 }px`};
      }
      if (this.elmTop + this.elmH + this.maxH < this.winH) {
        this.v = 'drop-menu-top';
        vertical = { top : `${this.elmTop + this.elmH + 8}px`};
      } else {
        this.v = 'drop-menu-down';
        vertical = { bottom : `${this.winH - this.elmTop + 10}px`};
      }
      return Object.assign(horizontal, vertical);
  	},
  },
}
</script>
<style scoped>
ul,li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.drop-menu {
  position: absolute;
  background-color: #080707;
  border-radius: 5px;
}
.drop-menu-top:before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  top: -18px;
  border-color: transparent transparent #080707 transparent;
}
.drop-menu-right:before {
  right: 10px;
}
.drop-menu-left:before {
  left: 10px;
}

.drop-menu-down:after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  bottom: -20px;
  border-color: #080707 transparent transparent transparent;
}
.drop-menu-right:after {
  right: 10px;
}
.drop-menu-left:after {
  left: 10px;
}
.fade-enter-active,
.fade-leave-active,
.fade-transition {
  -webkit-transition: opacity .3s ease;
  transition: opacity .3s ease;
}
.fade-enter,
.fade-leave,
.fade-leave-active {
  opacity: 0;
}
</style>