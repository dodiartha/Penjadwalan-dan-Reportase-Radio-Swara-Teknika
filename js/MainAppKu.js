import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Login from './LoginScreen';
import Utama from './MainApp';
import Daftar from './daftar';


const RootStack = StackNavigator(

  
  {
    Utama: {
      screen: Utama,
    },
    Login: {
      screen: Login,
    },
    Daftar: {
      screen: Daftar,
    },
  },

  {
    initialRouteName: 'Login',
  }

);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}