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
      chatMesssage: '',
      chatMesssages: [],
    };
  }
  componentDidMount() {
    this.socket = io('https://chat-room2.herokuapp.com/');
    this.socket.on('chat message', msg => {
      this.setState({chatMesssages: [...this.state.chatMesssages, msg]});
    });
  }

  submitChatMessage = () => {
    this.socket.emit('chat message', this.state.chatMesssage);
    this.setState({chatMesssage: ''});
  };

  render() {
    const chatMesssages = this.state.chatMesssages.map(chatMesssage => <Text key={chatMesssage}>{chatMesssage}</Text>);
    return (
      <Fragment>
        <View style={styles.container}>
          <TextInput
            style={{height: 40, borderWidth: 2}}
            autoCorrect={false}
            value={this.state.chatMesssage}
            onSubmitEditing={this.submitChatMessage}
            onChangeText={chatMesssage => {
              this.setState({chatMesssage});
            }}
          />
          {chatMesssages}
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
