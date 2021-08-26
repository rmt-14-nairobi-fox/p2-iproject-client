<template>
    <div class="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gray-50
        py-12
        px-4
        sm:px-6
        lg:px-8
    ">
		<div class="max-w-md w-full text-center">

			<h2 class="mb-8 text-4xl font-extrabold text-gray-900">
				Register
			</h2>

			<form @submit.prevent="cusRegister" class="mb-8" action="#">
				<div class="rounded-md shadow-sm">
					<input
						v-model="cusRegisterData.email"
						type="email" 
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
						v-model="cusRegisterData.password"
						type="password" 
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
					font-medium
					rounded-md
					text-black
					bg-blue-400
					hover:bg-blue-500
					focus:outline-none
				">
					Sign up
				</button>

			</form>

			<p class="mb-2">
				Have an account?
                <router-link to="/login" class="font-medium text-blue-600 hover:text-blue-500"> 
                    Sign in 
                </router-link>
			</p>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
    name:'CusRegister',
    data() {
        return {
            cusRegisterData: {
                email: '',
                password: ''
            }
        }
    },
    computed:{
        ...mapState(['isLogin'])
    },
    methods: {
        ...mapActions(['registerAction']),
        async cusRegister() {
            await this.registerAction({
                data: this.cusRegisterData,
                addRoute: ''
            })
            if (this.isLogin) {
                for (const key in this.cusRegisterData) {
                    this.cusRegisterData[key] = ''
                }
                this.$router.push({ name: 'CusHome' })
            }
        }
    }
}
</script>

<style>

</style>