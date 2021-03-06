<template>
  <transition name="fade">
    <ul class="drop-menu" :class="[h, v]" v-show="show" :style="cssStyle">
      <div class="arrow" :style="{ 'border-color': `${bgColor} ${bgColor} transparent transparent` }"></div>
      <li class="menu-item" v-for="(item, index) in list"
          :style="{ 'border-color': borderColor, 'text-align': align, padding,
           'font-size': `${size}px`, color: changeColor[index], width: `${mw}px`}"
          @click="handleClick($event, item)"> {{ item.name }}
      </li>
    </ul>
  </transition>
</template>
<script>
  export default {
  name: 'drop-menu',
  data() {
    return {
      elm: null,
      h: 'drop-menu-left',
      v: 'drop-menu-top',
      maxW: 120,
      maxH: 120,
      parentW: 0,
      parentH: 0,
      winW: 0,
      winH: 0,
      elmX: 0,
      elmY: 0,
      elmTop: 0,
      elmLeft: 0,
      elmH: 0,
      elmW: 0,
      mw: 0,
      colors: [],
      changeColor: [],
      activeObj: {},
      cssStyle: {}
    }
  },
  created() {
    this.colors = new Array(this.list.length);
    this.colors.fill(this.fontColor);
    this.changeColor = [...this.colors];
    this.changeColor[this.activeIndex] = this.activeColor;
    if(this.width === 0) {
      this.mw = this.getMaxLength(this.list) * this.size;
    }else {
      this.mw = this.width;
      this.maxW = this.width;
    }
  },
  props: {
    target: {
      type: String,
    },
    show: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: null
    },
    bgColor: {
      type: String,
      default: '#080707'
    },
    radius: {
      type: String,
      default: '3px'
    },
    borderColor: {
      type: String,
      default: '#888888'
    },
    align: {
      type: String,
      default: 'left'
    },
    size: {
      type: Number,
      default: 16
    },
    activeColor: {
      type: String,
      default: '#20A0FF'
    },
    fontColor: {
      type: String,
      default: '#E8E8E8'
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    padding: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 0
    }
  },
  watch: {
    activeObj(newValue, oldValue) {
      const index = this.list.findIndex(elem => elem.name === newValue.name);
      this.changeColor = [...this.colors];
      this.changeColor[index] = this.activeColor;
    },
    show(newValue) {
      if (newValue) {
        const elmOffset = this.elm.getBoundingClientRect();
        const winW = document.documentElement.clientWidth;
        const winH = document.documentElement.clientHeight;
        const parent = this.elm.parentNode;
        const parentW = parent.offsetWidth;
        const parentH = parent.offsetHeight;
        const elmX = elmOffset.x | elmOffset.left;
        const elmY = elmOffset.y | elmOffset.top;
        const elmLeft = this.elm.offsetLeft;
        const elmTop = this.elm.offsetTop;
        const elmW = this.elm.clientWidth;
        const elmH = this.elm.clientHeight;

        let top = `${this.elmTop + this.elmH + 8}px`;
        let vertical = {};
        let horizontal = {};
        let normalCss = {};
        if (elmX + this.maxW < winW) {
          this.h = 'drop-menu-left';
          horizontal = { left: `${elmLeft + (elmW / 2 - 10) }px`}
        }else {
          this.h = 'drop-menu-right';
          horizontal = { right: `${parentW - elmLeft - (elmW / 2) - 10 }px`};
        }
        if (elmY + elmH + this.maxH < winH) {
          this.v = 'drop-menu-top';
          vertical = { top : `${elmTop + elmH + 8}px`};
        } else {
          this.v = 'drop-menu-down';
          vertical = { bottom : `${parentH - elmTop + 10}px`};
        }
        normalCss = { 'background-color': this.bgColor, 'border-radius': this.radius }
        this.cssStyle = Object.assign(horizontal, vertical, normalCss);
      }
    }
  },
  mounted() {
    if (!this.target) {
      throw new Error('Please setup the target attr !');
    }else {
      this.elm = document.querySelector(this.target);
      if (!this.elm) {
        throw new Error('target not found!');
      }
    }
  },
  methods: {
  	handleClick(e, obj) {
      this.activeObj = obj;
      this.$emit('click', e, obj);
  	},
    open(e) {
      this.show = true;
    },
    close(e) {
      this.show = false;
    },
    getMaxLength(list) {
  	  let m = 0;
  	  for(const item of list) {
  	    if(item.name.length > m) {
  	      m = item.name.length;
        }
      }
      return (m + 1);
    }
  }
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
}
.drop-menu-top .arrow {
  position: absolute;
  width: 0;
  height: 0;
  border: 3px solid;
  top: -3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
}
.drop-menu-right .arrow {
  right: 10px;
}
.drop-menu-left .arrow {
  left: 10px;
}

.drop-menu-down .arrow {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 3px solid;
  bottom: -3px;
  transform: rotate(-225deg);
  -webkit-transform: rotate(-225deg);
  -moz-transform: rotate(-225deg);
  -ms-transform: rotate(-225deg);
  -o-transform: rotate(-225deg);
}
.drop-menu-right .arrow {
  right: 10px;
}
.drop-menu-left .arrow {
  left: 10px;
}

.menu-item {
  border-bottom: 1px solid ;
}
.menu-item:last-child {
  border-bottom: none;
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
