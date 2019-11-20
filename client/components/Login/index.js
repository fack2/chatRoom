import React, {Component} from 'react';
import {View, Button, TextInput, Alert, StyleSheet, Text} from 'react-native';
import axios from 'axios';
import {loginEmailChange, loginPasswordChange} from '../../redux/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Login extends Component {
  pressButton = navigate => {
    const {email, password} = this.props;
    axios
      .post('https://chat-room2.herokuapp.com/api/login', {
        email,
        password,
      })
      .then(result => {
        if (result.data.status === 'sucess') {
          navigate('ChatRoom');
        }
      })
      .catch(() => Alert.alert('incorrect email or password'));
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.main}>
        <Text style={styles.text}>LogIn</Text>
        <View style={styles.inputs}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            value={this.props.email}
            onChange={this.props.loginEmailChange}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Password..."
            value={this.props.password}
            onChange={this.props.loginPasswordChange}
          />
        </View>
        <View style={styles.Button}>
          <Button
            title="login"
            color="#8A50B8"
            onPress={() => {
              this.pressButton(navigate);
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F3F5F9',
  },
  inputs: {
    backgroundColor: '#ffff',
    marginLeft: 25,
    width: 350,
    borderRadius: 9,
  },
  anchor: {color: 'blue', fontSize: 20, textAlign: 'center'},

  Button: {
    padding: 45,
    marginLeft: 80,
    width: 250,
    height: 200,
    margin: 50,
  },
  inputText: {
    marginLeft: 2,
    height: 50,
    width: 350,
    borderBottomWidth: 1,
    borderColor: '#F3F5F9',
    fontSize: 17,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    padding: 50,
  },
});

const mapState = state => {
  return {
    email: state.loginReducer.email,
    password: state.loginReducer.password,
  };
};
const mapAction = dispatch => {
  return bindActionCreators({loginEmailChange, loginPasswordChange}, dispatch);
};
export default connect(mapState, mapAction)(Login);
