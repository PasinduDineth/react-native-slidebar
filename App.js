/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator, DrawerNavigator, NavigationActions,Icon } from 'react-navigation';
import Home from './Components/Home';
import Profile from './Components/Profile';


export default class App extends Component<{}> {
  render() {

const mainScreenStack = StackNavigator(
      {
        MainScreen: {
          screen: Home,
        }
      },
      {
        navigationOptions: ({ navigation }) => ({
          initialRouteName: 'Home',
          headerMode: 'screen',
          headerTitle: 'Home',
          drawerLabel: 'Home',
          headerStyle: { backgroundColor: '#9b59b6'},
          headerTintColor: 'white',
        }),
      }
);

const secondScreenStack = StackNavigator(
      {
        SecondScreen: {
          screen: Profile,
        }
      },
      {
        navigationOptions: ({ navigation }) => ({
          initialRouteName: 'Profile',
          headerMode: 'screen',
          headerTitle: 'Profile',
          drawerLabel: 'Profile',
          headerStyle: { backgroundColor: '#9b59b6'},
          headerTintColor: 'white',
        }),
      }
);






    const MainNavigator = DrawerNavigator({
      MainScreen: {
    name: 'MainScreenStack',
    screen: mainScreenStack,
  },
  SecondScreen: {
    name: 'SecondScreenStack',
    screen: secondScreenStack,
  },
      });
    // const MainNavigator = StackNavigator({
    //   Home: { screen: Home },
    //   Profile: { screen: Profile }
    //   });


    return <MainNavigator/>;
  }
}

