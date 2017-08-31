<template>
  <div id="app">
  	<transition name="fade">
	  	<div class="loader" v-if="isLoading">
	  		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling">
			    <circle cx="50" cy="50" fill="none" stroke="#5a7fb5" stroke-width="3" r="30" stroke-dasharray="141.37166941154067 49.12388980384689" transform="rotate(182.5 50 50)">
			      <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="2.4s" begin="0s" repeatCount="indefinite"></animateTransform>
			    </circle>
		 	 	</svg>
	  	</div>
  	</transition>
	<header>
		<router-link to="/">Anasayfa</router-link>
		<router-link to="/profile" v-if="userInfo.answer == 'yes'">Profil</router-link>
		<router-link to="/login" v-if="userInfo.answer == 'no'">Login</router-link>
	</header>
    <router-view :userInfo="this.userInfo">
    </router-view>
    <p>{{ $t("message.hello") }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    	isLoading: true,
    	userInfo:{}
    }
  },
  mounted(){
  	this.$store.dispatch('getUserInfo').then(()=>{
  		this.isLoading = false;
  		this.userInfo = this.$store.getters.userInfo;
  		localStorage.setItem("userInfo",JSON.stringify(this.userInfo));
  	})
  }
}
</script>

<style lang="scss">
@import "./assets/styles/style.scss";
.loader{
	left: 0;
	top: 0;
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 9999;
	background: #fff;
	display: flex;
	text-align: center;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	flex: 1;
	transition: 0.2s;
	svg{
		width: 200px;
		margin: 0 auto;
	}
}
header {
	border-bottom: 1px solid #333;
	padding: 5px;
	a{
		display: inline-block;
		margin: 5px;
		transition: 0.2s;
		padding: 20px;
		border: 1px solid #666;
		border-radius: 2px;
		&:hover{
			background: #eee;
		}
	}
}
</style>
