import React, { Component } from 'react';
import
{
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import firebase from 'react-native-firebase'

import { StackActions, NavigationActions } from 'react-navigation';

import ItemsListView from './ItemsListView'


export default class Items extends Component
{
  getData()
  {
    return [
      {
        key : 1,
        title : 'Milk',
        image_url : 'https://img.icons8.com/color/96/000000/milk-bottle.png ',
      },
      {
        key : 2,
        title : 'Eggs',
        image_url : 'https://img.icons8.com/color/96/000000/ingredients.png',
      },
      {
        key : 3,
        title : 'Curd',
        image_url : 'https://img.icons8.com/color/96/000000/ingredients.png ',
      },
      {
        key : 4,
        title : 'Biscuits',
        image_url : 'https://img.icons8.com/flat_round/64/000000/biscuits.png',
      },
      {
        key : 5,
        title : 'Cake',
        image_url : 'https://img.icons8.com/color/96/000000/ingredients.png ',
      },
      {
        key : 6,
        title : 'Almonds',
        image_url : 'https://img.icons8.com/color/96/000000/ingredients.png',
      },
      {
        key : 7,
        title : 'Dates',
        image_url : 'https://img.icons8.com/color/96/000000/ingredients.png ',
      },
      {
        key : 8,
        title : 'Maggie',
        image_url : 'https://img.icons8.com/color/96/000000/ingredients.png',
      },
      {
        key : 9,
        title : 'Fruits',
        image_url : 'https://img.icons8.com/color/96/000000/ingredients.png ',
      },
    ]
  }

  signOutUser = async () => {
    try {
      alert('Logged Out!');

        await firebase.auth().signOut();
        this.navigateToLogin();

    } catch (e) {
      alert('Logout Failed!');

        console.log(e);

    }

  }

  navigateToLogin()
  {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'LoginScrn' })],
    });
    this.props.navigation.dispatch(resetAction);
  }


  render()
  {
    return(

      <View style={styles.container}>


        <Text style={styles.header}>List of Food items!</Text>



        <ItemsListView
          itemList={this.getData()}
        />

        <TouchableOpacity
            onPress={this.signOutUser}
            style={styles.buttonStyle}>
              <Text style={styles.btnText}>Logout</Text>
        </TouchableOpacity>




      </View>
    );
  }
}

const styles = StyleSheet.create
(
  {
    container:
    {
      flex : 1,
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
      alignSelf: 'center',
      fontWeight: 'bold',
      marginBottom:10,
    },
    buttonStyle:
    {
      alignSelf: 'stretch',
      margin: 10,
      backgroundColor: 'rgba(110,125,230,0.7)',
      alignItems: 'center',
      padding:10,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#F7A008'
    },
    btnText:
    {
      color: '#F7A008',
      fontSize:20,
    },

  }
);
