import axios from 'axios'
import { getToken, setToken, removeToken } from "@/utils/login_localStorage"
import { Toast } from 'antd-mobile'
import history from './history'


// 1. 创建新的 axios 实例
const request = axios.create({
  baseURL: 'http://toutiao.itheima.net/v1_0'
})

// 2. 设置请求拦截器和响应拦截器
request.interceptors.request.use(config => {
  // 获取缓存中的 Token 信息
  const { token } = getToken()
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

// 响应拦截
request.interceptors.response.use(response => {
  return response.data
}, async (error) => {
  // 判断是不是网络错误
  if (!error.response.data) {
    Toast.show('网络繁忙，请稍后重试')
    return Promise.reject(error)
  }
  // 有响应  但是不是401
  if (error.response.status !== 401) {
    Toast.show(error.response.data.message)
    return Promise.reject(error)
  }

  //  没有token时
  let { token, refresh_token } = getToken()

  if (!token || !refresh_token) {
    history.replace('/login')
    history.go()
    console.log(history.location)
    return Promise.reject(error)
  }

  // token超时时
  try {
    const res = await request.put('/authorizations', null, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${refresh_token}`,
      },
    })
    setToken({
      refresh_token,
      token: res.data.data.token,
    })

  } catch (error) {
    console.log(error)
    removeToken()
    history.push('/login')
    history.go()
    return Promise.reject(error)
  }


  return Promise.reject(error)
})

// 3. 导出该 axios 实例
export default request