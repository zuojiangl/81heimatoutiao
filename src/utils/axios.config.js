import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
axios.interceptors.request.use(function (config) {
  // 在发起请求做一些业务处理
  // 进入配置的注入
  // 获取token
  let userInfo = window.localStorage.getItem('user-info')
  let token = userInfo ? JSON.parse(userInfo).token : null
  // 将token注入请求参数中
  config.headers.Authorization = `Bearer ${token}`
  return config
}, function (error) {
  // 请求失败处理
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  return response.data ? response.data : {}
}, function (error) {
  return Promise.reject(error)
})
export default axios
