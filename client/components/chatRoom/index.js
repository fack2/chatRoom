import React, {Component, Fragment} from 'react'
import io from 'socket.io-client'
import {SafeAreaView, StyleSheet, ScrollView, View, Text, TextInput, StatusBar} from 'react-native'
import axios from 'axios'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

class ChatRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chatMesssage: '',
      chatMesssages: [],
      t: [],
    }
  }
  componentDidMount() {
    axios
      .get('http://192.168.13.204:4000/api/getMessages')
      .then(({data}) => {
        this.setState({chatMesssages: data.map(a => a.description), t: data})
      })
      .catch(err => {
        console.log('line 30', err)
      })
    // this.setState({chatMesssages:})
    // fetch('http://192.168.13.204:4000/api/getMessages')
    // this.a()
    this.socket = io('http://192.168.13.204:4000')
    this.socket.on('chat message', ({description, user_id}) => {
      console.log('777777777777777777', description, user_id)
      this.setState({t: [...this.state.t, {description: description, user_id}]}, () => {
        console.log('this.state.')
      })
    })
  }
  // a = async () => {
  //   const response = await fetch('http://192.168.13.204:4000/api/getMessages')
  //   const myJson = await response.json()
  //   // console.log(JSON.stringify(myJson), '000000000000000000000000001111111111111111')
  // }

  submitChatMessage = () => {
    this.socket.emit('chat message', {msg: this.state.chatMesssage, user_id: 1})
    this.setState({chatMesssage: ''})
  }

  render() {
    // const chatMesssages2 = this.state.chatMesssages.map(chatMesssage => <Text key={chatMesssage}>{chatMesssage}</Text>)
    const chatMesssages = this.state.t.map(a => (
      <View key={a.description + '6666'}>
        <Text style={{color: a.color}} key={a.description + '7777'}>
          user id{a.user_id}
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
