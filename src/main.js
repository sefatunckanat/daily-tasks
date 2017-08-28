import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import routerOptions from './app/router.js'
import storeOptions from './app/store.js'
import '@/assets/styles/global.css'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

const router = new VueRouter(routerOptions);
const store = new Vuex.Store(storeOptions);

router.beforeEach((to, from, next) => {
	var userInfo = JSON.parse(localStorage.getItem("userInfo"));
	if(to.path == "/profile"){
		if(userInfo.loggedin == true)
			next();
		else
			window.location.href = '/'
	}else{
		next();
	}
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
