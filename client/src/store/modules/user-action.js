import axios from 'axios';
import router from '../../router';

const API_URL = `http://localhost:3000/api/v1/user`

const actions = {
    async register(context, payload) {
        // console.log(payload)
        try {
            const response = await axios.post(`${API_URL}/recruiter/register`, payload);

            if (response) {
                localStorage.setItem('token', response.data)
                router.push('/Home')
            }

        } catch (err) {
            console.log(err)
        }

    },

    async login(context, payload) {
        try {
            const response = await axios.post(`${API_URL}/recruiter/login`, payload);
            if (response) {
                localStorage.setItem('token', response.data)
                // console.log(JSON.parse(atob(localStorage.getItem('token').split('.')[1])))
                router.push('/Home')
            }
        } catch (err) {
            console.log(err)
        }
    },


    async logout() {
        try {
            localStorage.removeItem('token')
            router.push('/')
        } catch (err) {
            console.log(err)
        }
    },

    async employeeRegister(context, payload) {
        try {
            const response = await axios.post(`${API_URL}/employee/register`, payload);
    
            if(response) {
                localStorage.setItem('token', response.data)
                // console.log(response)
                router.push('/home')
            }
            
        } catch (err) {
            console.log(err)

        }
    },

    async loginEmployee(context, payload) {
        // console.log(payload);
        try {
            const response = await axios.post(`${API_URL}/employee/login`, payload);
            if (response) {
                localStorage.setItem('token', response.data)
                router.push('/Home')
            }
        } catch (err) {
            console.log(err)
        }
    }
}


export default {
    actions
}