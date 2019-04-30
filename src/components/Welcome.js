import React, { Component } from 'react';
import
{
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import firebase from 'react-native-firebase'



export default class Welcome extends Component
{
  state ={ name : 'User'}

  componentDidMount()
  {
    firebase.auth().onAuthStateChanged((user) => {

        if(user)
        {

          firebase.database().ref('users/'+user.uid ).on('value', (snapshot) => {

              this.setState({ name: snapshot.val().name});

          }).bind(this);
        }
      }
    ).bind(this)

  }




  render()
  {
    return(

      <View style={styles.container}>


        <Text style={styles.header}>Hello, {this.state.name} </Text>
        <Text style={styles.header}>Welcome to Niflr! </Text>




      </View>
    );
  }
}

const styles = StyleSheet.create
(
  {
    container:
    {
      flex:1,
      alignSelf: 'stretch',
      justifyContent: 'center',
      marginTop: 10,
      alignItems: 'center',
      paddingLeft: 30,
      paddingRight: 30,

    },
    header:
    {
      fontSize: 30,
      color: '#fff',
      alignSelf: 'center',
      fontWeight: 'bold',
      marginBottom:150,
    },

  }
);
