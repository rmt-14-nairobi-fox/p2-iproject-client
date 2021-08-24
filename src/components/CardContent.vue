<template>
	<div class="flex flex-col space-y-2">
		<div class="box-content h-64 w-48">
			<img src="https://picsum.photos/300" height="auto" id="cardImg" class="rounded-md shadow-xl">
		</div>
		<div class="text-xl font-bold hover:font-semilight">
			Story Title
		</div>
		<div class="text-sm">
			<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		</div>
		<button class="button px-2 border-b border-yellow-300 rounded text-black font-semilight text-left mt-2 text-sm">
			read more..
		</button>
	</div>
</template>

<script>
	export default{
		name : "CardContent"
	}
</script>