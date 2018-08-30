<template>
  <header>
    <h1 class="title"><font-awesome v-if="pageIcon.length" :icon="pageIcon" class="icon"></font-awesome>{{ pageTitle }}</h1>
  </header>
</template>
<script>
export default {
  name: 'titleComponent',
  props: ['pageTitle', 'pageIcon'],
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