import directive from './src/directive'
import service from './src/index'

const install = (Vue) => {
  Vue.use(directive)
  Vue.prototype.$loading = service
}

export default {
  install,
  directive,
  service
}