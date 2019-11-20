const initState = {
  chatMessage: '',
  chatMessages: [{description: '\t\t\t\tthire is No Messages\n'}],
}

const chatRoomReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INIT_CHAT_ROOM':
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
