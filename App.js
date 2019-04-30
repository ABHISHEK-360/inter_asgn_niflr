/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import
{
  Platform,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  KeyboardAvoidingView,

} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import firebase from 'react-native-firebase'


var config = {
  apiKey: "AIzaSyCrUwHt_pRSLFVLWy2KAJsOEkPxW5HZyxI",
  authDomain: "intern-niflr.firebaseapp.com",
  databaseURL: "https://intern-niflr.firebaseio.com",
  projectId: "intern-niflr",
  storageBucket: "intern-niflr.appspot.com",
  messagingSenderId: "227737227082"
};

firebase.initializeApp(config);




import Splash from './src/components/Splash';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Home from './src/components/Home';
import Welcome from './src/components/Welcome';



const RootStack = createStackNavigator(
  {
    RegisterScrn:{ screen: Register,},
    LoginScrn:{ screen: Login,},
    HomeScrn:{ screen: Home,},
    SplashScrn:{ screen: Splash,},
    WelcomeScrn:{ screen: Welcome,},





  },
  {
    initialRouteName: 'SplashScrn',
    headerMode: 'none',
    cardStyle: {backgroundColor: '#111111', shadowColor:'#1ab23c'},
      transitionConfig: () => ({
        containerStyle: {
          backgroundColor: 'transparent',
        },
      }),
  },


);

const AppContainer = createAppContainer(RootStack);


export default class App extends Component
 {
  render()
  {
    return (

      <AppContainer/>
    );
  }
}

const styles = StyleSheet.create
(
  {
    bg_container:
    {
      flex:1,

      width: null,

    },

  }

);
