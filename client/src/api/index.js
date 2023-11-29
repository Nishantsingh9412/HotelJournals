import axios from 'axios'


const API = axios.create({baseURL : 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`;
    }
    return req;
});

export const signUp = (authData) => API.post('/user/signup',authData)

export const Login = (authData) => API.post('/user/login',authData)

// Getting all users data from database
export const Profile = () => API.get('/user/profile')

// Tips Admin (Blog creation)
export const TipsAdminData = (tipsData) => API.post('/admin/tips',tipsData)

// Tips Data (Blog fetching)  For All Blogs 
export const TipsData = () => API.get('/admin/tips')

// Tips Data for single Blog 
export const TipsDataSingle = (id) => API.get(`/admin/tips/${id}`)

// Deleting a Blog
export const DeleteTip = (id) => API.delete(`/admin/tips/${id}`)


