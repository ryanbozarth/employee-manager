import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
