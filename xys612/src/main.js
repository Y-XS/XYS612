import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import vuetify from './plugins/vuetify'

// Vue.use(router)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
