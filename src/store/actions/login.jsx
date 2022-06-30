import request from "@/utils/request"
import { setToken } from "@/utils/login_localStorage"

// 短信验证码请求
export const sendValidationCode = (mobile) => {
  return async (dispatch) => {
    await request.get(`/sms/codes/${mobile}`)
  }
}

/* 
登录
{mobile,code}  authorizations
*/
export const login = (params) => {
  // 请求到的验证码不需要存储到redux中  所以不需要dispatch
  return async (dispatch) => {
    const res = await request.post(`authorizations`, params)
    const tokenInfo = res.data
    const saveToken = (tokenInfo) => {
      return {
        type: 'login/token',
        payload: tokenInfo,
      }
    }

    // 把tokenInfo保存到redux
    dispatch(saveToken(tokenInfo))
    // 存储到本地缓存中
    setToken(tokenInfo)
  }
}