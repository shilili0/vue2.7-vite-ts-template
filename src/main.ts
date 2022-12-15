import Vue from 'vue'
// import pinia from 'pinia'
import Router from 'vue-router';
import router from './router';
import App from './App.vue'
import store from './stores/counter'

import './assets/main.css'
Vue.use(Router);
// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')
new Vue({
  el: '#app',
  render: (h) => h(App),
  store,
  router
})