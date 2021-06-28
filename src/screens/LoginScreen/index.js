import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './../LoginScreen/styles';
import HomeScreen from '../HomeScreen';
import {AuthContext} from '../../../src/components/context';

const LoginScreen = props => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    chek_textInputChange: false,
    isValidUser: true,
    isValidPassword: true,
  });

  const {signIn} = React.useContext(AuthContext);

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        chek_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };
  const loginHandle = (username, password) => {
    signIn(username, password);
  };

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0.1, 0.8]}
      colors={['#A770EF', '#4568DC']}
      style={styles.linearGradient}>
      <KeyboardAvoidingView behavior="position">
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            marginLeft: 90,
            marginTop: 140,
          }}>
          Authorization
        </Text>

        <TextInput
          placeholder="Your mail"
          autoCapitalize="none"
          style={styles.InputLogin}
          theme={{colors: {primary: '#159957'}}}
          onChangeText={val => textInputChange(val)}
        />
        <TextInput
          placeholder="Your password"
          autoCapitalize="none"
          onChangeText={val => handlePasswordChange(val)}
          style={{marginLeft: 18, marginRight: 18, marginTop: 15, height: 55}}
          theme={{colors: {primary: '#159957'}}}
        />
        <TouchableOpacity
          onPress={() => {
            loginHandle(data.username, data.password);
          }}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              fontSize: 18,
              marginTop: 10,
            }}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            onPress={() => props.navigation.replace('Register')}
            style={{
              fontSize: 18,
              marginLeft: 110,
              marginTop: 20,
              color: 'white',
            }}>
            сreate an account
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default LoginScreen;
