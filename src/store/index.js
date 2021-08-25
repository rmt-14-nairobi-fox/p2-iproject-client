import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teacherClassess: [],
    studentClassess: [],
    classess: [],
    myStudents: [],
    oneStudent: {},
    myScore: {}
  },
  mutations: {
    GET_CLASSES_TEACHER(state, payload) {
      state.teacherClassess = payload
    },
    GET_CLASSES_STUDENT(state, payload) {
      state.studentClassess = payload
    },
    GET_MY_STUDENTS(state, payload) {
      state.myStudents = payload
    },
    GET_ONE_STUDENT(state, payload) {
      state.oneStudent = payload
    },
    GET_MY_SCORE(state, payload) {
      state.myScore = payload
    },
    GET_ALL_CLASS(state, payload) {
      state.classess = payload
    }
  },
  actions: {
    loginTeacher(context, payload) {
      const { email, password } = payload
      axios({
        method: 'post',
        url: 'http://localhost:3000/teachers/login',
        data: {
          email, password
        }
      })
        .then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          localStorage.setItem('role', res.data.role)
          router.push({ name: 'MyClassTeacher' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    loginStudent(context, payload) {
      const { email, password } = payload
      axios({
        method: 'post',
        url: 'http://localhost:3000/students/login',
        data: {
          email, password
        }
      })
        .then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          localStorage.setItem('role', res.data.role)
          router.push({ name: 'MyClassStudent' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    registerTeacher(context, payload) {
      const { email, password, name, phoneNumber } = payload
      axios({
        method: 'post',
        url: 'http://localhost:3000/teachers/register',
        data: {
          email, password, name, phoneNumber
        }
      })
        .then(res => {
          console.log(res.data)
          context.dispatch('loginTeacher', { email, password })
        })
        .catch(err => {
          console.log(err)
        })
    },
    registerStudent(context, payload) {
      const { email, password, name, phoneNumber } = payload
      axios({
        method: 'post',
        url: 'http://localhost:3000/students/register',
        data: {
          email, password, name, phoneNumber
        }
      })
        .then(res => {
          console.log(res.data)
          context.dispatch('loginStudent', { email, password })
        })
        .catch(err => {
          console.log(err)
        })
    },
    getClassTeacher(context) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/teachers/class',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('GET_CLASSES_TEACHER', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getClassStudent(context) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/students/my-class',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('GET_CLASSES_STUDENT', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    myScore(context, payload) {
      const { id } = payload
      axios({
        method: 'get',
        url: `http://localhost:3000/students/my-score/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('GET_MY_SCORE', res.data)
          router.push({
            name: 'MyScore',
            params: {
              idClass: id
            }
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    addClass(context, payload) {
      const { name } = payload
      axios({
        method: 'post',
        url: 'http://localhost:3000/teachers/add-class',
        data: {
          name
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          router.push({
            name: 'MyClassTeacher'
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    getStudentClass(context, payload) {
      const { id } = payload
      axios({
        method: 'get',
        url: `http://localhost:3000/teachers/class/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('GET_MY_STUDENTS', res.data)
          router.push({
            name: 'TeacherClass',
            params: {
              idClass: id
            }
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    getOneStudent(context, payload) {
      const { idClass, idStudent } = payload
      axios({
        method: 'get',
        url: `http://localhost:3000/teachers/${idClass}/${idStudent}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('GET_ONE_STUDENT', res.data)
          router.push({
            name: 'Score',
            params: {
              idClass, idStudent
            }
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateScore(context, payload) {
      const { idClass, idStudent, score1, score2, score3, score4, score5, note } = payload
      axios({
        method: 'put',
        url: `http://localhost:3000/teachers/score/${idClass}/${idStudent}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          score1: Number(score1),
          score2: Number(score2),
          score3: Number(score3),
          score4: Number(score4),
          score5: Number(score5),
          note
        }
      })
        .then(res => {
          console.log(res.data)
          router.push({
            name: 'TeacherClass',
            params: {
              idClass
            }
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAllClass(context) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/students/all-class',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('GET_ALL_CLASS', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }

  },
  modules: {
  }
})
