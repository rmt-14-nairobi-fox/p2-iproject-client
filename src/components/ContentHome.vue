<template>
	<div class="p-6 max-w-screen-xl mx-auto	">
		<div class="grid grid-cols-5 gap-6">
			<CardContent />
			<CardContent />
			<CardContent />
			<CardContent />
			<CardContent />
		</div>
	</div>
</template>

<script>
	import CardContent from '@/components/CardContent'

	export default{
		name : "ContentHome",
		components : {
			CardContent
		}
	}
</script>

<style>
	#cardImg {
		height: 100%;
	}
</style>