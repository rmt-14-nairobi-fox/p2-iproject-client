<template>
  <div
    id="nav"
    class="
      flex
      flex-row-reverse
      fixed
      justify-start
      items-center
      h-16
      w-full
      z-50
      px-16
      bg-gray-900
      border-b-2
      border-gray-50
      text-gray-50">
      <div class="flex flex-row-reverse">
        <router-link to="/login">
          <div class="
            mx-1
            px-2
            py-1
            rounded-md
            transition
            duration-200
            hover:bg-gray-50
            hover:text-gray-900"
            v-if="!isLogin"

            :class="currMenu === 'Login' && 'active'"

            @click="changeMenu('Login')">
            <font-awesome-icon icon="sign-in-alt" />
            Login
          </div>
        </router-link>
        <router-link to="/register">
          <div class="
            mx-1
            px-2
            py-1
            rounded-md
            transition
            duration-200
            hover:bg-gray-50
            hover:text-gray-900"
            v-if="!isLogin"

            :class="currMenu === 'Register' && 'active'"

            @click="changeMenu('Register')">
            <font-awesome-icon icon="user-plus" />
            Register
          </div>
        </router-link>
        <router-link to="/">
          <div class="
            mx-1
            px-2
            py-1
            rounded-md
            transition
            duration-200
            hover:bg-gray-50
            hover:text-gray-900"

            :class="currMenu === 'Home' && 'active'"

            @click="changeMenu('Home')">
            <font-awesome-icon icon="home" />
            Home
          </div>
        </router-link>
        <router-link to="/myPetition">
          <div class="
            mx-1
            px-2
            py-1
            rounded-md
            transition
            duration-200
            hover:bg-gray-50
            hover:text-gray-900"
            v-if="isLogin"

            :class="currMenu === 'Petition' && 'active'"

            @click="changeMenu('Petition')">
            <font-awesome-icon icon="file-alt" />
            My Petition
          </div>
        </router-link>
        <GoogleLogin :params="params" :logoutButton="logoutButton" >
          <a
            >
            <div class="
              mx-1
              px-2
              py-1
              cursor-pointer
              rounded-md
              transition
              duration-200
              text-gray-50
              hover:bg-gray-50
              hover:text-red-500"
              v-if="isLogin"

              @click.prevent="logout">
              <font-awesome-icon class="" icon="sign-out-alt" />
              <span
                class="">
                Logout
              </span>
            </div>
          </a>
        </GoogleLogin>
      </div>
      <div
        class="
          flex
          flex-1
          items-center
          text-2xl
          font-medium
          space-x-1
          text-gray-50
          animate-pulse">
        <font-awesome-icon icon="file-signature" />
        <p>H8-sign-on</p>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Navbar',
  computed: {
    ...mapState(['currMenu', 'isLogin'])
  },
  methods: {
    changeMenu (dest) {
      this.$store.commit('SET_CURR_MENU', dest)
    },
    logout () {
      localStorage.clear()
      this.$store.commit('SET_IS_LOGIN', false)
      this.$router.push({
        name: 'Home'
      }).catch(() => {})
    }
  }
}
</script>

<style scoped>
  .active {
    background-color: #F9FAFB;
    color: #111827;
  }
</style>
