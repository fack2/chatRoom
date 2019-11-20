
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ChatRoom from './chatRoom';
import Profile from './profile';
import SignUp from './SignUp';
import Home from './Home';

const NavigationStack = createStackNavigator({
  Profile: {screen: Profile},
  ChatRoom: {screen: ChatRoom},
  Home: {screen: Home},
  SignUp: {screen: SignUp},

});

const Routes = createAppContainer(NavigationStack);

export default Routes;
