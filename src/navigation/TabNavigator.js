import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import AddButton from '../components/AddButton/index';
import {
  JournalScreen,
  ProfileScreen,
  MapScreen,
  SanScreen,
} from '../screens/index';

const TabNavigator = createBottomTabNavigator(
  {
    Journal: {
      screen: JournalScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <AntDesign
            onPress={() => props.navigation.navigate('HomeScreen')}
            name="aliwangwang-o1"
            size={35}
            color="#7F58FF"
          />
        ),
      },
    },

    Add: {
      screen: () => null,
      navigationOptions: {
        tabBarIcon: <AddButton />,
      },
    },

    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <Feather name="message-circle" size={30} color="#7F58FF" />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  },
);

export default createAppContainer(TabNavigator);

// const Tab = createMaterialBottomTabNavigator();

// const TabNavigator=() => {
//   return (
//     <Tab.Navigator
//           barStyle={{
//           activeTintColor: '#775AC8',
//           inactiveTintColor: '#8B7AD3',
//           tabStyle: {
//             marginTop: 2,
//             marginBottom: -10,
//           }}}>
//       <Tab.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: () => (
//             <AntDesign
//               onPress={() => props.navigation.navigate('HomeScreen')}
//               name="aliwangwang-o1"
//               size={35}
//               color="#7F58FF"
//             />
//           ),
//         }}
//       />
//       </Tab.Navigator>

//     //   Add: {
//     //     screen: () => null,

//     //     navigationOptions: {
//     //       tabBarIcon: <AddButton />,
//     //     },
//     //   },
//     //   Massage: {
//     //     screen: ProfileScreen,
//     //     navigationOptions: {
//     //       tabBarIcon: () => (
//     //         <Feather name="message-circle" size={30} color="#7F58FF" />
//     //       ),
//     //     },
//     //   },
//     // },
//     // {
//     //
//     //     },
//     //   },
//     // );

//   );
// }
// export default TabNavigator;
