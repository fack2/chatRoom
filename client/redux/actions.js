import axios from 'axios'
import {AsyncStorage} from 'react-native'

const initChatRoom = () => async dispatch => {
  let chatMessages
  try {
    const {data} = await axios.get('https://chat-room2.herokuapp.com/api/getMessages')
    chatMessages = data
    dispatch({
      type: 'INIT_CHAT_ROOM',
      chatMessages: [...data],
    })
  } catch (e) {
    console.log(e)
  }
}
const tokenChange = token => async dispatch => {
  try {
    await AsyncStorage.setItem('token', token)
    dispatch({
      type: 'TOKEN_CHANGE',
      token,
    })
  } catch (e) {
    console.log(e, ' tokenChange error')
  }
}
const initToken = () => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('token')
    dispatch({
      type: 'TOKEN_CHANGE',
      token,
    })
  } catch (e) {
    console.log(e, ' initToken error')
  }
}
const chatMessageInput = chatMessageInput => {
  return {type: 'CHAT_MESSAGE_INPUT', chatMessageInput}
}
const addMessage = msg => {
  return {type: 'ADD_MESSAGE', msg}
}
const inputNameChange = e => {
  const name = e.nativeEvent.text

  return {
    type: 'INPUT_NAME_CHANGE',
    name,
  }
}

const inputEmailChange = e => {
  const email = e.nativeEvent.text
  return {
    type: 'INPUT_EMAIL_CHANGE',
    email,
  }
}

const inputPasswordChange = e => {
  const password = e.nativeEvent.text
  return {
    type: 'INPUT_PASSWORD_CHANGE',
    password,
  }
}

export {inputNameChange, inputEmailChange, inputPasswordChange, initChatRoom, chatMessageInput, addMessage}
