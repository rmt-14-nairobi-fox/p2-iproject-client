<template>
	<div class="antialiased max-w-screen-sm mt-8">
		<div class="flex flex-col space-y-2">
			<div class="space-y-4 w-max">
				<div class="flex">
					<div class="flex-shrink-0 mr-3">
						<img class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" 
						:src="comment.profile_picture" alt="">
					</div>
					<div class="flex-1 border rounded-lg px-4 py-2 leading-relaxed">
						<strong>{{comment.name}}</strong> <span class="text-xs text-gray-400">3:34 PM</span>
						<p class="text-sm">
							{{comment.StoryComment.reaction}}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "Comment",
		props: ["comment"]
	}
</script>