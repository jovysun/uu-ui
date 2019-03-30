import Vue from 'vue'
import Loading from './loading.vue'

const LoadingConstructor = Vue.extend(Loading)

const loadingDirective = {}
loadingDirective.install = Vue => {

  const toggleLoading = (el, binding) => {
    if (binding.value) {
      document.body.appendChild(el.loadingInstance.$el)
      el.loadingInstance.visible = true
    } else {
      el.loadingInstance.visible = false
    }
  }

  Vue.directive('uu-loading', {
    bind (el, binding) {
      const loadingInstance = new LoadingConstructor({
        el: document.createElement('div'),
        data: {}
      })
      el.loadingInstance = loadingInstance

      binding.value && toggleLoading(el, binding)
    },
    update (el, binding) {
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding)
      }
    },
    unbind (el) {
      el.loadingInstance && el.loadingInstance.$destroy()
    }
  })
}

export default loadingDirective