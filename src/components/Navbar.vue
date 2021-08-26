  <template>
    <nav class="flex items-center justify-between flex-wrap p-6 border-b-2">
      <div class="flex items-center flex-shrink-0 text-indigo-300 mr-6">
        <router-link to="/"
        ><span class="font-semibold text-xl tracking-tight ml-3"
        >Story 4 All</span
        ></router-link
        >
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
        <div class="pt-2 relative mx-auto text-gray-600 block lg:inline-block lg:mt-0
        text-teal-200">
          <input 
          v-model="search"
          class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="search category/title">
          <button @click="filter" type="submit" class="absolute right-0 top-0 mt-5 mr-4">
            <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
            width="512px" height="512px">
            <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
  </div>
  <div class="grid grid-cols-2 gap-2">
    <div v-if="this.$store.state.isLogin">
      <p
      class="
      inline-block
      text-sm
      px-4
      py-2
      leading-none
      border border-indigo-200
      rounded
      text-indigo-300
      border-white
      hover:border-purple-700 hover:text-teal-500
      "
      >
      <router-link to="addstory">Share Story</router-link>
    </p>
  </div>
  <div v-if="this.$store.state.isLogin">
    <button

    @click="signOut"
    class="
    inline-block
    text-sm
    px-4
    py-2
    leading-none
    border border-indigo-200
    rounded
    text-indigo-300
    border-white
    hover:border-purple-700 hover:text-teal-500
    ">
    Sign Out
  </button>          
</div>
<div>
  <router-link to="/login">
    <button
    v-if="!this.$store.state.isLogin"
    @click="signOut"
    class="
    inline-block
    text-sm
    px-4
    py-2
    leading-none
    border border-indigo-200
    rounded
    text-indigo-300
    border-white
    hover:border-purple-700 hover:text-teal-500
    "
    >Sign In
  </button>   
</router-link>       
</div>
<div>
  <router-link to="/registration">
    <button
    v-if="!this.$store.state.isLogin"
    class="
    inline-block
    text-sm
    px-4
    py-2
    leading-none
    border border-indigo-200
    rounded
    text-indigo-300
    border-white
    hover:border-purple-700 hover:text-teal-500
    "
    >Sign Up
  </button>   
</router-link>       
</div>
</div>
</div>
</nav>
</template>

<script>
  import Swal from 'sweetalert2'
  export default {
    name: "Navbar",
    data(){
      return{
        search : ''
      }
    },
    methods : {
      signOut(){
        Swal.fire({
          title : "Failed to register",
          text : 'You are loged out',
          icon : 'success'
        })
        localStorage.clear()
        this.$store.commit("SET_USER_LOGOUT")
      },

      filter(){
        this.$store.dispatch("searcByTitle", this.search)
      }
    }
  };
</script>