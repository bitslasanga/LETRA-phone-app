/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createBottomTabNavigator, createDrawerNavigator} from "react-navigation";
import Home from './app/components/Home';
import Dashboard from './app/components/Dashboard';
import UserReg from './app/components/UserReg';


const Drawer = createDrawerNavigator({
  Dashboard: {screen: Dashboard},
  UserReg: {screen: UserReg}
}); 

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions:{tabBarVisible: false}
  },
Tab: {
    screen: Drawer,
    navigationOptions:{tabBarVisible: false}
  }
 
} ); 

export default class App extends Component {

  render() {
      return (
         <TabNavigator />   
      )
  }
}
 
