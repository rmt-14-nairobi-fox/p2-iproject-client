import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreateStory from "../views/AddStory.vue";
import Writer from "../components/Writer.vue";
import ReadStory from "../components/ReadStory.vue";
import AddImage from "../components/AddImage.vue"

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
    path: "/read",
    name: "Read",
    component: ReadStory,
  },{
    path: "/addimage",
    name: "AddImage",
    component: AddImage,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
