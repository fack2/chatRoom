import React, {Component} from 'react';
import {
  View,
  Button,
  TextInput,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  inputNameChange,
  inputEmailChange,
  inputPasswordChange,
} from '../../redux/actions';

class SignUp extends Component {
  pressButton = event => {
    const {name, email, password} = this.props;

    axios
      .post('https://chat-room2.herokuapp.com/api/signup', {
        name,
        email,
        password,
      })
      .then(result =>
        result.data.err.filter(e => {
          if (e.includes('name')) {
            Alert.alert('name should be alphabet & more than 3 characters');
          }
          if (e.includes('email')) {
            Alert.alert('email should be like example@email.com');
          }
          if (e.includes('password')) {
            Alert.alert('password should be more tnan 6 characters');
          }
        }),
      )
      .catch(error => console.log(error));
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.main}>
        <Text style={styles.text}>SignUp</Text>
        <View style={styles.inputs}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            value={this.props.email}
            onChange={this.props.inputEmailChange}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Name..."
            value={this.props.name}
            onChange={this.props.inputNameChange}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Password..."
            value={this.props.password}
            onChange={this.props.inputPasswordChange}
          />
        </View>
        <View style={styles.Button}>
          <Button title="signup" color="#8A50B8" onPress={this.pressButton} />
        </View>
        <View>
          <TouchableOpacity onPress={() => navigate('Login')}>
            <Text style={styles.anchor}> Login Instead </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapState = state => {
  return {
    name: state.signupReducer.name,
    email: state.signupReducer.email,
    password: state.signupReducer.password,
  };
};
const mapAction = dispatch => {
  return bindActionCreators(
    {inputNameChange, inputEmailChange, inputPasswordChange},
    dispatch,
  );
};

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

export default connect(mapState, mapAction)(SignUp);
