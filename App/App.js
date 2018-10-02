import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Login from './screens/Login';


class App extends React.Component{
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDg8UuMvPpHNZ86GqBid_aJJnyfWe4tiXg',
      authDomain: 'authentication-73.firebaseapp.com',
      databaseURL: 'https://authentication-73.firebaseio.com',
      projectId: 'authentication-73',
      storageBucket: 'authentication-73.appspot.com',
      messagingSenderId: '715611943987'
    };
    firebase.initializeApp(config);
  }

  render(){
    return(
      <Provider store={ createStore(reducers)}>
        <Login />
      </Provider>

    );
  }
};



export default App;
