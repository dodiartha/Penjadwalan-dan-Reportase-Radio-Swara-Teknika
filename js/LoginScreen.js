import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text} from 'react-native';
import { StackNavigator } from 'react-navigation';

class LoginActivity extends Component {
 
    static navigationOptions = {
    header: null
  };
   

  constructor(props) {
   
      super(props)
   
      this.state = {
   
        UserEmail: '',
        UserPassword: ''
   
      }
   
    }
   
  UserLoginFunction = () =>{
   
   const { UserEmail }  = this.state ;
   const { UserPassword }  = this.state ;

   if( UserEmail == 'Admin' && UserPassword =='Admin' )
   {
       this.props.navigation.navigate('Utama');
   }
   else{

    Alert.alert("User Name dan Password yang Anda masukkan salah!!!");
   }
}
   
    render() {
      return (
   
        <View style={styles.MainContainer}>
          <Text style= {styles.TextComponentStyle}>LOGIN</Text>
          <TextInput
            placeholder="Masukkan Email "
            onChangeText={UserEmail => this.setState({UserEmail})}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
          />
   
          <TextInput
            placeholder="Masukkan Password"
            onChangeText={UserPassword => this.setState({UserPassword})}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
            secureTextEntry={true}
          />
          <Button title="LOGIN" onPress={this.UserLoginFunction} color="#2196F3" />
          <TextInput />
          <Button title="OR SIGINUP" onPress={() => this.props.navigation.navigate('Daftar')} color="#2196F3" />
        </View>
              
      );
    }
  }
   
  export default LoginActivity

const styles = StyleSheet.create({
 
  MainContainer :{
    justifyContent: 'center',
    flex:1,
    margin: 10,
  },
   
  TextInputStyleClass: {
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5 ,
  },
   
  TextComponentStyle: {
    fontSize: 20,
    color: "#000",
    textAlign: 'center', 
    marginBottom: 15
  }
  
  });