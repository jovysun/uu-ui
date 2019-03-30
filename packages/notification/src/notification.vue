<template>
  <div class="notification" :style="style" v-show="visible">
    <span class="content">{{content}}</span>
    <a class="btn" @click.prevent="handleClose">{{btn}}</a>
  </div>
</template>

<script>
  export default {
    name: 'UuNotification',
    props: {
      content: {
        type: String,
        required: true,
        default: 'this is notice'
      },
      btn: {
        type: String,
        default: 'Close'
      },
      visible: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      style () {
        return {}
      }
    },
    methods: {
      handleClose () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="stylus" scoped>
.notification
  display: inline-flex
  background-color #303030
  color rgba(255, 255, 255, 1)
  align-items center
  padding 20px
  min-width 280px
  box-shadow 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)
  flex-wrap wrap
  transition all .3s
.content
  padding 0
.btn
  color #ff4081
  padding-left 24px
  margin-left auto
  cursor pointer
</style>