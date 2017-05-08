<template>
  <transition name="fade">
    <ul class="drop-menu" :class="arrow" v-show="show" :style="cssStyle">
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
      arrow: 'drop-menu-left',
      maxW: 120,
      winW: 0,
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
      this.winW = document.documentElement.offsetWidth;
      const elm = document.querySelector(this.target);
      this.elmTop = elm.offsetTop;
      this.elmLeft = elm.offsetLeft;
      this.elmH = elm.offsetHeight;
      this.elmW = elm.offsetWidth;
    }
  },
  methods: {
  	handleItemClick(e) {
      console.log(e);
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
  	  let result = {};
  	  let top = `${this.elmTop + this.elmH + 8}px`;
  	  let horizontal = {};
      if (this.elmLeft + this.maxW < this.winW) {
        this.arrow = 'drop-menu-left';
      	horizontal = { left: `${this.elmLeft}px`}
      }else {
      	this.arrow = 'drop-menu-right';
        horizontal = { right: `${this.winW - this.elmLeft - this.elmW}px`};
      }
      result.top = top;
      return Object.assign(result, horizontal);
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
  top: 50px;
  position: absolute;
  background-color: #080707;
  border-radius: 10px;
}
.drop-menu:before {
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
.drop-menu-center:before {
  left: 50%;
  transform: translate(-50%, 0);
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