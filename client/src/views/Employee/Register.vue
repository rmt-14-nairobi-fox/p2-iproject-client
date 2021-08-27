<template>
  <div>
    <div
      class="card mb-3 mt-5"
      style="max-width: 900px; margin-left: 350px; height: 424px"
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
            <h5 class="card-title">Register</h5>
            <form style="margin-right: 50px;margin-left: 50px;" @submit.prevent="onRegisterEmployee">
              <div class="mb-3">
                <label for="Username" class="form-label"
                  >Username</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="username1"
                  v-model="registerEmployee.username"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  v-model="registerEmployee.email"
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
                  v-model="registerEmployee.password"
                  required
                />
              </div>
              <button style="font-size:14px" @click.prevent="handleGithub">Continue with github <i class="fa fa-github"></i></button><br>
              <button type="submit" style="margin-top: 8px; margin-bottom: 6px" class="btn btn-primary">Submit</button><br>
              <router-link to="/login/employee"><p>If you already have account, click this link</p></router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SocialMediaAuth from '../../service/auth';
import githubProvider from '../../config/authMethods';

export default {
    data() {
        return {
            registerEmployee: {
                username: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(['employeeRegister']),
        onRegisterEmployee(e) {
            e.preventDefault()
            this.employeeRegister(this.registerEmployee)
        },
        handleGithub() {
            SocialMediaAuth(githubProvider);
        }
    }
}
</script>