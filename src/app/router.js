import Home from './../views/Home.vue'
import Profile from './../views/Profile.vue'

const routes = [
  { 
  	path: '/',
  	name: 'Home',
  	component: Home
  },
  {
  	path: '/profile',
  	name: 'Profile',
  	component: Profile
  },
  {
  	path: '/login',
  	name: 'Profile',
  	component: Home
  }
]

export default{
	mode:'history',
  routes
};