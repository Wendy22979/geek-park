
import request from "@/utils/request"

// 文章详情请求
export function getArticleInfo (id) {
  return async (dispatch) => {
    let res = await request.get(`/articles/${id}`)
    return res.data
  }
}