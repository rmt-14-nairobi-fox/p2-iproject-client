<template>
  <div class="jumbotron">
    <h1 class="display-4">Hello, Welcome in Freelance App!</h1>
    <p class="lead">
      This app is about, how you got freelance as employee or you can be great hire as recruiter
    </p>
    <hr class="my-4" />
    <p>
        Please select your role employee or recruiter
    </p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button"><router-link to="/register/recruiter">Recruiter</router-link></a>
      <a class="btn btn-primary btn-lg" href="#" role="button"><router-link to="/register/employee">Employee</router-link></a>
    </p>
  </div>
</template>
