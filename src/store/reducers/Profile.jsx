

const info = {
  userInfo: {}
}

export default function profile (state = info, action) {
  switch (action.type) {
    case "layout/Profile":
      return {
        ...info,
        userInfo: { ...action.userInfo }
      }
    default:
      return state
  }

}