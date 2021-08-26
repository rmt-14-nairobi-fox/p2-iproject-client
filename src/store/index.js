import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teacherClassess: [],
    studentClassess: [],
    classess: [],
    waitingClassess: [],
    waitingStudents: [],
    myStudents: [],
    oneStudent: {},
    myScore: {},
    idClass: ''
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
    },
    GET_ALL_CLASS_WAITING(state, payload) {
      state.waitingClassess = payload
    },
    GET_ID_CLASS(state, payload) {
      state.idClass = payload
    },
    GET_WAITING_STUDENT(state, payload) {
      state.waitingStudents = payload
    }
  },
  actions: {
    loginTeacher(context, payload) {
      const { email, password } = payload
      axios({
        method: 'post',
        url: 'https://rapoot-backend.herokuapp.com/teachers/login',
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
          console.log(err.response)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.name,
          })
        })
    },
    loginStudent(context, payload) {
      const { email, password } = payload
      axios({
        method: 'post',
        url: 'https://rapoot-backend.herokuapp.com/students/login',
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
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.name,
          })
        })
    },
    registerTeacher(context, payload) {
      const { email, password, name, phoneNumber } = payload
      axios({
        method: 'post',
        url: 'https://rapoot-backend.herokuapp.com/teachers/register',
        data: {
          email, password, name, phoneNumber
        }
      })
        .then(res => {
          console.log(res.data)
          context.dispatch('loginTeacher', { email, password })
        })
        .catch(err => {
          console.log(err.response.data)
          if (err.response.data.message) {
            Swal.fire({
              icon: 'question',
              title: 'Email Format',
              text: err.response.data.message,
            })
          }
        })
    },
    registerStudent(context, payload) {
      const { email, password, name, phoneNumber } = payload
      axios({
        method: 'post',
        url: 'https://rapoot-backend.herokuapp.com/students/register',
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
        url: 'https://rapoot-backend.herokuapp.com/teachers/class',
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
        url: 'https://rapoot-backend.herokuapp.com/students/my-class',
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
        url: `https://rapoot-backend.herokuapp.com/students/my-score/${id}`,
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
        url: 'https://rapoot-backend.herokuapp.com/teachers/add-class',
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
        url: `https://rapoot-backend.herokuapp.com/teachers/class/${id}`,
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
        url: `https://rapoot-backend.herokuapp.com/teachers/${idClass}/${idStudent}`,
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
    studentWaiting(context, payload) {
      const { id } = payload
      axios({
        method: 'get',
        url: `https://rapoot-backend.herokuapp.com/teachers/class/waiting/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('GET_WAITING_STUDENT', res.data)
          router.push({
            name: 'WaitingClass',
            params: {
              idClass: id
            }
          })
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    updateScore(context, payload) {
      const { idClass, idStudent, score1, score2, score3, score4, score5, note } = payload
      axios({
        method: 'put',
        url: `https://rapoot-backend.herokuapp.com/teachers/score/${idClass}/${idStudent}`,
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
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAllClass(context) {
      axios({
        method: 'get',
        url: 'https://rapoot-backend.herokuapp.com/students/all-class',
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
    },
    getClassWaiting(context) {
      axios({
        method: 'get',
        url: 'https://rapoot-backend.herokuapp.com/students/waiting-class',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('GET_ALL_CLASS_WAITING', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    joinClass(context, payload) {
      const { id } = payload
      axios({
        method: 'post',
        url: `https://rapoot-backend.herokuapp.com/students/join-class/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data.message)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    accept(context, payload) {
      const { idClass, idStudent } = payload
      axios({
        method: 'patch',
        url: `https://rapoot-backend.herokuapp.com/teachers/accept/${idClass}/${idStudent}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          context.dispatch('studentWaiting', { id: idClass })
        })
        .catch(err => {
          console.log(err)
        })
    },
    reject(context, payload) {
      const { idClass, idStudent } = payload
      axios({
        method: 'patch',
        url: `https://rapoot-backend.herokuapp.com/teachers/reject/${idClass}/${idStudent}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          context.dispatch('studentWaiting', { id: idClass })
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteStudent(context, payload) {
      const { idClass, idStudent } = payload
      axios({
        method: 'delete',
        url: `https://rapoot-backend.herokuapp.com/teachers/delete/${idClass}/${idStudent}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          context.dispatch('getStudentClass', { id: idClass })
        })
        .catch(err => {
          console.log(err)
        })
    },
    addAgenda(context, payload) {
      const { summary, description, startEvent, endEvent } = payload
      axios({
        method: 'post',
        url: 'https://rapoot-backend.herokuapp.com/teachers/calender',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          summary, description, startEvent, endEvent
        }
      })
        .then(res => {
          router.push({
            name: 'MyClassTeacher'
          })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          console.log(err)
        })
    }

  },
  modules: {
  }
})
