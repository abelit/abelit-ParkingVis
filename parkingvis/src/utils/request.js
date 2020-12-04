import axios from 'axios'

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000 // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error) => {
  if (error.response) {
    const data = error.response.data

    if (error.response.status === 403 || error.response.status === 401) {
      console.log({
        message: 'Forbidden',
        description: data.message
      })
    }
  }
  return Promise.reject(error)
}

// response interceptor
request.interceptors.response.use((response) => {
  return response.data
}, errorHandler)

export default request
