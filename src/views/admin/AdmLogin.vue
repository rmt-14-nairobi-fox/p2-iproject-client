<template>
    <div class="
		min-h-screen
		flex
		items-center
		justify-center
		py-12
		px-4
		sm:px-6
		lg:px-8
	">
		<div class="max-w-md w-full text-center">

			<h2 class="mb-8 text-4xl font-extrabold text-gray-900">
				Admin Log In
			</h2>

			<form @submit.prevent="admLogin" class="mb-3" action="#">
				<div class="rounded-md shadow-sm">
					<input
                        v-model="admLoginData.email"
                        type="email" 
                        name="email" 
                        autocomplete="email" 
                        class="
                            appearance-none
                            relative
                            block
                            w-full
                            px-3
                            py-2
                            placeholder-gray-500
                            text-gray-900
                            rounded-md
                            focus:outline-none
                            focus:z-10
                        " 
                        placeholder="Email address" 
                    />
				</div>

				<div class="mt-2 rounded-md shadow-sm">
					<input 
                        v-model="admLoginData.password"
                        type="password" 
                        name="password" 
                        autocomplete="password" 
                        class="
                            appearance-none
                            relative
                            block
                            w-full
                            px-3
                            py-2
                            placeholder-gray-500
                            text-gray-900
                            rounded-md
                            focus:outline-none
                            focus:z-10
                            
                        " 
                        placeholder="Password" 
                    />
				</div>

				<button type="submit" class="
					mt-4
					group
					relative
					w-full
					flex
					justify-center
					py-2
					px-4
					border border-transparent
					text-lg
					rounded-md
					text-black
					bg-blue-400
					hover:bg-blue-500
					focus:outline-none
                    font-black
				">
					Sign in
				</button>

			</form>

			<p class="mb-3 text-center text-sm text-gray-600">Or</p>

            <!-- <div class="flex justify-center mb-8">
                <GoogleLogin 
                    :params="params" 
                    :renderParams="renderParams" 
                    :onSuccess="onSuccess" 
                >
                </GoogleLogin>
            </div> -->

			<p class="mb-2">
				Don't have an account?
                <router-link to="/admin/register" class="font-medium text-blue-600 hover:text-blue-500">
                    Sign up
                </router-link>
			</p>
		</div>
	</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    name: 'AdmLogin',
    data() {
        return {
            admLoginData:{
                email: '',
                password:''
            }
        }
    },
    computed:{
        ...mapState(['isLogin'])
    },
    methods: {
        ...mapActions(['loginAction']),
        async admLogin() {
            await this.loginAction({
                data: this.admLoginData,
                addRoute: '/admin'
            })
            if (this.isLogin) {
                for (const key in this.admLoginData) {
                    this.admLoginData[key] = ''
                }
                this.$router.push({ name: 'AdmHome' })
            }
        }
    }
}
</script>

<style>

</style>