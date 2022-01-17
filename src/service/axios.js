import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3000/api",
});
instance.interceptors.request.use(function(config){
    let token = localStorage.getItem('accessToken'); 
    if(token != null){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function(err) {
    return Promise.reject(err);
})
export default instance;