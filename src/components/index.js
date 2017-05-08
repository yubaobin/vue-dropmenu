import Menu from './menu.vue'
import MenuItem from './menu-item.vue'

const components = [
  Menu,
  MenuItem
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};
export default install
