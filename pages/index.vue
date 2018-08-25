<template>
<test></test>
</template>

<script>
  import test from '@/components/Test'
  export default {
    name: 'helloindex',
    head () { return { title: '' } },
    components: {
      'test': test
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
</style>