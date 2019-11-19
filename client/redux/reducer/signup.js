const initState = {name: '', email: '', password: ''}

function reducer(state = initState, action) {
  switch (action.type) {
    case 'INPUT_NAME_CHANGE':
      return {
        ...state,
        name: action.name,
      }

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

    default:
      return state
  }
}

export default reducer
