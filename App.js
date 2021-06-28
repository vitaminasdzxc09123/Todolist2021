import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';

import TaskScreen from './src/screens/TaskScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AddButton from './src/components/AddButton';

const Tab = createMaterialBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
