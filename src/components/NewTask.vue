<template>
	<div id="newTask">
		<h1>New Task</h1>
		<TimeRange/>
		<div class="clearfix"></div>
	</div>
</template>

<script>
import TimeRange from "./TimeRange.vue"
export default{
	name: "NewTask",
	components:{
		TimeRange
	}
}
</script>

<style lang="sass">
#newTask
	padding: 20px
	background: #ddd
</style>