import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Modal,
  ActivityIndicator,
} from 'react-native';
import colors from '../../components/Colors/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import tempData from '../../components/tempData';
import TodoList from '../../components/TodoList';
import AddListModal from '../../components/AddListModal';
import Fire from '../../bd/Fire';
import styles from '../Screen/styles';

export default class App extends React.Component {
  state = {
    addTodoVisible: false,
    lists: [],
    user: {},
    loading: true,
  };

  componentDidMount() {
    firebase = new Fire((error, user) => {
      if (error) {
        return alert('Oh, sorry');
      }
      firebase.getLists(lists => {
        this.setState({lists, user}, () => {
          this.setState({loading: false});
        });
      });
      this.setState({user});
    });
  }
  componentWillUnmount() {
    firebase.detach();
  }
  toggleAddTodoModal() {
    this.setState({addTodoVisible: !this.state.addTodoVisible});
  }

  renderList = list => {
    return <TodoList list={list} updateList={this.updateList} />;
  };

  addList = list => {
    firebase.addList({
      name: list.name,
      color: list.color,
      todos: [],
    });
  };

  updateList = list => {
    firebase.updateList(list);
  };
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={colors.blue} />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={this.state.addTodoVisible}
          onRequestClose={() => this.toggleAddTodoModal()}>
          <AddListModal
            closeModal={() => this.toggleAddTodoModal()}
            addList={this.addList}
          />
        </Modal>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            Todo
            <Text style={{fontWeight: '300', color: colors.blue}}>Lists</Text>
          </Text>
          <View style={styles.divider} />
        </View>
        <View style={{marginVertical: 48}}>
          <TouchableOpacity
            style={styles.addList}
            onPress={() => this.toggleAddTodoModal()}>
            <AntDesign name="plus" size={16} color={colors.blue} />
          </TouchableOpacity>

          <Text style={styles.add}>Add List</Text>
        </View>
        <View style={{height: 275, paddingLeft: 32}}>
          <FlatList
            data={this.state.lists}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => this.renderList(item)}
            keyboardShouldPersistTaps="always"
          />
        </View>
      </View>
    );
  }
}
