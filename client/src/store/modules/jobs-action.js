import axios from 'axios'
import router from '../../router'
// import router from '../../router'

const API_URL = `http://localhost:3000/api/v1/project`
const state = {
    jobs: []
}

const getters = {
    allJobs: (state) => state.jobs,
    jobsById: (state, id) => state.jobs.find((el) => {
        return el.id === id
    })
}

const actions = {
    async fetchJobs({ commit }) {
        const response = await axios.get(API_URL, {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
        console.log(response.data)
        commit('setJobs', response.data)
    },

    async addProject(context, payload) {
        try {
            // console.log(payload.name)
            const formData = new FormData();

            formData.append('name', payload.name);
            formData.append('description', payload.description);
            formData.append('imageURL', payload.image);
            formData.append('dueDate', payload.dueDate);
            formData.append('position', payload.position);
            formData.append('jobDesc', payload.jobDesc);

            const response = await axios.post(`${API_URL}/create`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization": localStorage.getItem('token')
                }
            });

            if(response) {
                console.log(response.data);
                router.push('/Home')
            }

        } catch (err) {
            console.log(err)
        }
    },

    async getProjectById({commit}, id) {
        // console.log(id)
        const response = await axios.get(`${API_URL}/${id}`, {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
        commit('getJobs', response.data)
    },

    async searchJobs(context, e) {
        const limit = e.target.value

        const response = await axios.get(`${API_URL}?name=${limit}`, {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })

        console.log(limit)
        console.log(response.data)
        // context.commit('setJobs', response.data.rows)
    }
}

const mutations = {
    setJobs: (state, jobs) => state.jobs = jobs,
    getJobs: (state, id) => state.jobs.filter((el) => el.id === id)
}

export default {
    state,
    getters,
    actions,
    mutations

}
