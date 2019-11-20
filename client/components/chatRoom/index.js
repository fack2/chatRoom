import React, {Component} from 'react'
import io from 'socket.io-client'
import {StyleSheet, ScrollView, View, Text, TextInput} from 'react-native'
import {connect} from 'react-redux'
import {initChatRoom, chatMessageInput, addMessage} from '../../redux/actions'
import {bindActionCreators} from 'redux'
import {YellowBox} from 'react-native'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
])
class ChatRoom extends Component {
  componentDidMount() {
    this.props.initChatRoom()
    this.socket = io('https://chat-room2.herokuapp.com')
    this.socket.on('chat message', msg => {
      this.props.addMessage(msg)
    })
  }

  submitChatMessage = () => {
    this.socket.emit('chat message', {msg: this.props.chatMessage, user_id: 1})
    this.props.chatMessageInput('')
  }

  render() {
    const chatMessages = this.props.chatMessages.map((msgInfo, i) => {
      return (
        <View
          style={msgInfo.user_id === 1 ? styles.myMessages : styles.peopleMessages}
          key={msgInfo.description + '0' + i}>
          <Text style={{color: msgInfo.color}} key={msgInfo.description + '1' + i}>
            {msgInfo.name}
          </Text>
          <Text key={msgInfo.description + '2' + i}>{msgInfo.description}</Text>
        </View>
      )
    })
    return (
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={{height: 550}}>
            <ScrollView
              ref={ref => (this.scrollView = ref)}
              onContentSizeChange={(contentWidth, contentHeight) => {
                this.scrollView.scrollToEnd({animated: true})
              }}>
              {chatMessages}
            </ScrollView>
          </View>
          <View style={styles.container}>
            <TextInput
              style={{height: 40, borderWidth: 2, bottom: 0, width: '100%'}}
              autoCorrect={false}
              value={this.props.chatMessage}
              onSubmitEditing={this.submitChatMessage}
              onChangeText={chatMessage => this.props.chatMessageInput(chatMessage)}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  myMessages: {
    alignSelf: 'flex-end',
    backgroundColor: '#61B4CE',
    width: '50%',
    borderRadius: 12,
    marginTop: 5,
    padding: 5,
  },

  peopleMessages: {
    backgroundColor: '#8A50B8',
    width: '50%',
    borderRadius: 12,
    marginTop: 5,
    padding: 5,
  },
})
const mapStateToProps = state => {
  return {
    chatMessage: state.chatRoomReducer.chatMessage,
    chatMessages: state.chatRoomReducer.chatMessages,
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      initChatRoom,
      chatMessageInput,
      addMessage,
    },
    dispatch,
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)
