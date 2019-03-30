<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p><button v-uu-loading="fullscreenLoading" @click="openFullScreen">directive-loading</button></p>
    <p><button @click="openFullScreen2">service-loading</button></p>
    <uu-button :text="text"/>
    <uu-notification content="hello world" btn="关闭" :visible="visible" @close="close" />

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { setTimeout } from 'timers';

export default {
  name: 'app',
  data () {
    return {
      isShow: true,
      text: 'Confirm',
      visible: true,
      fullscreenLoading: false
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    close () {
      this.visible = false
    },
    openFullScreen () {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 3000)
    },
    openFullScreen2 () {
      const loading = this.$loading()
      setTimeout(() => {
        loading.close()
      }, 2000)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
