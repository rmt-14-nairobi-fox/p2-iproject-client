import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreateStory from "../views/AddStory.vue";
import Writer from "../components/Writer.vue";
import ReadStory from "../components/ReadStory.vue";
import AddImage from "../components/AddImage.vue"
import Login from "../views/Login"
import ShowListByTag from "../views/ShowListByTag.vue"
import Registration from "../views/Registration.vue"
import CreatedStories from "../views/CreatedStories.vue"
import EditStory from "../views/EditStory.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/addstory",
    name: "Addstory",
    component: CreateStory,
  },
  {
    path: "/writer",
    name: "Writer",
    component: Writer,
  },
  {
    path: "/read/:title",
    name: "Read",
    component: ReadStory,
  },
  {
    path: "/addimage",
    name: "AddImage",
    component: AddImage,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, _, next) => {
      if (to.name === "Login" && localStorage.getItem("access_token")) {
        next("/")
      }else{
        next()
      }
    }
  },
  {
    path: "/tag",
    name: "ShowListByTag",
    component: ShowListByTag
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/result",
    name: "Result",
    component: ShowListByTag
  },
  {
    path: "/created",
    name: "CreatedStories",
    component: CreatedStories,
  },
  {
    path: "/editstory",
    name: "EditStory",
    component: EditStory
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
