import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Text} from 'react-native';
import ChatRoom from './chatRoom';

const NavigationStack = createStackNavigator({
  ChatRoom: {screen: ChatRoom},
});

const Routes = createAppContainer(NavigationStack);

export default Routes;
