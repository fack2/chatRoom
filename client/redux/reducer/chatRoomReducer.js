const initState = {
  chatMessage: '',
  chatMessages: [],
}

const chatRoomReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INIT_CHAT_ROOM':
      console.log('00000011111111111', action.chatMessages, 'acccccccc')
      return {
        ...state,
        chatMessages: action.chatMessages,
      }
    case 'CHAT_MESSAGE_INPUT':
      return {
        ...state,
        chatMessage: action.chatMessageInput,
      }
    case 'ADD_MESSAGE':
      return {
        ...state,
        chatMessages: [...state.chatMessages, action.msg],
      }
    default:
      return state
  }
}
export default chatRoomReducer
