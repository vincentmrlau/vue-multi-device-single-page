/**
 * 这里放全局的配置文件
*/

// 请求域名
const PRODUCTION_HOSTNAME = 'http://localhost:3000'
const DEVELOPMENT_HOSTNAME = 'http://localhost:3000'
export const ROOT_HOST_NAME = process.env.NODE_ENV === 'production'
  ? PRODUCTION_HOSTNAME
  : DEVELOPMENT_HOSTNAME
