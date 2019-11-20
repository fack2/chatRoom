import React, {Component} from 'react'
import {View, Button, TextInput, Alert} from 'react-native'
import axios from 'axios'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {inputNameChange, inputEmailChange, inputPasswordChange} from '../../redux/actions'

class SignUp extends Component {
  pressButton = event => {
    const {name, email, password} = this.props

    axios
      .post('https://chat-room2.herokuapp.com/api/signup', {
        name,
        email,
        password,
      })
      .then(result =>
        result.data.err.filter(e => {
          if (e.includes('name')) {
            Alert.alert('name should be alphabet & more than 3 characters')
          }
          if (e.includes('email')) {
            Alert.alert('email should be like example@email.com')
          }
          if (e.includes('password')) {
            Alert.alert('password should be more tnan 6 characters')
          }
        }),
      )
      .catch(error => console.log(error))
  }

  render() {
    return (
      <View>
        <TextInput placeholder="Email..." value={this.props.email} onChange={this.props.inputEmailChange} />
        <TextInput placeholder="Name..." value={this.props.name} onChange={this.props.inputNameChange} />
        <TextInput placeholder="Password..." value={this.props.password} onChange={this.props.inputPasswordChange} />
        <Button title="signup" onPress={this.pressButton} />
      </View>
    )
  }
}

const mapState = state => {
  return {
    name: state.signupReducer.name,
    email: state.signupReducer.email,
    password: state.signupReducer.password,
  }
}
const mapAction = dispatch => {
  return bindActionCreators({inputNameChange, inputEmailChange, inputPasswordChange}, dispatch)
}
export default connect(mapState, mapAction)(SignUp)
