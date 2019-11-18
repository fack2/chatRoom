import React, {Component, Fragment} from 'react'
import io from 'socket.io-client'
import {SafeAreaView, StyleSheet, ScrollView, View, Text, TextInput, StatusBar} from 'react-native'
import axios from 'axios'
import {connect} from 'react-redux'
// import {} from "redux"
import {initChatRoom, chatMessageInput, addMessage} from '../../redux/actions'
import {bindActionCreators} from 'redux'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

class ChatRoom extends Component {
  componentDidMount() {
    // axios
    //   .get('http://192.168.13.204:4000/api/getMessages')
    //   .then(({data}) => {
    //     this.setState({chatMessages: data.map(a => a.description), t: data})
    //   })
    //   .catch(err => {
    //     console.log('line 30', err)
    //   })
    // this.setState({chatMessages:})
    // fetch('http://192.168.13.204:4000/api/getMessages')
    // this.a()
    this.props.initChatRoom()
    this.socket = io('http://192.168.13.204:4000')
    this.socket.on('chat message', msg => {
      // this.socket.on('chat message', ({description, user_id}) => {
      // console.log('777777777777777777', description, user_id)
      this.setState({aw: msg})
      this.props.addMessage(msg)

      // this.setState({t: [...this.state.t, {description: description, user_id}]}, () => {
      // console.log('this.state.')
      // })
    })
  }
  // a = async () => {
  //   const response = await fetch('http://192.168.13.204:4000/api/getMessages')
  //   const myJson = await response.json()
  //   // console.log(JSON.stringify(myJson), '000000000000000000000000001111111111111111')
  // }

  submitChatMessage = () => {
    this.socket.emit('chat message', {msg: this.props.chatMessage, user_id: 1})
    this.props.chatMessageInput('')
  }

  render() {
    // const chatMessages2 = this.state.chatMessages.map(chatMessage => <Text key={chatMessage}>{chatMessage}</Text>)
    const chatMessages = this.props.chatMessages.map(a => (
      <View key={a.description + '6666'}>
        <Text style={{color: a.color}} key={a.description + '7777'}>
          {a.name}
        </Text>
        <Text key={a.description + '88888'}>{a.description}</Text>
      </View>
    ))
    return (
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            style={{height: 40, borderWidth: 2}}
            autoCorrect={false}
            value={this.props.chatMessage}
            onSubmitEditing={this.submitChatMessage}
            onChangeText={chatMessage => this.props.chatMessageInput(chatMessage)}
          />
          {chatMessages}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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
