import axios from 'axios'


const API = axios.create({baseURL : 'http://localhost:5000'})

export const signUp = (authData) => API.post('/user/signup',authData)




