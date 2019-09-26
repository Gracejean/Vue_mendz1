import Slider from './components/Sidebar'

// Export individual component
export { Slider }

// What should happen if the user installs the library as a plugin
function install (Vue) {
  Vue.component('Sidebar', Slider)
}

export default { install: install }