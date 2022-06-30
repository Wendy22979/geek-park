import request from "@/utils/request"

/**
 * 获取用户基本信息
 * @returns thunk
 */
export const getUser = () => {
  return async dispatch => {
    const res = await request.get('/user')
    dispatch({
      type: "layout/Profile",
      userInfo: res.data
    })
  }
}