import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {color} from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../Colors/Colors';
import styles from '../AddListModal/styles';
export default class AddListModal extends React.Component {
  backgroundColor = [
    '#5CD859',
    '#24A6D9',
    '#595BD9',
    '#8022D9',
    '#D159D8',
    '#D85963',
    '#D88559',
  ];

  state = {
    name: '',
    color: this.backgroundColor[0],
  };

  createTodo = () => {
    const {name, color} = this.state;

    const list = {name, color};
    this.props.addList(list);

    this.setState({name: ''});
    this.props.closeModal();
  };

  renderColors() {
    return this.backgroundColor.map(color => {
      return (
        <TouchableOpacity
          key={color}
          style={[styles.colorSelect, {backgroundColor: color}]}
          onPress={() => this.setState({color})}
        />
      );
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity
          style={{position: 'absolute', top: 64, right: 32}}
          onPress={this.props.closeModal}>
          <AntDesign name="close" size={24} color={colors.black} />
        </TouchableOpacity>
        <View style={{alignSelf: 'stretch', marginHorizontal: 32}}>
          <Text style={styles.title}>Create Todo List</Text>
          <TextInput
            style={styles.input}
            placeholder="List Name?"
            onChangeText={text => this.setState({name: text})}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 12,
            }}>
            {this.renderColors()}
          </View>
          <TouchableOpacity
            style={[styles.create, {backgroundColor: this.state.color}]}
            onPress={this.createTodo}>
            <Text style={{color: colors.white, fontWeight: '600'}}>
              Create!
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
