const info = {
  token: "",
  refresh_token: ""
}
const login = (state = info, action) => {
  switch (action.type) {
    case 'login/token':
      return {
        ...action.payload
      }
    default:
      return state
  }
}

export default login

