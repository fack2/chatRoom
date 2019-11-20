import React, {Component} from 'react'
import {View, Button, TextInput, Alert, AsyncStorage} from 'react-native'
import axios from 'axios'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {inputEmailChange, inputPasswordChange} from '../../redux/actions'

class SignIn extends Component {
  pressButton = event => {
    const {email, password} = this.props
    const token = AsyncStorage.getItem('token')
    axios
      .post('http://192.168.13.204:4000/api/signIn', {
        // .post('https://chat-room2.herokuapp.com/api/signIn', {
        email,
        password,
        token,
      })
      .then(({data}) => {
        console.log(data, 'resull')
        // result.data.err.filter(e => {
        //   if (e.includes('email')) {
        //     Alert.alert('email should be like example@email.com')
        //   }
        //   if (e.includes('password')) {
        //     Alert.alert('password should be more tnan 6 characters')
        //   }
        // })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <View>
        <TextInput placeholder="Email..." value={this.props.email} onChange={this.props.inputEmailChange} />
        <TextInput placeholder="Password..." value={this.props.password} onChange={this.props.inputPasswordChange} />
        <Button title="signIn" onPress={this.pressButton} />
      </View>
    )
  }
}

const mapState = state => {
  return {
    email: state.signInReducer.email,
    password: state.signInReducer.password,
  }
}
const mapAction = dispatch => {
  return bindActionCreators({inputEmailChange, inputPasswordChange}, dispatch)
}
export default connect(mapState, mapAction)(SignIn)
