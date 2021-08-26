<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/Home">
          <img
            src="../assets/a533ccbea4c142c89dc630bf7542e648.png"
            alt=""
            width="190"
            height="114"
            class="d-inline-block align-text-top"
          />
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/Home">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                v-if="access_token && access_role.role === 'recruiter'"
              >
                Action
              </a>
              
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/add/project">Add Project</a></li>
                <li><a class="dropdown-item" href="/get/apply">Get Employee</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-if="access_token && access_role.role === 'employee' ">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-if="access_token" @click="onHandleLogout">Log Out</a>
              <a class="nav-link" href="/" v-else>Log In</a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      access_token: localStorage.getItem("token"),
      access_role: JSON.parse(atob(localStorage.getItem('token').split('.')[1]))
    };
  },
  methods: {
    ...mapActions(["logout"]),
    onHandleLogout(e) {
      e.preventDefault();
      this.logout();
    },
  },
};
</script>

