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
import * as Progress from 'react-native-progress';



export default class Register  extends Component
{
  state= { email: '', password: '', phone: '', confPass: '', name: '',errorMessage: null,connectstate: false}

  handleRegister = ()=>{

    this.setState({ errorMessage: null });
    this.setState({ connectState: true });

    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;
    const confPass = this.state.confPass;




    if(this.state.name=='')
    {
      this.setState({ errorMessage: "Name can't be empty." });
      this.setState({ connectState: false });

      return;

    }
    else if(this.state.email=='')
    {
      this.setState({ errorMessage: "Email can't be empty." });
      this.setState({ connectState: false });

      return;

    }
    else if(this.state.phone.length!=10)
    {
      this.setState({ errorMessage: "Invalid phone no." });
      this.setState({ connectState: false });

      return;

    }
    else if(this.state.password.length<6)
    {
      this.setState({ errorMessage: "Password too short." });
      this.setState({ connectState: false });

      return;

    }
    else if(this.state.confPass!=this.state.password)
    {
      this.setState({ errorMessage: "Passwords do not match." });
      this.setState({ connectState: false });

      return;

    }
    else
    {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((resp) => {

              firebase.database().ref('users/' + resp.user.uid).set({
                  name : name,
                  email: email,
                  phone: phone,
              }).then((data)=>{

                  this.navigateToLogin();
                  alert('Registered Successfully, Login using the credentials');
                  this.setState({ connectState: false });

              }).catch(error => {

              this.setState({ connectState: false });

              this.setState({ errorMessage: error.message });

              });
        })
        .catch(error =>{
          this.setState({ connectState: false });

         this.setState({ errorMessage: error.message });
       });
    }



    console.log('handleRegister')
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
      <KeyboardAvoidingView
        style= {styles.container}>



        <Text style={styles.header}>Create Account</Text>

        {
          this.state.errorMessage &&
          <Text style={ {color: 'red', fontSize: 20,}}> {this.state.errorMessage}</Text>
        }


          <TextInput
            placeholder='Name'
            placeholderTextColor='#289892'
            onChangeText={name => this.setState({ name })}
            style = { styles.textInput }
            underlineColorAndroid={'transparent'}/>

          <TextInput
            placeholder='Email'
            placeholderTextColor='#289892'
            onChangeText={email => this.setState({ email })}

            style = { styles.textInput }
            underlineColorAndroid={'transparent'}/>

          <TextInput
            placeholder='Phone(Without +91)'
            placeholderTextColor='#289892'
            onChangeText={phone => this.setState({ phone })}

            style = { styles.textInput }
            underlineColorAndroid={'transparent'}/>

          <TextInput
              placeholder='Password'
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}

              placeholderTextColor='#289892'
              style={styles.textInput}
              underlineColorAndroid={'transparent'}/>

          <TextInput
              placeholder='Confirm Password'
              secureTextEntry={true}
              onChangeText={confPass => this.setState({ confPass })}

              placeholderTextColor='#289892'
              style={styles.textInput}
              underlineColorAndroid={'transparent'}/>



          <TouchableOpacity
              disabled = {this.state.connectState}
              style={this.state.connectState ? styles.buttonStyleDisable : styles.buttonStyle}
              onPress={this.handleRegister}>
                <Text style={styles.btnText}>Submit Details</Text>
          </TouchableOpacity>

          <TouchableOpacity
          disabled = {this.state.connectState}
          style={this.state.connectState ? styles.buttonStyleDisable : styles.buttonStyle}
         onPress={() => this.props.navigation.navigate('LoginScrn')}
         >
            <Text style={styles.btnText}>Already have an account? Login</Text>
          </TouchableOpacity>


      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create
(
  {
    bg_container:
    {
      alignSelf: 'stretch',

      width: null,
      justifyContent: 'center',
      alignItems: 'center',
    },
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
      marginBottom:60,
    },
    textInput:
    {

      alignSelf: 'stretch',
      padding: 10,
      backgroundColor: 'rgba(225,240,205,0.7)',
      marginBottom: 20,

    },
    buttonStyle:
    {
      alignSelf: 'stretch',
      marginTop: 20,
      backgroundColor: 'rgba(110,125,230,0.7)',
      alignItems: 'center',
      padding:10,
      borderWidth: 3,
      borderRadius: 5,
      borderColor: '#F7A008'
    },
    buttonStyleDisable:
    {
      alignSelf: 'stretch',
      marginTop: 10,
      backgroundColor: 'rgba(110,125,230,0.5)',
      alignItems: 'center',
      padding:10,
      borderWidth: 3,
      borderColor: '#F7A008'
    },
    btnText:
    {
      color: '#F7A008',
      fontSize:20,
    }
  }
);
