<template>
  <div class="login" style="display: flex;
    flex-direction: row-reverse;
    justify-content: left;
    align-items: flex-start;
    background: url(https://bit.ly/38hMCky);
    width: 100%;
    height: 100vh;
    background-size: 120%;
    ">
        <div style="padding-left: 50px;
        padding-right: 50px;
        ">
            <div class="login-container"
            style="width: 500px;
            padding: 1.5rem;
            background-color: white;">
                <form @submit.prevent="login">
                    <div><h3>Welcome to Fistator!</h3></div>
                    <div class="mb-3">
                        <label for="email-input" class="form-label">Email Address</label>
                        <input v-model="email" type="email" class="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Please Input your email" required>
                    </div>
                    <div class="mb-3">
                        <label for="password-input" class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control" placeholder="Please input your password" id="password-input" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <div class="google">
                    <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
                </div>
                <div>
                    <p>Don't have an account yet? <a @click.prevent="toRegister" href="">Sign Up</a> here</p>
                </div>
                <div>
                    <h4 style="margin-top: 100px;">What is Fistator?</h4>
                    <p style="font-style: italic; color: rgb(143, 143, 143);">"Fistator (Fish Status Simulator) is a simulation web application deignated for fishing purpose with detailed information.  "</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GoogleLogin from "vue-google-login";

export default {
    name: "Login",
    components: {
        GoogleLogin
    },
    data() {
        return {
            email: "",
            password: "",
            params: {
                client_id: "241740990990-6af197k57lj0bb879vvmr1l7k5ccetrp.apps.googleusercontent.com"
            },
            renderParams: {
                width: 250,
                height: 50,
                longtitle: true
            }
        }
    },
    methods: {
        login() {
            this.$store.dispatch("login", {
                email: this.email,
                password: this.password
            })
        },
        toRegister() {
            this.$router.push("/register")
        },
        onSuccess(googleUser) {
            console.log(googleUser);
            console.log(googleUser.getBasicProfile());
            this.$store.dispatch("googleLogin", googleUser)
        },
        onFailure() {
    
        },
    }
}
</script>

<style>
.google {
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 20px 0 20px 0;
}
</style>