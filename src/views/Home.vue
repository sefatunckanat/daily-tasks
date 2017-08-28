<template>
	<div id='home'>
		<div class='home_wrapper'>
			<h1>Anasayfa</h1>
			<p v-if="userInfo.loggedin">Hoşgeldin. {{ userInfo.name }}</p>
			<p v-if="!userInfo.loggedin">Giriş yap.</p>
			<p>Loggedin : {{ userInfo.loggedin }}</p>
		</div>
	</div>
</template>

<script>
export default{
	name: 'Home',
	props:['userInfo']
}
</script>

<style>
#home{
	padding: 20px;
}
</style>