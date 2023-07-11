// 定义一个全局路由中间件
export default defineNuxtRouteMiddleware((to, from) => {
  // 如果去的是 / ，我们重定向道 /article
  if (to.path === '/') {
    return navigateTo('/article')
  }
})
