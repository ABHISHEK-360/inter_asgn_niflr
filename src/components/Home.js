import React, { Component } from 'react';
import
{
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import firebase from 'react-native-firebase';
import { createBottomTabNavigator } from 'react-navigation';


import Welcome from './Welcome'
import Items from './Items'


export default createBottomTabNavigator(
  {
    WelcomeSrcn : {
      screen : Welcome,
      navigationOptions:{
        tabBarLabel : 'Home',

      }

    },
    ItemsScrn : {
      screen: Items,
      navigationOptions:{
        tabBarLabel: 'Items',

      }
    }
  },
  {


    tabBarOptions:{
      activeTintColor: '#000000',
      activeBackgroundColor : '#12babc',
      showIcon : false,
      labelStyle : { fontSize : 28 },
    }
  }
)

const styles = StyleSheet.create(
  {
    tabLabel:
    {
      fontSize:20,
    }
  }
)
