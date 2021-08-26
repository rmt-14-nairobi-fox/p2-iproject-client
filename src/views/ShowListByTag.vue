<template>
	<div class="flex mx-auto max-w-screen-md">
		<div class="grid grid-cols-2 gap-8 p-4">
		</div>
			<FilterResult />
	</div>
</template>

<script>
	import FilterResult from './../components/filterResult.vue'
	export default{
		name : "ShowList",
		components:{
			FilterResult
		},
		computed : {
			datas(){
				console.log(this.$store.state.pageFilterShowStory);
				return this.$store.state.pageFilterShowStory
			},
		}
	}
</script>