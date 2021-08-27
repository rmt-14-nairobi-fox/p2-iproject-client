<template>
	<div class="flex items-center justify-center mx-8 mb-4 max-w-sm">
		<form @submit.prevent="addComment" class="w-full bg-white rounded-lg px-4 pt-2">
			<div class="flex flex-wrap mb-6">
				<div class="w-full px-3 mb-2 mt-2">
					<textarea 
					v-model="reaction"
					class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required></textarea>
				</div>
				<div class="w-full flex items-start md:w-full px-3">
					<div class="-mr-1">
						<input type='submit' class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Comment'>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	import Swal from 'sweetalert2';
	export default{
		name : "AddComment",
		data(){
			return{
				reaction : ""
			}
		},
		props : ["story"],
		methods : {
			addComment(){
				Swal.fire({
					text : "You may comment 1 time",
					icon : 'info'
				})			      
				this.$store.dispatch("AddCommentPost", {reaction:this.reaction, id:this.story.id})
				this.reaction = ''
			}
		}
	}
</script>