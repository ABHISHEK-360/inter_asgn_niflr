import React, {Component} from 'react';
import
{
  StyleSheet,
  Text,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import firebase from 'react-native-firebase'

import { StackActions, NavigationActions } from 'react-navigation';
import * as Progress from 'react-native-progress';


export default class Login  extends Component
{
  state= { email: '', password: '', errorMessage: null, connectState: false}

  handleLogin = ()=>{

    this.setState({ errorMessage: null });
    this.setState({ connectState: true });

    const email = this.state.email;
    const password = this.state.password;



    if(this.state.email=='')
    {
      this.setState({ errorMessage: "Email can't be empty." });
      this.setState({ connectState: false });

      return;

    }
    else if(this.state.password.length<6)
    {
      this.setState({ errorMessage: "Password too short." });
      this.setState({ connectState: false });

      return;

    }
    else
    {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email,this.state.password)
        .then((user)=>{
          alert('Logged In Successfully.')
          this.setState({ connectState: false });
           this.navigateToHome();
         })
        .catch(error =>{

          this.setState({ connectState: false });

          this.setState({ errorMessage: error.message })

        });

    }



    console.log('handled Login')
  }

  navigateToHome()
  {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'HomeScrn' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render()
  {
    return(
      <KeyboardAvoidingView

        style= {login_styles.login_container}>

        <Text style={login_styles.header}>Login Here</Text>

        {
          this.state.errorMessage &&
          <Text style={ {color: 'red',fontSize: 15,margin: 10,padding: 10}}>{ this.state.errorMessage}</Text>
        }
        {

          this.state.connectState &&
          <Progress.CircleSnail color={['red', 'green', 'blue']} />

        }





          <TextInput
            placeholder='Email'
            placeholderTextColor='#289892'
            onChangeText= {email=>this.setState({email})}

            style = { login_styles.textInput }
            underlineColorAndroid={'transparent'}/>

          <TextInput
              placeholder='Password'
              secureTextEntry={true}
              onChangeText= {password=>this.setState({password})}


              placeholderTextColor='#289892'
              style={login_styles.textInput}
              underlineColorAndroid={'transparent'}/>

          <TouchableOpacity
              disabled = {this.state.connectState}
              style={this.state.connectState ? login_styles.buttonStyleDisable : login_styles.buttonStyle}
              onPress={ this.handleLogin}
          >
                <Text style={login_styles.btnText}>Try Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
              disabled = {this.state.connectState}

              onPress={()=>{
                this.props.navigation.navigate('RegisterScrn',{})
              }
            }
            style={this.state.connectState ? login_styles.buttonStyleDisable : login_styles.buttonStyle}
          >
                <Text style={login_styles.btnText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={()=>{
                this.props.navigation.navigate('WelcomeScrn',{})
              }
            }
          >
                <Text style={login_styles.skipLoginText}>Skip Login!</Text>
          </TouchableOpacity>


      </KeyboardAvoidingView>
    );
  }
}

const login_styles = StyleSheet.create
(
  {
    bg_container:
    {
      width: null,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },
    login_container:
    {
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',


    },

    header:
    {
      fontSize: 50,
      color: '#fff',
      fontWeight: 'bold',
      marginBottom:60,
    },
    textInput:
    {

      alignSelf: 'stretch',
      padding: 15,
      backgroundColor: 'rgba(225,240,205,0.7)',
      margin: 10,

    },
    buttonStyle:
    {
      alignSelf: 'stretch',
      margin: 10,
      backgroundColor: 'rgba(110,125,230,0.7)',
      alignItems: 'center',
      padding:5,
      borderWidth: 3,
      borderRadius: 5,
      borderColor: '#F7A008'
    },
    buttonStyleDisable:
    {
      alignSelf: 'stretch',
      margin: 10,
      backgroundColor: 'rgba(110,125,230,0.5)',
      alignItems: 'center',
      padding:5,
      borderWidth: 3,
      borderColor: '#F7A008'
    },
    btnText:
    {
      color: '#F7A008',
      fontSize:25,
    },
    skipLoginText:
    {
      marginTop: 30,
      color: '#fff',
      fontSize:15,
    }
  }
);
