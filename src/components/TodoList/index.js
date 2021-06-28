import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../Colors/Colors';
import TodoModal from '../TodoModal';
import styles from '../TodoList/styles';
export default class TodoList extends React.Component {
  state = {
    showListVisible: false,
  };

  toggleListModal() {
    this.setState({showListVisible: !this.state.showListVisible});
  }

  render(index) {
    const list = this.props.list;
    const completedCount = list.todos.filter(todo => todo.completed).length;
    const remainingCount = list.todos.length - completedCount;

    return (
      <View>
        <Modal
          animationType="slide"
          visible={this.state.showListVisible}
          onRequestClose={() => this.toggleListModal()}>
          <TodoModal
            list={list}
            closeModal={() => this.toggleListModal()}
            updateList={this.props.updateList}
          />
        </Modal>

        <TouchableOpacity
          style={[styles.listContainer, {backgroundColor: list.color}]}
          onPress={() => this.toggleListModal()}>
          <Text style={styles.listTitle} numberOfLines={1}>
            {list.name}
          </Text>
          <View>
            <View
              onPress={() => this.deleleTodo(index)}
              style={{alignItems: 'center'}}>
              <Text style={styles.count}>{remainingCount}</Text>
              <Text style={styles.subtitle}>Reamaining</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.count}>{completedCount}</Text>
              <Text style={styles.subtitle}>Completed</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
