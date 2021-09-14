<template>
  <div>
      <div style="display: flex; align-items:center; justify-content: center;" id="register-page">
        <div class="p-3 my-5 w-50 card">
            <div class="d-flex flex-column align-items-center card-body">
                <h1 class="my-2">Register Your Account</h1>
                <form class="row">
                    <label class= "my-2 col-4" for="username">Username</label>
                    <input v-model="username" class= "my-2 col-8" type="text" id="register-username">
                    <label class= "my-2 col-4" for="email">Email</label>
                    <input v-model="email" class= "my-2 col-8" type="email" id="register-email">
                    <label class= "my-2 col-4" for="password">Password</label>
                    <input v-model="password" class= "my-2 col-8" type="password" id="register-password">
                    <label class= "my-2 col-4" for="phoneNumber">Phone Number</label>
                    <input v-model="phoneNumber" class= "my-2 col-8" type="text" id="register-phoneNumber">
                    <input @click.prevent="submitRegister" class= "my-2 btn btn-primary col-12" type="button" value="Register" id="submit-register"><br>
                </form>
                <span class="my-3">Have Acount?</span><br>
                <router-link to="/login" class="my-2 btn btn-success col-6" aria-current="page" href="#">Login here</router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Swal from "../apis/swal"
export default {
    name:"Register",
    data(){
        return {
            username:"",
            email:"",
            password:"",
            phoneNumber:"",
        };
    },
    methods:{
      submitRegister(){
        const payload = {
            username: this.username,
            email: this.email,
            password : this.password,
            phoneNumber : this.phoneNumber,
        }
        this.$store.dispatch("submitRegister",payload)
        .then((data)=>{
            console.log(data);
            Swal.fire({
                icon:'success',
                title: `Your account success create, ${data.email}`
            })
            this.$router.push('/login').catch(()=>{})
        })
        .catch(err=>{
            Swal.fire({
                icon:'warning',
                title:err.response.data.message
            })
        })
    }
  }
}
</script>

<style>

</style>