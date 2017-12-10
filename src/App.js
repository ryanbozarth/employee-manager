import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCJMBkB_RzIvg2ZJVlgJ_GxWY8-5d4noVg',
      authDomain: 'manager-7b232.firebaseapp.com',
      databaseURL: 'https://manager-7b232.firebaseio.com',
      projectId: 'manager-7b232',
      storageBucket: '',
      messagingSenderId: '673091616325'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
