
// 用户 Token 的本地缓存键名
const TOKEN_KEY = 'geek-itcast'

// token设置
export const setToken = (tokenInfo) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(tokenInfo))
}

// token获取
export const getToken = () => {
  let tokenInfo = localStorage.getItem(TOKEN_KEY) ? JSON.parse(localStorage.getItem(TOKEN_KEY)) : {}
  return tokenInfo
}

// 删除
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}

/**
 * 判断本地缓存中是否存在 Token 信息, !!将结果转化为布尔值，取反
 */
export const hasToken = () => {
  let isToken = Boolean(getToken().token)
  return isToken
}