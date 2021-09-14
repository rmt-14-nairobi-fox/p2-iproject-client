<template>
  <div>
      <div style="display: flex; align-items:center; justify-content: center;" class="py-5" id="login-page">
        <div class="my-2 w-25 p-3 card">
            <div class="d-flex flex-column align-items-center card-body">
                <h1>Login</h1>
                <form class="row" action="" method="post" >
                    <label class= "my-2 col-4" for="email">Email</label>
                    <input v-model="email" class= "my-2 col-8" type="email" id="login-email">
                    <label class= "my-2 col-4" for="password">Password</label>
                    <input v-model="password" class= "my-2 col-8" type="password" id="login-password">
                    <input @click.prevent="submitLogin" class= "my-2 btn btn-primary col-12" type="button" value="Login" id="submit-login"><br>
                </form>
                <span class="my-2">Don't Have Acount?</span><br>
                <router-link to="/register" class="my-2 btn btn-success col-6" aria-current="page" href="#">Register Here</router-link>
                <span class="my-2">Or Sign In With:</span><br>
                <GoogleLogin :renderParams="renderParams" :params='params' :onSuccess="onSuccess"></GoogleLogin>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Swal from "../apis/swal"
import GoogleLogin from 'vue-google-login';
export default {
    name:"Login",
    data(){
        return {
            email:"",
            password:"",
            params: {
              client_id: "460635044949-njsbh3mjmatueb72coklg8hff6972hk8.apps.googleusercontent.com"
            },
            renderParams: {
                width: 220,
                height: 36,
                longtitle: true
            }
        };
    },
    methods:{
        submitLogin(){
            const payload = {
                email: this.email,
                password : this.password
            }
            this.$store.dispatch("submitLogin",payload)
            .then((data)=>{
                console.log(data);
                Swal.fire({
                    icon:'success',
                    title: `welcome back, ${localStorage.email}`
                })
                this.$router.push('/').catch(()=>{})
            })
            .catch(err=>{
                Swal.fire({
                    icon:'warning',
                    title:err.response.data.message
                })
            })
        },
        onSuccess(googleUser){
            let payload = {
                email : googleUser.Ts.Et,
                id_token : googleUser.Zb.id_token
            }  
            this.$store.dispatch("loginGoogle",payload)
            .then((data)=>{
                console.log(data);
                Swal.fire({
                    icon:'success',
                    title: `welcome back, ${localStorage.email}`
                })
                this.$router.push('/').catch(()=>{})
            })
            .catch(err=>{
                Swal.fire({
                    icon:'warning',
                    title:err.response.data.message
                })
            })
        },
    },
    components:{
      GoogleLogin
    }
}
</script>

<style>

</style>