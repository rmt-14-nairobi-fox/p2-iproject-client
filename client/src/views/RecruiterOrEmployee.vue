<template>
  <header>
    <div
      id="firstpage"
      class="p-5 text-center bg-image"
    >
      <div class="mask">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-5">Welcome in Freelance App</h1>
            <h5 class="mb-4">Best website & family friendly for recruiter or employee</h5>
            <MDBBtn
              lg
              tag="a"
              outline="light"
              class="m-2"
              role="button"
              rel="nofollow"
              target="_blank"
              @click="clickRegisterRecruiter"
              >Recruiter</MDBBtn
            >
            <MDBBtn
              lg
              tag="a"
              outline="light"
              class="m-2"
              href="https://mdbootstrap.com/docs/b5/vue/"
              target="_blank"
              role="button"
              @click="clickRegisterEmployee"
              >Employee</MDBBtn
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Background image -->
  </header>
</template>

<style scoped>
#firstpage {
  background: linear-gradient(rgb(43, 142, 235), rgb(195, 217, 241));
  height: 720px;
}
</style>

<script>
export default {
    setup() {
        
    },
    methods: {
        clickRegisterRecruiter() {
            setTimeout(() => {
                this.$router.push({path: '/register/recruiter'})
            }, 2000)  
        },
        clickRegisterEmployee() {
            setTimeout(() => {
                this.$router.push({path: '/register/employee'})
            }, 2000) 
            
        }
    }
}
</script>
