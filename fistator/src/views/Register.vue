<template>
  <div class="register" style="display: flex;
    flex-direction: row-reverse;
    justify-content: left;
    align-items: flex-start;
    background: url(https://bit.ly/38hMCky);
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
                <form @submit.prevent="register">
                    <div><h3>Register here</h3></div>
                    <div class="mb-3">
                        <label for="email-input" class="form-label">Email Address</label>
                        <input v-model="email" type="email" class="form-control" id="email-input" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">Please Input your email</div>
                    </div>
                    <div class="mb-3">
                        <label for="password-input" class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control" id="password-input">
                    </div>
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
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
    name: "Register",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        register() {
            this.$store.dispatch("register", {
                email: this.email,
                password: this.password
            })
        }
    }
}
</script>

<style>

</style>