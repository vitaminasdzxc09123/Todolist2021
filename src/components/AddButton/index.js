import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Animated,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../AddButton/styles';
export default class AddButton extends React.Component {
  buttonSize = new Animated.Value(1);
  mode = new Animated.Value(0);

  handlePress = () => {
    Animated.sequence([
      Animated.timing(this.buttonSize, {
        toValue: 0.95,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(this.buttonSize, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(this.mode, {
        toValue: this.mode._value === 0 ? 1 : 0,
        useNativeDriver: false,
      }),
    ]).start();
  };
  render() {
    const thermometerX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, -100],
    });

    const thermometerY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -100],
    });

    const timeX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, -24],
    });

    const timeY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -150],
    });

    const pulseX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, 50],
    });

    const pulseY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -100],
    });

    const rotation = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg'],
    });

    const sizeStyle = {
      transform: [{scale: this.buttonSize}],
    };

    return (
      <View style={{position: 'absolute', alignItems: 'center'}}>
        <Animated.View
          style={{position: 'absolute', left: thermometerX, top: thermometerY}}>
          <TouchableOpacity>
            <View style={styles.secondaryButton}>
              <Feather name="thermometer" size={24} color="#FFF" />
            </View>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{position: 'absolute', left: timeX, top: timeY}}>
          <View style={styles.secondaryButton}>
            <Feather name="clock" size={24} color="#FFF" />
          </View>
        </Animated.View>
        <Animated.View
          style={{position: 'absolute', left: pulseX, top: pulseY}}>
          <View style={styles.secondaryButton}>
            <Feather name="activity" size={24} color="#FFF" />
          </View>
        </Animated.View>
        <Animated.View style={[styles.button, sizeStyle]}>
          <TouchableHighlight
            onPress={this.handlePress}
            underlayColor="#7F58FF">
            <Animated.View style={{transform: [{rotate: rotation}]}}>
              <FontAwesome5 name="plus" size={24} color="#FFF" />
            </Animated.View>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
}
