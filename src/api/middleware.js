// 这里放公用的中间件

export const SET_AUTHORIZATION = (request, next) => {
  // 处理请求
  request.headers.set('Authorization', 'vincent')
  next((response) => {
    // 处理返回的数据
    console.log(response)
  })
}
