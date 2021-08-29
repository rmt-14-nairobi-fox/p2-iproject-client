<template>
  <div class="sidebar h-screen">
    <div class="login-profile pb-3">
      <a
        v-if="this.$store.state.isLogin"
        href="#"
        class="flex justify-between md:inline-flex p-4 items-center space-x-2"
      >
        <img
          class="rounded"
          :src="this.$store.state.dataLogin.imgUser"
          alt=""
          srcset=""
          style="width: 80px"
        />
      </a>
      <p class="pt-5" v-if="!this.$store.state.isLogin">
        <span> Wellcome Guest!</span>
      </p>
      <router-link to="/login" active-class="active" tag="button" exact>
        <div v-if="!this.$store.state.isLogin" class="link-container underline">
          Login here!
        </div>
      </router-link>
      <p class="text-sm" v-if="this.$store.state.isLogin">
        Wellcome
        <span class="font-bold text-sm">{{
          this.$store.state.dataLogin.username
        }}</span>
      </p>
      <p v-if="this.$store.state.isLogin">
        <span class="text-blue-500 text-sm">{{
          this.$store.state.dataLogin.email
        }}</span>
      </p>
      <p class="text-sm" v-if="this.$store.state.isLogin">
        <span>{{ this.$store.state.dataLogin.address }}</span>
      </p>
    </div>
    <div class="menu-items">
      <router-link
        to="/"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">Home</div>
      </router-link>
      <router-link
        to="/services"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">Services</div>
      </router-link>

      <router-link
        to="/cart"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">
          Cart
          <span
            class="
              absolute
              inline-flex
              items-center
              justify-center
              ml-1
              px-2
              py-1
              mr-1
              text-xs
              font-bold
              leading-none
              text-blue-100
              bg-blue-600
              rounded-full
            "
          >
            {{ this.$store.state.cartData.length }}
          </span>
        </div>
      </router-link>
      <router-link
        to="/orders"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">Order List</div>
      </router-link>
      <a
        v-if="this.$store.state.isLogin"
        @click.prevent="logoutHandler"
        href="#"
        class="side-btn"
      >
        <GoogleLogin :params="params" :logoutButton="true">Logout</GoogleLogin>
      </a>
    </div>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";

export default {
  name: "Sidebar",
  components: {
    GoogleLogin,
  },
  data() {
    return {
      params: {
        client_id:
          "483465974444-51nimbi8e3oj1hk5o326uh2ambcr9lpr.apps.googleusercontent.com",
      },
      renderParams: {
        width: 300,
        height: 50,
        longtitle: true,
      },
    };
  },
  methods: {
    seeProvider(service) {
      this.$store.dispatch("fetchProvider", service);
      this.$router.push(`/products/${service}`);
    },
    logoutHandler() {
      try {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, logout now!",
        }).then((result) => {
          if (result.isConfirmed) {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {});
            this.$store.commit("LOGIN_STATUS", false);
            localStorage.clear();
            this.$router.push({ name: "Login" });
            setTimeout(() => {
              this.$toast.open({
                message: "Logout succes",
                type: "success",
                position: "top",
              });
            }, this.timeOut + 1000);
          }
        });
      } catch (error) {
        setTimeout(() => {
          this.$toast.open({
            message: "Invernal Server Error",
            type: "error",
            position: "top",
          });
          this.$router.push({ name: "Home" });
        }, this.timeOut);
      }
    },
  },
};
</script>

<style scoped>
.login-profile {
  color: white;
}
.title {
  color: white;
  font-size: 24px;
  margin-top: 10px;
}
.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 6px;
}
.menu-items > * {
  margin-top: 10px;
}
.side-btn {
  border: none;
  padding: 16px 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: transparent;
}
.side-btn:focus {
  outline: none;
}
.side-btn.active {
  position: relative;
  background-color: white;
  color: rgb(128, 0, 60);
  font-weight: 600;
  margin-left: 10px;
  border-radius: 30px 0 0 30px;
}
.side-btn.active::before {
  top: -30px;
}
.side-btn.active::after {
  bottom: -30px;
}
.side-btn.active::before,
.side-btn.active::after {
  position: absolute;
  content: "";
  right: 0;
  height: 30px;
  width: 30px;
  background-color: white;
}
.side-btn.active .link-container::before {
  top: -60px;
}
.side-btn.active .link-container::after {
  bottom: -60px;
  z-index: 99;
}
.side-btn.active .link-container::before,
.side-btn.active .link-container::after {
  position: absolute;
  content: "";
  right: 0px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: rgb(128, 0, 60);
}
</style>
