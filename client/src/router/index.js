import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import RecruiterOrEmployee from '../views/RecruiterOrEmployee.vue';
import RegisterEmployee from '../views/Employee/Register.vue';
import RegisterRecruiter from '../views/Recruiter/Register.vue';
import LoginEmployee from '../views/Employee/Login.vue';
import LoginRecruiter from '../views/Recruiter/Login.vue';
import DetailProject from '../views/DetailProject.vue';
import AddProject from '../views/Recruiter/AddProject.vue';
import AddPosition from '../views/Recruiter/AddPosition.vue';
import GetApply from '../views/Recruiter/GetApply.vue';
import ChatRooms from '../views/Action/ChatRooms.vue'

const routes = [
  {
    path: '/',
    name: 'RecruiterorEmployee',
    component: RecruiterOrEmployee
  },
  {
    path: '/Home',
    name: 'HomePage',
    component: Home,
    props: true
  },
  {
    path: '/register/employee',
    name: 'RegisterEmployee',
    component: RegisterEmployee
  },
  {
    path: '/register/recruiter',
    name: 'RegisterRecruiter',
    component: RegisterRecruiter
  },
  {
    path: '/login/employee',
    name: 'LoginEmployee',
    component: LoginEmployee
  },
  {
    path: '/login/recruiter',
    name: 'LoginRecruiter',
    component: LoginRecruiter
  },
  {
    path: '/detail/:id',
    name: 'DetailPage',
    component: DetailProject,
    props: true
  },
  {
    path: '/add/project',
    name: 'AddProject',
    component: AddProject
  },
  {
    path: '/add/position',
    name: 'AddPosition',
    component: AddPosition,
    props: true
  },
  {
    path: '/get/apply',
    name: 'GetApply',
    component: GetApply,
    props: true
  },
  {
    path: '/chatrooms',
    name: 'ChatRooms',
    component: ChatRooms,
    props: true
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
