import React, {Component} from 'react'
import io from 'socket.io-client'
import {StyleSheet, ScrollView, View, Text, TextInput} from 'react-native'
import axios from 'axios'

class ChatRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chatMesssage: '',
      chatMesssages: [],
    }
  }
  componentDidMount() {
    axios
      .get('https://chat-room2.herokuapp.com/api/getMessages')
      .then(({data}) => {
        this.setState({chatMesssages: data.map(msgInfo => msgInfo.description), chatMesssages: data})
      })
      .catch(err => {
        console.log('line 30', err)
      })

    this.socket = io('https://chat-room2.herokuapp.com')
    this.socket.on('chat message', ({description, user_id}) => {
      this.setState({chatMesssages: [...this.state.chatMesssages, {description: description, user_id}]}, () => {
        console.log('this.state.')
      })
    })
  }

  submitChatMessage = () => {
    this.socket.emit('chat message', {msg: this.state.chatMesssage, user_id: 1})
    this.setState({chatMesssage: ''})
  }

  render() {
    const chatMesssages = this.state.chatMesssages.map((msgInfo, i) => (
      // the keys are temp
      <View key={msgInfo.description + i}>
        <Text key={msgInfo.description + '1' + i} style={{color: msgInfo.color}}>
          user id{msgInfo.user_id}
        </Text>
        <Text key={msgInfo.description + '2' + i}>{msgInfo.description}</Text>
      </View>
    ))
    return (
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            style={{height: 40, borderWidth: 2}}
            autoCorrect={false}
            value={this.state.chatMesssage}
            onSubmitEditing={this.submitChatMessage}
            onChangeText={chatMesssage => {
              this.setState({chatMesssage})
            }}
          />
          {chatMesssages}
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

export default ChatRoom
