<template>
  <div class="login" style="display: flex;
    flex-direction: row-reverse;
    justify-content: left;
    align-items: flex-start;
    background: url(https://bit.ly/3Dq55tw);
    width: 100%;
    height: 100vh;
    background-size: 100%;
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
                        <input v-model="email" type="email" class="form-control" id="email-input" aria-describedby="emailHelp" required>
                        <div id="emailHelp" class="form-text">Please Input your email</div>
                    </div>
                    <div class="mb-3">
                        <label for="password-input" class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control" id="password-input" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <div>
                    <p>Don't have an account yet? <a @click.prevent="toRegister" href="">Sign Up</a> here</p>
                </div>
                <div>
                    <h4 style="margin-top: 100px;">What is Fistator?</h4>
                    <p style="font-style: italic; color: rgb(143, 143, 143);">"Fistator is blablablablabla "</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: ""
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
            
        }
    }
}
</script>

<style>

</style>