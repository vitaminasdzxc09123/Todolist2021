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

const RegisterScreen = props => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
  });

  const textInputChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
      });
    } else {
      setData({
        ...data,
        email: val,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const {signIn} = React.useContext(AuthContext);

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
          Registration
        </Text>

        <TextInput
          label="Email"
          mode="flat"
          style={styles.InputLogin}
          theme={{colors: {primary: '#159957'}}}
          onChangeText={val => textInputChange(val)}
        />
        <TextInput
          label="password"
          mode="flat"
          secureTextEntry={true}
          onChangeText={val => handlePasswordChange(val)}
          style={{marginLeft: 18, marginRight: 18, marginTop: 15, height: 55}}
          theme={{colors: {primary: '#159957'}}}
        />
        <TextInput
          label="Confirm Password"
          mode="flat"
          secureTextEntry={true}
          onChangeText={val => handlePasswordChange(val)}
          style={{marginLeft: 18, marginRight: 18, marginTop: 15, height: 55}}
          theme={{colors: {primary: '#159957'}}}
        />
        <Text
          style={{
            color: 'white',
            marginTop: 20,
            fontSize: 18,
            alignSelf: 'center',
          }}
          onPress={() => props.navigation.replace('Home')}>
          Register
        </Text>

        <TouchableOpacity>
          <Text
            onPress={() => props.navigation.replace('Login')}
            style={{
              fontSize: 18,
              alignSelf: 'center',
              marginTop: 20,
              color: 'white',
            }}>
            SignIn
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default RegisterScreen;
