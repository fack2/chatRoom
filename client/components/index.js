import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Text} from 'react-native';

const Home = <Text>in Home</Text>;

const NavigationStack = createStackNavigator({
  Home,
});

const Routes = createAppContainer(NavigationStack);

export default Routes;
