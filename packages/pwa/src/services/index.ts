import axios from 'axios'

const apiEndpoint = process.env.API_ENDPOINT ?? ''
const apiKey = process.env.API_KEY ?? ''

const axiosInstance = axios.create({
  baseURL: apiEndpoint,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': apiKey
  }
})

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export { axiosInstance }
