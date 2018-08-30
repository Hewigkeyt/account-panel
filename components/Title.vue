<template>
  <header>
    <h1 class="title">
      <font-awesome
        v-if="pageIcon.length"
        :icon="pageIcon"
        class="icon"
    />{{ pageTitle }}</h1>
  </header>
</template>
<script>
export default {
  name: 'TitleComponent',
  props: {
    pageTitle: {
      type: String,
      default: ''
    },
    pageIcon: {
      type: String,
      default: ''
    }
  },
  data () {
      return {
      }
    },
    methods: {
    }
}
</script>
<style scoped>
  .title {
    padding: 15px 0;
    margin-bottom: 15px;
    text-align: center;
    background: dodgerblue;
    color: #fff;
  }
  .icon {
    margin-right: 10px;
  }
</style>