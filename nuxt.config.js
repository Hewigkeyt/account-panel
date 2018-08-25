module.exports = {
  css: [
    '@/css/main.css',
  ],
  modules: [
    ['nuxt-fontawesome', {
      component: 'font-awesome',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        }
      ]
    }]
  ]
}