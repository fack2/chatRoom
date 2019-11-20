const initState = {
  userInformation: {},
  loading: false,
};

const userProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case 'USER_PROFILE':
      
      return {
        ...state,
        userInformation: action.userData,
        loading: true,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
