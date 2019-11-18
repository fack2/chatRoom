import axios from 'axios'
export const initChatRoom = () => async dispatch => {
  console.log('----------------------------------')
  let chatMessages
  try {
    const {data} = await axios.get('http://192.168.13.204:4000/api/getMessages')
    chatMessages = data
    dispatch({
      type: 'INIT_CHAT_ROOM',
      chatMessages: [...data],
    })
    console.log('++++++++++++', data[0])
  } catch (e) {
    console.log('line 7', e, '777777')
  }
  // dispatch({
  //   type: 'INIT_CHAT_ROOM',
  //   chatMessages,
  // })
}
export const chatMessageInput = chatMessageInput => {
  return {type: 'CHAT_MESSAGE_INPUT', chatMessageInput}
}
export const addMessage = msg => {
         return {type: 'ADD_MESSAGE', msg}
       }