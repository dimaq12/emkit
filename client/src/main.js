import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js' 

Vue.use(VueResource);
Vue.http.options.root = 'http://127.0.0.1:8000/api'
// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.use(VueRouter);
const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
