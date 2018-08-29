<template>
<div>
  <title-bar :pageTitle="'Account'" :pageIcon="'user'"></title-bar>
  <account-panel></account-panel>
</div>
</template>

<script>
  import titleBar from '@/components/Title'
  import accountPanel from '@/components/AccountPanel'
  export default {
    name: 'accountPage',
    head () { return { title: 'Account' } },
    components: {
      'title-bar': titleBar,
      'account-panel': accountPanel
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