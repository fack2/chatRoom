const initState = {email: '', password: '', token: ''}

function reducer(state = initState, action) {
  switch (action.type) {
    case 'INPUT_EMAIL_CHANGE':
      return {
        ...state,
        email: action.email,
      }
    case 'INPUT_PASSWORD_CHANGE':
      return {
        ...state,
        password: action.password,
      }
    case 'TOKEN_CHANGE':
      return {
        ...state,
        token: action.token,
      }

    default:
      return state
  }
}

export default reducer
