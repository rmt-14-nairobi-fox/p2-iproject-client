import axios from "axios"
// import router from "../../router"

const API_URL = 'http://localhost:3000/api/v1/userproject'

const state = {
    applyJobs: []
}

const getters = {
    allApplyJobs: (state) => state.applyJobs 
}
const actions = {
    async fetchApplyJobs({commit}) {
        const response = await axios.get(`${API_URL}/recruiter/apply`, {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })

        commit('getApplyJobs', response.data)
    },

    async createdApplyJobs(context, id) {
        console.log(JSON.parse(atob(localStorage.getItem('token').split('.')[1])))
        try {
            const response = await axios.post(`${API_URL}/${id}/apply`, {}, {
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            })
            if(response) {
                console.log(response.data)
            }
        } catch (err) {
            console.log(err)   
        }
    },

    async statusJobs({commit}, data) {
        // console.log(data)
        try {
            const { id, status} = data
            console.log('status: ', status)
            const response = await axios.patch(`${API_URL}/${id}/status`, {status}, {
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            })

            // console.log(response.data.id)

            commit('updateApplyJobs', response.data.id)
            // router.push('/Home')
            // console.log(response.data)
        } catch (err) {
            console.log(err)
        }
        // const limit = e.target.value
        // console.log(id, limit)
    }
}

const mutations = {
    getApplyJobs: (state, applyJobs) => state.applyJobs = applyJobs,
    updateApplyJobs: (state, id) => state.applyJobs = state.applyJobs.filter((el) => el.id !== id)
}

export default {
    state,
    getters,
    actions,
    mutations
}