import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Text} from 'react-native';
import ChatRoom from './chatRoom';
import Profile from './profile';

const NavigationStack = createStackNavigator({
  Profile: {screen: Profile},
  ChatRoom: {screen: ChatRoom},
  
});

const Routes = createAppContainer(NavigationStack);

export default Routes;
