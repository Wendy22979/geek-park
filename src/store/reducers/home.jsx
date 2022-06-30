let info = {

}

export default function home (state = info, action) {
  switch (action.type) {
    case 'home/channel':
      return {
        ...state,
        userChannels: action.payload,
      }
    case "home/content":
      return {
        ...state,
        contentList: action.contentList
      }
    default:
      return state;
  }

}