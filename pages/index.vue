<template>
  <div>
    <title-bar
      :page-title="'Account'"
      :page-icon="'user'"
    />
    <account-panel />
  </div>
</template>

<script>
  import titleBar from '@/components/Title'
  import accountPanel from '@/components/AccountPanel'
  export default {
    name: 'AccountPage',
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