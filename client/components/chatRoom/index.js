import React, {Component} from 'react';
import io from 'socket.io-client';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import {initChatRoom, chatMessageInput, addMessage} from '../../redux/actions';
import {bindActionCreators} from 'redux';
import {YellowBox} from 'react-native';
import axios from 'axios';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
]);
class ChatRoom extends Component {
  componentDidMount() {
    this.props.navigation.setParams({logout: this.logout});
    this.props.initChatRoom();
    this.socket = io('https://chat-room2.herokuapp.com');
    this.socket.on('chat message', msg => {
      this.props.addMessage(msg);
    });
  }

  submitChatMessage = () => {
    this.socket.emit('chat message', {
      msg: this.props.chatMessage,
      user_id: this.props.userId,
    });
    this.props.chatMessageInput('');
  };
  logout = () => {
    axios
      .get('https://chat-room2.herokuapp.com/api/logout')
      .then(r => {
        console.log('logged out ');
      })
      .catch(e => {
        console.log(e);
      });
    const {navigate} = this.props.navigation;
    navigate('Home');
  };

  static navigationOptions = ({navigation}) => {
    return {
      title: 'CHAT_ROOM',
      headerRight: () => (
        <Button
          onPress={navigation.getParam('logout')}
          title="Logout"
          color="#61B4CE"
        />
      ),
      headerLeft: null,
    };
  };
  render() {
    const {userId} = this.props;
    const {navigate} = this.props.navigation;
    const chatMessages = this.props.chatMessages.map((msgInfo, i) => {
      return (
        <View
          key={msgInfo.description + '3' + i}
          style={
            msgInfo.user_id === userId
              ? styles.contenerMyMessages
              : styles.contenerPeopleMessages
          }>
          <View key={msgInfo.description + '4' + i}>
            <Image
              source={{
                uri: `${msgInfo.img}`,
              }}
              style={{
                height: 50,
                width: 50,
                borderRadius: 85,
                borderWidth: 5,
                borderColor: '#FFF',
              }}
            />
          </View>
          <View
            onTouchStart={() => navigate('Profile', {userId: msgInfo.user_id})}
            style={
              msgInfo.user_id === userId
                ? styles.myMessages
                : styles.peopleMessages
            }
            key={msgInfo.description + '0' + i}>
            <Text
              style={
                msgInfo.user_id === userId
                  ? {color: msgInfo.color, textAlign: 'right'}
                  : {color: msgInfo.color}
              }
              key={msgInfo.description + '1' + i}>
              {msgInfo.name}
            </Text>
            <Text
              style={msgInfo.user_id === userId ? styles.myMessagesText : {}}
              key={msgInfo.description + '2' + i}>
              {msgInfo.description}
            </Text>
          </View>
        </View>
      );
    });
    return (
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={{height: 550}}>
            <ScrollView
              ref={ref => (this.scrollView = ref)}
              onContentSizeChange={(contentWidth, contentHeight) => {
                this.scrollView.scrollToEnd({animated: true});
              }}>
              {chatMessages}
            </ScrollView>
          </View>
          <View style={styles.container}>
            <TextInput
              style={{
                height: 70,
                borderTopWidth: 2,
                bottom: 0,
                width: '100%',
                fontSize: 30,
                marginTop: 5,
              }}
              autoCorrect={false}
              placeholder="Enter your message ..."
              value={this.props.chatMessage}
              onSubmitEditing={this.submitChatMessage}
              onChangeText={chatMessage =>
                this.props.chatMessageInput(chatMessage)
              }
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  myMessages: {
    backgroundColor: '#61B4CE',
    width: '50%',
    borderRadius: 12,
    marginTop: 5,
    padding: 5,
  },
  myMessagesText: {
    textAlign: 'right',
  },
  contenerMyMessages: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  contenerPeopleMessages: {
    display: 'flex',
    flexDirection: 'row',
  },

  peopleMessages: {
    backgroundColor: '#8A50B8',
    width: '50%',
    borderRadius: 12,
    marginTop: 5,
    padding: 5,
  },
});
const mapStateToProps = state => {
  return {
    // user id should be store from redux store
    userId: 1,
    chatMessage: state.chatRoomReducer.chatMessage,
    chatMessages: state.chatRoomReducer.chatMessages,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      initChatRoom,
      chatMessageInput,
      addMessage,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
