<template>
	<!-- Container -->
	<div class="container mx-auto">
		<div class="flex justify-center px-6 my-12">
			<!-- Row -->
			<div class="w-full xl:w-3/4 lg:w-11/12 flex">
				<!-- Col -->
				<div
					class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
					style="background-image: url('https://res.cloudinary.com/stories-for-all/image/upload/v1630025059/TERANG_xoirv1.jpg')"
				></div>
				<!-- Col -->
				<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
					<h3 class="pt-4 text-2xl text-center">Welcome Back!</h3>
					<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
						<div class="mb-4">
							<label class="block mb-2 text-sm font-bold text-gray-700" for="username">
								Email
							</label>
							<input
								v-model = "loginData.email"
								class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="username"
								type="email"
								placeholder="Email"
							/>
						</div>
						<div class="mb-4">
							<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
								Password
							</label>
							<input
								v-model = "loginData.password"
								class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="password"
								type="password"
								placeholder="*****"
							/>
						</div>
						<div class="mb-6 text-center">
							<button
								@click="login"
								class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
								type="button"
								>
								Sign In
							</button>
						</div>
						<div class="flex mb-4">
							<GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" class="mt-3 rounded-xl mx-auto" />
						</div>
						<div class="text-center">
							<router-link to="/registration"
								class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
								Create an Account!
							</router-link>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import GoogleLogin from 'vue-google-login'
	export default{
		name: "Login",
		components : {
			GoogleLogin
		},
		data(){
			return {
				loginData : {
					email : '',
					password : ''
				},
				params : {
					client_id : "958739728302-hdp3k0kgjbj7fi14q3tka2gjberbqcf3.apps.googleusercontent.com"
				},
				renderParams: {
					width: 150,
					height: 30,
					longtitle: false
				}
			}
		},
		methods : {
			login(){
				this.$store.dispatch("loginUser", this.loginData)
			},
			onSuccess : function(googleUser){
				const id_token = googleUser.getAuthResponse().id_token;
				this.$store.dispatch("gLogin", id_token)
			},

			githubLogin(){
				this.$store.dispatch("oauthGithub")
			}
		}	
	}
</script>

<style>

</style>