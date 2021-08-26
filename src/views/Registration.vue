<template>
	<div class="bg-grey-lighter min-h-screen flex flex-col">
		<div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
			<div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
				<h1 class="mb-8 text-3xl text-center text-indigo-300 font-bold">Sign up</h1>
				<input 
				v-model="signUpData.name"
				type="text"
				class="block border border-grey-light w-full p-3 rounded mb-4"
				name="fullname"
				placeholder="Full Name" />

				<input 
				v-model="signUpData.email"
				type="text"
				class="block border border-grey-light w-full p-3 rounded mb-4"
				name="email"
				placeholder="Email" />

				<input 
				v-model="signUpData.password"
				type="password"
				class="block border border-grey-light w-full p-3 rounded mb-4"
				name="password"
				placeholder="********" />
				
				<label class="flex justify-center items-center space-x-6">
					<div class="items-center">Date Birth</div>
					<input 
					v-model="signUpData.date_birth"
					type="date" 
					class="form-input">
				</label>

				<div class="flex justify-center space-x-6 mt-4">
					<label class="text-center">Male
						<input 
						v-model="signUpData.gender"
						value="male" 
						type="radio"
						class="form-radio block border border-grey-light w-1 p-2 rounded-full mb-4"
						name="confirm_password"
						placeholder="Confirm Password" />
					</label>

					<label>Female
						<input 
						v-model="signUpData.gender"
						type="radio"
						value="female"
						class="block border border-grey-light w-1 p-2 rounded-full mb-4"
						name="confirm_password"
						placeholder="Confirm Password" />
					</label>
				</div>

			<div class="flex">
				<button @click="signUp" class="mx-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					Sign Up
				</button>
			</div>

			<div class="text-center text-sm text-grey-dark mt-4">
				By signing up, you agree to the 
				<a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
					Terms of Service
				</a> and 
				<a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
					Privacy Policy
				</a>
			</div>
		</div>

		<div class="text-grey-dark mt-6">
			Already have an account? 
			<router-link to="/login" class="no-underline border-b border-blue text-blue">
				Log in
			</router-link>.
		</div>

		<div class="text-grey-dark mt-6 text-center text-sm">
			Directly Sign Up 
			<div class="flex">
				<GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" class="mt-3 rounded-xl mx-auto" />
			</div>
		</div>
	</div>
</div>
</template>

<script type="text/javascript">
	import GoogleLogin from 'vue-google-login'
	export default{
		name : "Registration",
		components:{
			GoogleLogin
		},
		data(){
			return {
				signUpData :{
					name : "",
					email : "",
					password : "",
					gender : "",
					date_birth : ""
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
			genderMale(){
				this.gender = 'male'
			},

			genderFemale(){
				this.gender = 'female'
			},

			signUp(){
				this.$store.dispatch("signUp", this.signUpData)
			},

			onSuccess : function(googleUser){
				const id_token = googleUser.getAuthResponse().id_token;
				this.$store.dispatch("gLogin", id_token)
			}	

		}
	}
</script>