import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../LoginScreen';
import RegisterScreen from '../RegisterScreen';

const Stack = createStackNavigator();

const StackScreen = ({navigation}) => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default StackScreen;
