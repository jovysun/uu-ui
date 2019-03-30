import Vue from 'vue'
import LoadingComp from './loading.vue'

const LoadingConstructor = Vue.extend(LoadingComp)

let fullscreenLoading

LoadingConstructor.prototype.close = function () {
  if (this.$el && this.$el.parentNode) {
    this.$el.parentNode.removeChild(this.$el)
  }
  this.$destroy()
  fullscreenLoading = undefined
}

const loading = (options = {}) => {
  if (fullscreenLoading) {
    return fullscreenLoading
  }

  let instance = new LoadingConstructor({
    el: document.createElement('div'),
    data: options
  })
  document.body.append(instance.$el)

  Vue.nextTick(() => {
    instance.visible = true
  })

  fullscreenLoading = instance

  return instance
}

export default loading