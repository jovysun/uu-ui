<template>
  <div>
    <button>{{text}}</button>
  </div>
</template>

<script>
  export default {
    name: 'UuButton',
    props: {
      text: {
        type: String,
        required: true,
        default: 'Click'
      }
    }
  }
</script>

<style scoped>

</style>