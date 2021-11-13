import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
