import axios from 'axios';
export const getUserProfile = userId => async dispatch => {
  console.log('hello from getUserProfile action', userId);
  let userData;
  try {
    const {data} = await axios.get(
      `http://192.168.13.80:4000/api/profile/${userId}`,
    );
    userData = await data[0];
    
  } catch (err) {
    console.log(err);
  }
console.log(userData);


  dispatch({
    type: 'USER_PROFILE',
    userData,
  });
};
