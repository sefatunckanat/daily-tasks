<template>
	<div id="timeRange">
		<div 
			class="arrow past" 
			v-bind:class="getArrowClass('past')" 
			v-bind:style="getArrowStyle('past')">
			<div class="triangle"></div>
			<div class="triangle2"></div>
			<div class="tooltip">Past</div>
		</div>
		<div 
			class="arrow future" 
			v-bind:class="getArrowClass('future')" 
			v-bind:style="getArrowStyle('future')">
			<div class="triangle"></div>
			<div class="triangle2"></div>
			<div class="tooltip">Future</div>
		</div>
		<div class="rangeMain">
			<span 
				v-on:click="setTime(time)"  
				v-for="time in timeTexts" 
				v-bind:style="getTimeStyle(time)" 
				v-bind:class="getTimeClass(time)">
				{{ time }}
			</span>
		</div>
		<button v-on:click="allDay">Select All Day</button>
		<p>Selected times : {{timeTexts[past]}} - {{timeTexts[future]}}</p>
	</div>
</template>

<script>
export default{
	name: "TimeRange",
	data(){
		return{
			past: 0,
			future: 1,
			timeTexts:['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
			clickIndex:0
		}
	},
	methods:{
		allDay:function(){
			this.past = 0;
			this.future = this.timeTexts.length-1;
		},
		setTime:function(str){
			if(this.clickIndex%2){
				var backup = this.past;
				this.past = this.timeTexts.indexOf(str)
				if(this.past == this.future || this.past > this.future){
					this.past = backup
				}
			}else{
				var backup = this.future
				this.future = this.timeTexts.indexOf(str)
				if(this.past == this.future || this.future<this.past){
					this.future = backup
				}
			}
			this.clickIndex++;
		},
		getArrowClass:function(str){
			if(this.clickIndex%2){
				if(str == 'past')
					return "active"
			}else{
				if(str == 'future')
					return "active"
			}
			return ""
		},
		getArrowStyle:function(str){
			var currentIndex = str == "past" ? this.past : this.future
			var count = this.timeTexts.length
			var index = this.timeTexts.indexOf(this.timeTexts[currentIndex])
			var position = ((index/count)*100)+"%"
			var marginLeft = (100/(count))/2
			return "left:"+position+";margin-left:calc( "+marginLeft+"% - 15px )";
		},
		getTimeStyle:function(str){
			var count = this.timeTexts.length
			var index = this.timeTexts.indexOf(str)
			var position = ((index/count)*100)+"%"
			var width = (100 / count)
			return "left:"+position+";width:"+width+"%"
		},
		getTimeClass:function(str){
			var active = ""
			if(this.timeTexts.indexOf(str) == this.past || this.timeTexts.indexOf(str) == this.future)
				active = "active"
			return active;
		}
	}
}
</script>

<style lang="sass">
$rangeColor: #6299E2
$rangeArrowWidth: 10px
$rangeHeight: 20px
#timeRange
	padding-top: $rangeHeight
	margin-top: 30px
	position: relative
	.rangeMain
		position: relative
		width: 100%
		height: 20px
		background: $rangeColor
		border-radius: 3px
		position: relative
		overflow: hidden
		span
			position: absolute
			font-size: 12px
			line-height: $rangeHeight
			color: #fff
			height: 100%
			text-align: center
			&:hover
				background: rgba(#000,0.1)
				cursor: pointer
			&.active
				background: darken($rangeColor,20%)
	.arrow
		transition: 0.2s
		position: absolute
		width: 30px
		height: 30px
		background: $rangeColor
		color: $rangeColor
		top: -30px
		text-align: center
		&.active
			background: darken($rangeColor,20%)
			color: darken($rangeColor,20%)
		&:hover .tooltip
			opacity: 1	
			top: -25px
		.tooltip
			color: #fff
			font-size: 12px
			position: absolute
			background: $rangeColor
			padding: 5px
			display: inline-block
			left: 50%
			width: 50px
			margin-left: -25px
			top: -15px
			border-radius: 2px
			opacity: 0
			transition: 0.2s
		.triangle
			top: 100%
			position: absolute
			width: 0
			height: 0
			border-style: solid
			border-width: 10px 15px 0 15px
			border-color: currentColor transparent transparent transparent
		&.past
			border-top-left-radius: 3px
			.triangle2
				position: absolute
				left: 100%
				top: 0
				width: 0
				height: 0
				border-style: solid
				border-width: 15px 0 15px $rangeArrowWidth
				border-color: transparent transparent transparent currentColor
		&.future
			border-top-right-radius: 3px
			.triangle2
				position: absolute
				right: 100%
				top: 0
				width: 0
				height: 0
				border-style: solid
				border-width: 15px $rangeArrowWidth 15px 0
				border-color: transparent currentColor transparent transparent
</style>