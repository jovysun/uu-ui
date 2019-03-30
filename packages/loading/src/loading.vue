<template>
    <div class="uu-loading" v-show="visible">
        <img src="./loading.gif" alt="加载中。。。">
    </div>
</template>

<script>
    export default {
      name: 'UuLoading',
      data () {
        return {
          visible: false
        }

      }
    }
</script>

<style scoped>
.uu-loading{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, .6);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>