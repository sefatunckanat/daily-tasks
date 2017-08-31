import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import routerOptions from './app/router.js'
import storeOptions from './app/store.js'
import i18nOptions from './app/i18n.js'
import '@/assets/styles/global.css'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueI18n)

Vue.config.productionTip = false

const router = new VueRouter(routerOptions)
const store = new Vuex.Store(storeOptions)
const i18n = new VueI18n(i18nOptions)

router.beforeEach((to, from, next) => {
	var userInfo = JSON.parse(localStorage.getItem("userInfo"))
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
  i18n,
  render: h => h(App),
})
