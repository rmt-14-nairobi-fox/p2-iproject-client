<template>
	<div class="min-h-screen flex mx-auto max-w-screen-md">
		<div class="grid grid-cols-2 gap-8 p-4">
			<FilterResult 
				v-for="data in datas"
				:key="data.id"
				:data="data"
			/>
		</div>
		<div 
		v-if="datas.length === 0"
		class="box-content h-60 w-60 p-4 border-4 mx-auto my-auto">
			<img src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?size=338&ext=jpg">
		</div>
	</div>
</template>

<script>
	import FilterResult from './../components/filterResult.vue';
	export default{
		name : "ShowList",
		components:{
			FilterResult,
		},
		computed : {
			datas(){
				return this.$store.state.pageFilterShowStory
			},
		}
	}
</script>