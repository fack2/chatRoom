import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Text} from 'react-native'
import ChatRoom from './chatRoom'
import SignUp from './SignUp'
import SignIn from './SignIn'

const NavigationStack = createStackNavigator({
  SignIn: {screen: SignIn},
  SignUp: {screen: SignUp},
  ChatRoom: {screen: ChatRoom},
})

const Routes = createAppContainer(NavigationStack)

export default Routes
