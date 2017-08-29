<template>
	<div id='home'>
		<div class='home_wrapper'>
			<h1>Anasayfa</h1>
			<p v-if="userInfo.answer == 'yes'">Hoşgeldin.</p>
			<p v-if="userInfo.answer == 'no'">Giriş yap.</p>
			<h1 class="answer">{{ userInfo.answer }} {{ answerEmoji }}</h1>
			<!--<img v-bind:src="userInfo.image" alt="">-->
			<NewTask/>
		</div>
	</div>
</template>

<script>
import NewTask from "./../components/NewTask.vue"
export default{
	name: 'Home',
	props:['userInfo'],
	components:{
		NewTask
	},
	computed:{
		answerEmoji:function(){
			return this.userInfo.answer == 'yes' ? '😇' : '😡';
		}
	}
}
</script>

<style>
#home{
	padding: 20px;
}
.answer{
	text-transform: uppercase;
}
</style>