
import request from '@/utils/request'
/**
 * 将用户频道保存到 Redux
 * @param {Array} channels
 * @returns
 */

/**
 * 获取频道
 * 
 */
export const getUserChannels = () => {
  return async (dispatch) => {
    // 请求数据
    const res = await request.get('/user/channels')
    const { channels } = res.data

    const setUserChannels = (channels) => {
      return {
        type: 'home/channel',
        payload: channels,
      }
    }
    // 将频道数据保存到 Redux
    dispatch(setUserChannels(channels))
  }
}


// 获取频道内容
export const getContentList = (channelId) => {
  return async (dispatch) => {
    // 请求数据
    const res = await request.get('/articles', {
      params: {
        channel_id: channelId,
        timestamp: Date.now(),
      },
    })
    let content = (contentList) => {
      return {
        type: "home/content",
        contentList: contentList
      }
    }
    dispatch(content(res.data.results))

    return res.data.results
  }

}
