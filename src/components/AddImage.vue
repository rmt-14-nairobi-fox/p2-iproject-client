<template>
	<div>
		<button @click="openUploadModal">Upload files</button>
	</div>
</template>

<script type="text/javascript">
	export default{
		name: "AddImage",
		methods : {
			openUploadModal(){
				window.cloudinary.openUploadWidget(
					{ 
						cloud_name: 'stories-for-all',
						upload_preset: 'u6noniuq'
					},

					(error, result) => {
						if (!error && result && result.event === "success") {
							console.log('Done uploading..: ', result.info);          
						}else{
							console.log(error)
						}
						})
						.open();
			}
		}
	}
</script>