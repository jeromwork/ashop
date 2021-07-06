import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios;
new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
