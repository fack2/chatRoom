import React, {Component, Fragment} from 'react';
import io from 'socket.io-client';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, TextInput, StatusBar} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
    };
  }
  componentDidMount() {
    this.socket = io('https://chat-room2.herokuapp.com/');
    this.socket.on('chat message', msg => {
      this.setState({chatMessages: [...this.state.chatMessages, msg]});
    });
  }

  submitChatMessage = () => {
    this.socket.emit('chat message', this.state.chatMessage);
    this.setState({chatMessage: ''});
  };

  render() {
    const chatMessages = this.state.chatMessages.map(chatMessage => <Text key={chatMessage}>{chatMessage}</Text>);
    return (
      <Fragment>
        <View style={styles.container}>
          <TextInput
            style={{height: 40, borderWidth: 2}}
            autoCorrect={false}
            value={this.state.chatMessage}
            onSubmitEditing={this.submitChatMessage}
            onChangeText={chatMessage => {
              this.setState({chatMessage});
            }}
          />
          {chatMessages}
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default ChatRoom;
