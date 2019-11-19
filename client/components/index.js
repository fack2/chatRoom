import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Text} from 'react-native'
import ChatRoom from './chatRoom'
import SignUp from './SignUp'

const NavigationStack = createStackNavigator({
  ChatRoom: {screen: ChatRoom},
  SignUp: {screen: SignUp},
})

const Routes = createAppContainer(NavigationStack)

export default Routes
