import { createStore } from 'vuex'
import userAction from './modules/user-action'
import jobsAction from './modules/jobs-action'
import userProjectAction from './modules/user-project-action'
export default createStore({
  modules: {
    userAction,
    jobsAction,
    userProjectAction
  }
})
