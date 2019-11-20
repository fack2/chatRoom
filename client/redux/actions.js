import axios from 'axios'
const initChatRoom = () => async dispatch => {
  let chatMessages
  try {
    const {data} = await axios.get('https://chat-room2.herokuapp.com/api/getMessages')
    chatMessages = data
    if (typeof data === typeof [])
      dispatch({
        type: 'INIT_CHAT_ROOM',
        chatMessages: [...data],
      })
  } catch (e) {
    console.log(e)
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
