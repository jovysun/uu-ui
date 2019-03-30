import Vue from 'vue'
import App from './App.vue'
import UuUI from '../packages'

Vue.config.productionTip = false

Vue.use(UuUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
