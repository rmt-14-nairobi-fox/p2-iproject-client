<template>
  <div id="login-employee">
    <div
      class="card mb-3 mt-5"
      style="max-width: 900px; margin-left: 350px; height: 424px; margin-top: 60px"
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="../../assets/947-freelancer.jpg"
            style="height: 420px; width: 550px"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Login</h5>
            <form style="margin-right: 50px;margin-left: 50px;" @submit.prevent="onSubmitLogin">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  v-model="formLogin.email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  v-model="formLogin.password"
                  required
                />
              </div>
              <button style="font-size:14px" @click.prevent="handleOnClick">Continue with github <i class="fa fa-github"></i></button><br>
              <button type="submit" style="margin-top: 10px; margin-bottom: 15px" class="btn btn-primary">Submit</button><br>
              <router-link to="/register/employee"><p>If you doesn't have account, click this link</p></router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
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
