<template>
	<tr class="text-left border-b-2 rounded">
		<th class="px-6 py-4 font-light text-sm">{{index + 1}}</th>
		<th class="px-6 py-4 font-light text-sm">{{data.title}}</th>
		<th class="px-6 py-4 font-light text-sm">
			<div class="flex justify-center space-x-3">
				<button @click="editStory(data.id)">Continue Writing <i class="fa fa-edit text-xl" style="color: blue;"></i></button>
				<button @click="deleteStory(data.id)"><i class="fa fa-close text-xl" style="color: red;"></i></button>
			</div>
		</th>
	</tr>
</template>

<script>
	import Swal from 'sweetalert2';
	export default{
		name: "CreatedList",
		props: ["data", "index"],
		methods: {
			deleteStory(id){

				Swal.fire({
				  title: 'Are you sure?',
				  text: "You won't be able to revert this!",
				  icon: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Yes, delete it!'
				}).then((result) => {
				  if (result.isConfirmed) {
					this.$store.dispatch("deleteStory", id)
				    Swal.fire(
				      'Deleted!',
				      'Your file has been deleted.',
				      'success'
				    )
				  }
				})

			},

			editStory(id){
				this.$store.dispatch("editStory", id)
			}
		}
	}
</script>