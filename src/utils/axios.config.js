import axios from 'axios'
import { Message } from 'element-ui' // 引入message模块
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
// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data ? response.data : {}
}, function (error) {
  let code = error.response ? error.response.status : '' // 获取错误的状态码
  let message = ''
  switch (code) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '用户非实名认证用户'
      break
    case 404:
      message = '手机号不正确'
      break
    case 401:
      message = 'token过期或未传'
      window.localStorage.clear()
      window.location.hash = '#/login'
      break
    case 507:
      message = '服务器数据异常'
      break
    default:
      message = '未知错误！'
      break
  }
  Message({ message, type: 'warning' })
  return new Promise()
})
export default axios
