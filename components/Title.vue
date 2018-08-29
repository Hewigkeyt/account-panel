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
    padding: 10px 0;
    text-align: center;
  }
  .icon {
    margin-right: 10px;
  }
</style>