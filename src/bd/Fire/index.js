import firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAJnOA0MtJIy4iYgbd5rDMtryd5m4iz9NU',
  authDomain: 'sana-f774a.firebaseapp.com',
  databaseURL:
    'https://sana-f774a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'sana-f774a',
  storageBucket: 'sana-f774a.appspot.com',
  messagingSenderId: '326332398632',
  appId: '1:326332398632:web:003fbfaa809630c7c6c91d',
  measurementId: 'G-CSHJSQCJ4Z',
};

class Fire {
  constructor(callback) {
    this.init(callback);
  }
  init(callback) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback(null, user);
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch(error => {
            callback(error);
          });
      }
    });
  }
  getLists(callback) {
    let ref = this.ref.orderBy('name');

    this.unsubscribe = ref.onSnapshot(snapshot => {
      lists = [];

      snapshot.forEach(doc => {
        lists.push({id: doc.id, ...doc.data()});
      });

      callback(lists);
    });
  }
  addList(list) {
    let ref = this.ref;

    ref.add(list);
  }
  updateList(list) {
    let ref = this.ref;

    ref.doc(list.id).update(list);
  }
  get userId() {
    return firebase.auth().currentUser.uid;
  }
  get ref() {
    return firebase
      .firestore()
      .collection('users')
      .doc(this.userId)
      .collection('lists');
  }
  detach() {
    this.unsubscribe();
  }
}

export default Fire;
