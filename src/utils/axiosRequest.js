import axios from 'axios'

export const axiosRequest = axios.create({
    baseURL:import.meta.env.VITE_APP_API_URL
})

// export const axiosImageRequest = axios.create({
//     baseURL:import.meta.env.VITE_APP_FILE_URL
// })

axiosRequest.interceptors.request.use(
    (config) =>
    {
        const token = localStorage.getItem("access_token")
        if(token)
        {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) =>
    {
        return Promise.reject(error)
    }
)