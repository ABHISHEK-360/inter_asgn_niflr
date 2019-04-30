import React, { Component } from 'react';
import
{
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';

import firebase from 'react-native-firebase'

import { StackActions, NavigationActions } from 'react-navigation';




export default class Splash extends Component
{
  navigateToHome()
  {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'HomeScrn' })],
    });

    this.props.navigation.dispatch(resetAction);
  }

  navigateToLogin()
  {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'LoginScrn' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  componentDidMount() {
    this.authSubscription =
      firebase.auth().onAuthStateChanged((user) => {

        this.timer = setTimeout(() => {
      (user) ? this.navigateToHome() : this.navigateToLogin();
    }, 2000);


      });
  }

  

  componentWillUnmount()
  {
    this.authSubscription();
  }

  render()
  {
    return(

      <View style={styles.container}>

        <Text style={styles.header}>ABHISHEK360</Text>
        <Text style={styles.header}>Niflr</Text>

        <Text style={
          {
          fontSize: 30,
          margin: 10,
          color: '#fff',

        }
      }>Loading...</Text>


      </View>
    );
  }
}

const styles = StyleSheet.create
(
  {
    container:
    {
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 30,
      paddingRight: 30,

    },
    header:
    {
      fontSize: 40,
      color: '#fff',
      fontWeight: 'bold',
    },

  }
);
