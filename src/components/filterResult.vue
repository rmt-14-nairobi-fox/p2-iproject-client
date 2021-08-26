<template>
	<div class="flex justify-between">
		<div class="box-border h-48 w-40 p-4 border-4 bg-gray-100">
			<img :src="data.cover_image_url">
		</div>
		<div class="w-1/2">
			<p class="text-xl">{{data.title}}</p>
			<p class="text-sm">{{data.sinopsis}} </p>
			<button
			class="
			button
			px-2
			border-b border-yellow-300
			rounded
			text-black
			font-semilight
			text-left
			mt-2
			text-sm
			"
			>
			read more..
		</button>
	</div>
</div>
</template>

<script>
	export default{
		name: "FilterResult",
		props:["data"]
	}
</script>