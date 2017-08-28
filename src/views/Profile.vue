<template>
	<h1>Profile</h1>
</template>

<script>
export default{
	name:'Profile',
	props:['userInfo'],
	computed:{
		status:function(){
			return this.userInfo.loggedin;
		}
	},
	mounted(){
		if(!this.status){
			window.location.href = '/';
		}
	}
}
</script>