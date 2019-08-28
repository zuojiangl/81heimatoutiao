import router from './router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
router.beforeEach(function (to, from, next) {
  nprogress.start()
  // 如果是以home为起始 就认为 进入了需要检查token的区域
  if (to.path.startsWith('/home')) {
    // 获取前端的token
    let result = window.localStorage.getItem('user-info')
    if (result) {
      let userInfo = JSON.parse(result) // 将储存的字符串转化为对象
      if (userInfo && userInfo.token) {
        // 有token就放行
        next()
      } else {
        next('/login')
      }
    } else {
      next('/login')
    }
  } else {
    next() // 直接放行
  }
})
router.afterEach(() => {
  nprogress.done()
})
export default router
