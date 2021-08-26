<template>
	<!-- component -->
	<div class="antialiased max-w-screen-sm mt-8">
		<h3 class="mb-4 text-lg font-semibold text-gray-900">Comments</h3>
		<Comment 
		v-for="comment in comments"
		:key="comment.id"
		:comment="comment"
		/>
	</div>
</template>

<script>
	import Comment from '@/components/Comment';
	export default{
		name:"CommentList",
		components: {
			Comment,
		},
		props: ["story"],
		created(){
			console.log(this.story, '<<<<<,');
		},
		computed : {
			comments() {
				return this.story.UserComment
			}
		}
	}
</script>