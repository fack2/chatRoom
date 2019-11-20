
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ChatRoom from './chatRoom';
import Profile from './profile';
import SignUp from './SignUp';
import Home from './Home';

const NavigationStack = createStackNavigator({
  Home: {screen: Home},
  ChatRoom: {screen: ChatRoom},
  SignUp: {screen: SignUp},
  Profile: {screen: Profile},

});

const Routes = createAppContainer(NavigationStack);

export default Routes;
