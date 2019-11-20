const initState = {email: '', password: ''};

function reducer(state = initState, action) {
  switch (action.type) {
    case 'LOGIN_EMAIL_CHANGE':
      return {
        ...state,
        email: action.loginemail,
      };
    case 'LOGIN_PASSWORD_CHANGE':
      return {
        ...state,
        password: action.loginpassword,
      };

    default:
      return state;
  }
}

export default reducer;
