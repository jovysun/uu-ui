import Loading from './loading'
import Button from './button'
import Notification from './notification'

const components = [
  Button,
  Notification
]

const install = (Vue) => {
  components.forEach(component => Vue.component(component.name, component))

  Vue.use(Loading.directive);

  Vue.prototype.$loading = Loading.service;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}