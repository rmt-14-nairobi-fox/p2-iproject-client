<template>
	<div class="min-h-screen max-w-screen-md mx-auto bg-indigo-75 rounded-xl shadow-xl p-4">
		<table class="w-full" style="overflow-y: auto; ;">
			<thead>
				<tr class="sticky top-0 text-left border-b-2">
					<th>No</th>
					<th>Title</th>
					<th class="text-center">Action</th>
				</tr>
			</thead>
			<tbody>
				<CreatedList 
				class = "rounded-md"
				v-for="(data, index) in datas" 
				:key="data.id" 
				:data="data"
				:index="index" 
				/>
			</tbody>
		</table>
	</div>
</template>

<script>

	import CreatedList from '../components/CreatedList.vue';
	export default{
		name : "CreatedStories",
		components : {
			CreatedList,
		},
		computed: {
			datas(){
				return this.$store.state.userCreations.rows
			}
		}
	}
</script>