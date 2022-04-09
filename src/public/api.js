import axios from 'axios'

const api = axios.create({
    baseURL: "https://clashofcode.api.fr/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})
const USER = 'users'

/* USER */
const storeUserToken = (userToken) => localStorage.setItem('token', userToken)
const getUserData = api.get(`${USER}/get`)
//.....