<template>
    <div class="text-center mt-5">
        <form style="max-width:500px;margin:auto" @submit.prevent="onSubmitLogin">
            <img class="mt-4 mb-4 ml-5" src="../../assets/a533ccbea4c142c89dc630bf7542e648.png" height="100" width="120" alt="Freelance App Logo">
            <h5>Please Login</h5>
            <label class="sr-only">Email Address</label>
            <input type="email" id="emailAddress" class="form-control" v-model="formLogin.email" required/>
            
            <label class="sr-only">Password</label>
            <input type="password" id="password" class="form-control" v-model="formLogin.password" required/>

            <div class="mt-3 mb-4">
                <button class="btn btn-lg btn-primary btn-block">Login</button>
            </div>

            <a @click.prevent="handleOnClick"><i style="font-size: 3.5rem;" class="fab fa-github"></i></a>
        </form>
        <!-- <github-button href="#" >Follow @ntkme</github-button> -->
    </div>
</template>
<script>
import SocialMediaAuth from '../../service/auth';
import githubProvider from '../../config/authMethods';
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            formLogin: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
         handleOnClick() {
            SocialMediaAuth(githubProvider);
        },
        ...mapActions(['loginEmployee']),
        onSubmitLogin(e) {
            e.preventDefault();
            this.loginEmployee(this.formLogin)
        }
    }
}
</script>
